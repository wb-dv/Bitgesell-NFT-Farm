import { memo } from 'react';

import { allTokens } from './testTokensData';

import { TokensList } from '../TokensList/TokensList';

import styles from './TokensPlaceholder.module.scss';

export const TokensPlaceholder = memo(function TokensPlaceholder() {
  return (
    <>
      {allTokens.map((tokens) => (
        <TokensList tokens={tokens} level={tokens[0].level} countPts={0} key={tokens[0].level} />
      ))}
    </>
  );
});
