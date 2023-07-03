import { memo } from 'react';

import { Token } from '../Token/Token';

import styles from './TokensList.module.scss';

export const TokensList = memo(function TokensList({ level, tokens, countPts }) {
  const levelClass = styles[level];
  
  return (
    <div className={`${styles.TokensList__wrapper} ${levelClass}`}>
      <h4 className={styles.TokensList__title}>
        {`${level} `}
        <strong className={`${styles.TokensList__countPts} ${levelClass}`}>
          {countPts} pts
        </strong>
      </h4>
      <ul className={styles.TokensList}>
        {Array.isArray(tokens) && tokens.map((token, i) => (
          <Token idx={i} count={token.count} level={level} key={token.id} />
        ))}
      </ul>
    </div>
  );
});
