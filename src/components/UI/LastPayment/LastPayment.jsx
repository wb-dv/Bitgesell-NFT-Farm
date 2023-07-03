import styles from './LastPayment.module.scss';

export function LastPayment({ transaction }) {
  return (
    <section className={styles.LastPayment}>
      <strong className={styles.LastPayment__strong}>Last payment: </strong>
      {transaction}
    </section>
  );
}
