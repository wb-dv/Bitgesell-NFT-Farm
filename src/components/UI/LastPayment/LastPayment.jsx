import styles from './LastPayment.module.scss';

export function LastPayment({ transaction, url }) {
  return (
    <section className={styles.LastPayment}>
      <strong className={styles.LastPayment__strong}>Last payment: </strong>
      <a className={styles.LastPayment__link} href={url} target="_blank" rel="noreferrer">
        {transaction}
      </a>
    </section>
  );
}
