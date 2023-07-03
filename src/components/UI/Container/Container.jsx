import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './Container.module.scss';

export const Container = memo(function Container({ children, customClasses }) {
  const containerClasses = combineClasses([styles.Container], customClasses);

  return <main className={containerClasses}>{children}</main>;
});
