import { UserScore } from '../UserScore/UserScore';
import { LeaderBoard } from '../LeaderBoard/LeaderBoard';
import { LastPayment } from '@UI/LastPayment/LastPayment';

import styles from './DataBlock.module.scss';

export function DataBlock() {
  return (
    <section className={styles.DataBlock}>
      <UserScore />
      <LeaderBoard />
      <LastPayment transaction="0xc8bbee276dcef3fbd8534e6f8e032c68336a30e3b149396f11869f4a6d836c7f" />
    </section>
  );
}
