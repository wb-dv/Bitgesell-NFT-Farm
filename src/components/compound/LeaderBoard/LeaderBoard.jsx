import { LeadersList } from '../LeadersList/LeadersList';

import { Search } from '@UI/Search/Search';
import { Title } from '@UI/Title/Title';

import { useMemo } from 'react';

import styles from './LeaderBoard.module.scss';

export function LeaderBoard() {
  const leaderBoardSearchClasses = useMemo(() => [styles.LeaderBoard__search], []);

  return (
    <section className={styles.LeaderBoard__wrapper}>
      <Title>Leader board</Title>
      <div className={styles.LeaderBoard}>
        <div className={styles.LeaderBoard__scrollContainer}>
          <Search customWrapperClasses={leaderBoardSearchClasses} />
          <LeadersList />
        </div>
      </div>
    </section>
  );
}
