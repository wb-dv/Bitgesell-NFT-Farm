import { LeadersList } from '../LeadersList/LeadersList';

import { Search } from '@UI/Search/Search';
import { Title } from '@UI/Title/Title';

import { useMemo } from 'react';

import styles from './LeaderBoard.module.scss';
import { Pagination } from '../Pagination/Pagination';

export function LeaderBoard() {
  const leaderBoardSearchClasses = useMemo(() => [styles.LeaderBoard__search], []);
  const leaderBoardTitleClasses = useMemo(() => [styles.LeaderBoard__title], []);

  return (
    <section className={styles.LeaderBoard__wrapper}>
      <Title customClasses={leaderBoardTitleClasses}>Leader board</Title>
      <div className={styles.LeaderBoard}>
        <div className={styles.LeaderBoard__scrollContainer}>
          <Search customWrapperClasses={leaderBoardSearchClasses} />
          <LeadersList />
          <Pagination />
        </div>
      </div>
    </section>
  );
}
