import styles from './Pagination.module.scss';

export function Pagination() {
  const page = 1;

  const buttonPrevClasses = [styles.Pagination__button, styles.Pagination__button_prev].join(' ');
  const buttonNextClasses = [styles.Pagination__button, styles.Pagination__button_next].join(' ');

  return (
    <div className={styles.Pagination}>
      <button className={buttonPrevClasses} type="button" />
      {page}.....15
      <button className={buttonNextClasses} type="button" />
    </div>
  );
}
