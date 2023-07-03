import { memo, useRef } from 'react';

import { combineClasses } from '@helpers/combineClasses';

import styles from './Search.module.scss';

export const Search = memo(function Search({ customInputClasses, customWrapperClasses }) {
  const searchRef = useRef();

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
      <button className={styles.Search__loupe} type="button" />
      <input className={searchInputClasses} ref={searchRef} onKeyUp={searchAdress} />
      <button className={styles.Search__clear} type="button" onClick={clearInput} />
    </div>
  );
});
