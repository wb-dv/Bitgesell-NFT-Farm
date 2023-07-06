import styles from './Pagination.module.scss';

export function Pagination() {
  const page = 1;

  const buttonPrevClasses = [styles.Pagination__button, styles.Pagination__button_prev].join(' ');
  const buttonNextClasses = [styles.Pagination__button, styles.Pagination__button_next].join(' ');

  return (
    <div className={styles.Pagination}>
      <button className={buttonPrevClasses} type="button" aria-label="previous leaderboard page" />
      {page}.....15
      <button className={buttonNextClasses} type="button" aria-label="next leaderboard page" />
    </div>
  );
}
