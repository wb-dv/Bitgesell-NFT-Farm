import { memo, useRef, useId } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './Search.module.scss';

export const Search = memo(function Search({ customInputClasses, customWrapperClasses, label }) {
  const searchRef = useRef();
  const searchId = useId();

  const searchInputClasses = combineClasses([styles.Search], customInputClasses);
  const searchWrapperClasses = combineClasses([styles.Search__wrapper], customWrapperClasses);

  const clearInput = () => {
    searchRef.current.value = '';
  };

  const searchAdress = (e) => {
    if (e.key === 'Enter') {
      clearInput();
    }
  };

  return (
    <div className={searchWrapperClasses}>
      <button className={styles.Search__loupe} type="button" aria-label="search" />
      <label className={styles.Search__hiddenLabel} htmlFor={searchId}>
        {label}
      </label>
      <input className={searchInputClasses} id={searchId} ref={searchRef} onKeyUp={searchAdress} />
      <button className={styles.Search__clear} type="button" onClick={clearInput} aria-label="clear input" />
    </div>
  );
});
