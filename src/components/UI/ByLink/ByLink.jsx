import { memo } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './ByLink.module.scss';

const link =
    window.byLink || 'https://opensea.io/collection/new-bitgesell-road';

export const ByLink = memo(function ByLink({ customClasses }) {
    const byLinkClasses = combineClasses([styles.ByLink], customClasses);

    return (
        <a
            className={byLinkClasses}
            href={link}
            target='_blank'
            rel='noreferrer'
        >
            get WBGL
        </a>
    );
});
