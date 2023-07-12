import { combineClasses } from '@helpers/combineClasses';
import { memo } from 'react';

import styles from './WBGLCounter.module.scss';

export const WBGLCounter = memo(function WBGLCounter({ count, customClasses }) {
  const WBGLCounterClasses = combineClasses([styles.WBGLCounter], customClasses);

  return (
    <header className={WBGLCounterClasses}>
      <h2 className={styles.WBGLCounter__title}>
        <strong className={styles.WBGLCounter__count}>
          {typeof count === 'number' ? count.toFixed(0) : count} 
        </strong> wbgl
      </h2>
    </header>
  );
});
