import { combineClasses } from '@helpers/combineClasses';
import styles from './Token.module.scss';

export function Token({ level, idx, count, customClasses }) {
  const tokenClasses = combineClasses([styles.Token, count > 0 ? styles[`Token__${level}_${idx + 1}`] : ''], customClasses);

  return <li className={tokenClasses} data-count={count}></li>;
}
