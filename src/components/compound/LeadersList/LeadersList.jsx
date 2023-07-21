import { useRef, useEffect } from 'react';

import { useMatchMedia } from '@hooks/useMatchMedia';

import styles from './LeadersList.module.scss';

export function LeadersList({ leaders, fetchMoreFn, isOwnerFound }) {
  const observedElemRef = useRef();
  const observerRootRef = useRef();

  const { isPortrait } = useMatchMedia();

  useEffect(() => {
    if (!isPortrait) {
      const loadingObserver = observedElemRef.current;

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchMoreFn();
          }
        });
      };

      const options = {
        root: observerRootRef.current,
        rootMargin: '0px 0px 10%',
        threshold: 0,
      };

      const observer = new IntersectionObserver(callback, options);

      observer.observe(loadingObserver);

      return () => observer.unobserve(loadingObserver);
    }
  }, [isPortrait]);

  const leaderClasses = [styles.LeadersList__lineItem, styles.LeadersList__leader].join(' ');

  const leaderAdressClasses = [leaderClasses, styles.LeadersList__adress, isOwnerFound ? styles.LeadersList__highlight : ''].join(' ');

  const leaderPointsClasses = [leaderClasses, styles.LeadersList__points, isOwnerFound ? styles.LeadersList__highlight : ''].join(' ');

  const leaderRewardClasses = [leaderClasses, styles.LeadersList__reward, isOwnerFound ? styles.LeadersList__highlight : ''].join(' ');

  const scrollContainerClasses = [styles.LeadersList, styles.LeadersList__scrollContainer, isOwnerFound ? styles.LeadersList__scrollContainer_noScroll : ''].join(' ');

  const headerClasses = [styles.LeadersList__line, styles.header].join(' ');

  return (
    <div className={styles.LeadersList__wrapper}>
      <header className={headerClasses}>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__adress}`}>Address</div>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__points}`}>Points</div>
        <div className={`${styles.LeadersList__headerItem} ${styles.LeadersList__reward}`}>Reward</div>
      </header>
      <ul
        className={scrollContainerClasses}
        ref={observerRootRef}
      >
        {leaders.map((leader) => (
          <li
            className={styles.LeadersList__line}
            key={leader.address}
          >
            <div className={leaderAdressClasses}>{leader.address}</div>
            <div className={leaderPointsClasses}>{leader.score.toFixed(2)}</div>
            <div className={leaderRewardClasses}>{leader.reward.toFixed(3)} WBGL</div>
          </li>
        ))}
        {!isPortrait && <div ref={observedElemRef}></div>}
      </ul>
    </div>
  );
}
