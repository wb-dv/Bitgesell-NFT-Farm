import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './SocialLink.module.scss';

export const SocialLink = memo(function SocialLink({ type, customClasses, children, ...props }) {
  const typeLink = type ? styles[type] : '';

  const linkClasses = combineClasses([styles.SocialLink, typeLink], customClasses);

  return (
    <a className={linkClasses} {...props} target="_blank" rel="noreferrer" aria-label={`link to ${type}`}>
      {children ?? children}
    </a>
  );
});
