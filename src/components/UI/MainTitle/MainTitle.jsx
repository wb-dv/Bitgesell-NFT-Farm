import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './MainTitle.module.scss';

export const MainTitle = memo(function MainTitle({ customClasses }) {
  const mainTitleClasses = combineClasses([styles.MainTitle], customClasses);

  return (
    <header className={mainTitleClasses}>
      <h1 className={styles.MainTitle__h1}>
        Bitgesell <strong className={styles.MainTitle__strong}>NFT Farm</strong>
      </h1>
    </header>
  );
});
