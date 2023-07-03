import styles from './LeadersList.module.scss';
import { leaders } from './testLeadersData';

export function LeadersList() {
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
        {Array.isArray(leaders) &&
          leaders.map((leader) => (
            <li className={styles.LeadersList__line} key={leader.id}>
              <div className={leaderAdressClasses}>{leader.adress}</div>
              <div className={leaderPointsClasses}>{leader.points}</div>
              <div className={leaderRewardClasses}>{leader.reward} WBGL</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
