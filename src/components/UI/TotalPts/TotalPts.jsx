import { combineClasses } from '@helpers/combineClasses';
import styles from './TotalPts.module.scss';

export function TotalPts({ pts, customClasses }) {
  const totalPtsClasses = combineClasses([styles.TotalPts], customClasses);

  return (
    <div className={totalPtsClasses}>
      total <strong className={styles.TotalPts__count}>{pts}</strong> pts
    </div>
  );
}
