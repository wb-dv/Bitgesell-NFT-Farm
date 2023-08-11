import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './ByLink.module.scss';

export const ByLink = memo(function ByLink({ customClasses }) {
  const byLinkClasses = combineClasses([styles.ByLink], customClasses);

  return (
    <a
      className={byLinkClasses}
      href="https://opensea.io/collection/bitgesell-road"
      target="_blank"
      rel="noreferrer"
    >
      get WBGL
    </a>
  );
});
