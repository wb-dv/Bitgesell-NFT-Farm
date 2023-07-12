import { useQuery } from '@tanstack/react-query';
import { getOwners } from '@api';

import { Spinner } from '@UI/Spinner/Spinner';

import styles from './LeadersList.module.scss';

export function LeadersList() {
  const {
    data: leaders,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getOwners,
    queryKey: ['leaders'],
    refetchInterval: 3 * 60 * 1000,
  });

  const leaderClasses = [styles.LeadersList__lineItem, styles.LeadersList__leader].join(' ');

  const leaderAdressClasses = [leaderClasses, styles.LeadersList__adress].join(' ');

  const leaderPointsClasses = [leaderClasses, styles.LeadersList__points].join(' ');

  const leaderRewardClasses = [leaderClasses, styles.LeadersList__reward].join(' ');

  return (
    <div className={styles.LeadersList__wrapper}>
      <header className={styles.LeadersList__line}>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__adress}`}>Adress</div>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__points}`}>Points</div>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__reward}`}>Reward</div>
      </header>
      <ul className={styles.LeadersList}>
        {isSuccess ? (
          leaders.map((leader) => (
            <li className={styles.LeadersList__line} key={leader.address}>
              <div className={leaderAdressClasses}>{leader.address}</div>
              <div className={leaderPointsClasses}>{leader.score.toFixed(2)}</div>
              <div className={leaderRewardClasses}>{leader.reward.toFixed(3)} WBGL</div>
            </li>
          ))
        ) : (
          <div className={styles.LeadersList__noOwners}>No owners</div>
        )}
      </ul>
      {isLoading && <Spinner />}
    </div>
  );
}
