import { combineClasses } from '@helpers/combineClasses';
import styles from './Copyright.module.scss';

export function Copyright({ customClasses }) {
    const currYear = new Date().getFullYear();
    const CopyrightClasses = combineClasses(
        [styles.Copyright],
        [customClasses]
    );

    return <section className={CopyrightClasses}>© 2023-{currYear}</section>;
}
