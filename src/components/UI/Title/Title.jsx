import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './Title.module.scss';

export const Title = memo(function Title({ children, customClasses }) {
  const titleClasses = combineClasses([styles.Title], customClasses);

  return <h3 className={titleClasses}>{children}</h3>;
});
