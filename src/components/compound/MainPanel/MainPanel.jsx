import { DataBlock } from '@compound/DataBlock/DataBlock';
import { InfoBlock } from '@compound/InfoBlock/InfoBlock';

import styles from './MainPanel.module.scss';

export function MainPanel() {
  return (
    <section className={styles.MainPanel}>
      <DataBlock />
      <InfoBlock />
    </section>
  );
}
