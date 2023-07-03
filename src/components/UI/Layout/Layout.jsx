import { combineClasses } from '@helpers/combineClasses';
import { memo } from 'react';
import styles from './Layout.module.scss';

export const Layout = memo(function Layout({ children, customClasses }) {
  const layoutClasses = combineClasses([styles.Layout], customClasses);

  return <div className={layoutClasses}>{children}</div>;
});
