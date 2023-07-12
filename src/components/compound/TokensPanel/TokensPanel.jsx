import { useMemo, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getNFTsInfo } from '@api';

import { separateNFTsByLevel } from '@helpers/separateNFTsByLevel';

import { Search } from '@UI/Search/Search';
import { TokensList } from '@UI/TokensList/TokensList';
import { TotalPts } from '@UI/TotalPts/TotalPts';
import { TokensPlaceholder } from '@UI/TokensPlaceholder/TokensPlaceholder';
import { Spinner } from '@UI/Spinner/Spinner';

import styles from './TokensPanel.module.scss';

export function TokensPanel() {
  const customSearchClasses = useMemo(() => [styles.TokensPanel__search], []);

  const queryClient = useQueryClient();

  const {mutate: getNFTs, data, isLoading, isSuccess} = useMutation({
    mutationFn: getNFTsInfo,
    mutationKey: ['nfts-info'],
    onSuccess: (data) => {
      data.nfts = separateNFTsByLevel(data.nfts);
      queryClient.setQueryData(['nfts-info'], data);
    }
  })

  const validAddress = useCallback((address) => {
    return address.trim().length === 42;
  }, [])

  return (
    <div className={styles.TokensPanel__coin}>
      <div className={styles.TokensPanel}>
        <div className={styles.TokensPanel__flex}>
          <Search 
            customWrapperClasses={customSearchClasses} 
            label='Search NFT for address' 
            searchFn={getNFTs}
            validFn={validAddress}
          />
          {isSuccess ? (
              data.nfts.map(nftByLevel => (
                <TokensList 
                  tokens={nftByLevel} 
                  level={nftByLevel[0].level} 
                  countPts={data.pts_by_grade[nftByLevel[0].level]} 
                  key={nftByLevel[0].level}
                />
              ))
            ) : <TokensPlaceholder />
          }
        </div>
        <TotalPts pts={isLoading ? '?' : isSuccess ? data.sum_pts : 0} />
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}
