import { memo, useRef, useId, useState } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './Search.module.scss';

export const Search = memo(function Search({ customInputClasses, customWrapperClasses, label, searchFn = () => {}, validFn = () => true }) {
  const searchRef = useRef();
  const searchId = useId();
  const [validError, setValidError] = useState(false);

  const searchInputClasses = combineClasses([styles.Search, validError ? styles.Search__error : ''], customInputClasses);
  const searchWrapperClasses = combineClasses([styles.Search__wrapper], customWrapperClasses);

  const resetValidError = () => {
    if (searchRef.current.value === '') setValidError(false);
  };

  const clearInput = () => {
    searchRef.current.value = '';
    setValidError(false);
  };

  const search = () => {
    if (validFn(searchRef.current.value)) {
      searchFn(searchRef.current.value);
      clearInput();
    } else {
      setValidError(true);
    }
  };

  const searchOnEnter = (e) => {
    if (e.key === 'Enter') search();
  };

  return (
    <div className={searchWrapperClasses}>
      <button className={styles.Search__loupe} type="button" aria-label="search" onClick={search} />
      <label className={styles.Search__hiddenLabel} htmlFor={searchId}>
        {label}
      </label>
      <input className={searchInputClasses} id={searchId} ref={searchRef} onKeyUp={searchOnEnter} onBlur={resetValidError} />
      <button className={styles.Search__clear} type="button" onClick={clearInput} aria-label="clear input" />
    </div>
  );
});
