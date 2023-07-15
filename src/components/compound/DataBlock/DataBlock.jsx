import { useQuery } from '@tanstack/react-query';
import { baseRefetchInterval, getLastPayment } from '@api';

import { UserScore } from '../UserScore/UserScore';
import { LeaderBoard } from '../LeaderBoard/LeaderBoard';

import { LastPayment } from '@UI/LastPayment/LastPayment';

import styles from './DataBlock.module.scss';

export function DataBlock() {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: getLastPayment,
    queryKey: ['last-payment'],
    refetchInterval: baseRefetchInterval,
  })

  return (
    <section className={styles.DataBlock}>
      <UserScore />
      <LeaderBoard />
      <LastPayment 
        transaction={isLoading ? '?' : isSuccess ? data.hash : '-'} 
        url={isSuccess ? data.href : '#'} 
      />
    </section>
  );
}
