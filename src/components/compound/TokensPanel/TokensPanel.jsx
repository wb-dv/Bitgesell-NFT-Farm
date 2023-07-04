import { useMemo } from 'react';

import { Search } from '@UI/Search/Search';
import { TokensList } from '@UI/TokensList/TokensList';
import { TotalPts } from '@UI/TotalPts/TotalPts';

import styles from './TokensPanel.module.scss';

import { allTokens, pts } from './testTokensData';

export function TokensPanel() {
  const customSearchClasses = useMemo(() => [styles.TokensPanel__search], []);

  return (
    <div className={styles.TokensPanel__coin}>
      <div className={styles.TokensPanel}>
        <div className={styles.TokensPanel__flex}>
          <Search customWrapperClasses={customSearchClasses}/>
          {allTokens.map((tokens) => (
            <TokensList 
              tokens={tokens} 
              level={tokens[0].level} 
              countPts={pts[tokens[0].level]} 
              key={tokens[0].level}
            />
          ))}
        </div>
        <TotalPts pts={1655} />
      </div>
    </div>
  );
}
