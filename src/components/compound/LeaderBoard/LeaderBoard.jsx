import { useMemo } from 'react';

import { useMatchMedia } from '@hooks/useMatchMedia';
import { useLeadersPagination } from '@hooks/useLeadersPagination';
import { useInfiniteLeaders } from '@hooks/useInfiniteLeaders';
import { usePagesCount } from '@hooks/usePagesCount';
import { useSearchOwner } from '@hooks/useSearchOwner';
import { useValidAddress } from '@hooks/useValidAddress';

import { LeadersList } from '../LeadersList/LeadersList';
import { Pagination } from '../Pagination/Pagination';

import { Search } from '@UI/Search/Search';
import { Title } from '@UI/Title/Title';
import { Spinner } from '@UI/Spinner/Spinner';

import styles from './LeaderBoard.module.scss';

export function LeaderBoard() {
  const { isPortrait } = useMatchMedia();

  const { pagesCount, pagesCountLoading, pagesCountGetted } = usePagesCount();

  const { 
    startOwnerSearch, 
    foundOwner, 
    isSearchingOwner, 
    isOwnerFound, 
    resetSearsch 
  } = useSearchOwner();

  const validAddress = useValidAddress();

  const { 
    leadersPage, 
    leadersPageLoaded, 
    leadersPageLoading, 
    currPage, 
    isPreviousData, 
    setNextPage, 
    setPrevPage 
  } = useLeadersPagination(pagesCount, !isPortrait || !pagesCountGetted);

  const { 
    allLeaders, 
    allLeadersLoaded, 
    allLeadersLoading, 
    fetchMoreLeaders 
  } = useInfiniteLeaders(pagesCount, isPortrait || !pagesCountGetted);

  const leaders = isOwnerFound ? foundOwner : isPortrait ? leadersPage : allLeaders;

  const isSuccess = (isPortrait ? leadersPageLoaded : allLeadersLoaded) || isOwnerFound;
  const isLoading = (isPortrait ? leadersPageLoading : allLeadersLoading) || pagesCountLoading || isSearchingOwner;

  const isNeedToViewPagination = isPortrait && leadersPageLoaded && !isOwnerFound;

  const leaderBoardSearchClasses = useMemo(() => [styles.LeaderBoard__search], []);
  const leaderBoardTitleClasses = useMemo(() => [styles.LeaderBoard__title], []);

  return (
    <section className={styles.LeaderBoard__wrapper}>
      <Title customClasses={leaderBoardTitleClasses}>Leader board</Title>
      <div className={styles.LeaderBoard}>
        <Search
          customWrapperClasses={leaderBoardSearchClasses}
          label="Search in leaderboard"
          validFn={validAddress}
          searchFn={startOwnerSearch}
          onClear={resetSearsch}
        />
        {isSuccess ? (
          <LeadersList
            leaders={leaders}
            fetchMoreFn={fetchMoreLeaders}
            isOwnerFound={isOwnerFound}
          />
        ) : (
          !isLoading && <div className={styles.LeaderBoard__noOwners}>No owners</div>
        )}
        {isNeedToViewPagination && (
          <Pagination
            fetchPrevFn={setPrevPage}
            fetchNextFn={setNextPage}
            pages={pagesCount}
            currPage={currPage}
            prevBthDisabled={isPreviousData}
            nextBthDisabled={isPreviousData}
          />
        )}
        {isLoading && <Spinner />}
      </div>
    </section>
  );
}
