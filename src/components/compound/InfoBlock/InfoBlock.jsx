import { useQuery } from '@tanstack/react-query';
import { baseRefetchInterval, getWBGL } from '@api';

import { SocialLink } from '@UI/SocialLink/SocialLink';
import { ByLink } from '@UI/ByLink/ByLink';
import { WBGLCounter } from '@UI/WBGLCounter/WBGLCounter';

import styles from './InfoBlock.module.scss';

const socials = {
  twitter: {
    type: 'twitter',
    href: 'https://twitter.com/myluckbitcoin',
  },
  site: {
    type: 'site',
    href: 'https://bitgesell.ca/',
  },
  telegram: {
    type: 'telegram',
    href: 'https://t.me/bitgesellofficial',
  },
};

export function InfoBlock() {
  const {
    data: WBGLCount,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getWBGL,
    queryKey: ['WBGL'],
    refetchInterval: baseRefetchInterval,
  });

  return (
    <section className={styles.InfoBlock}>
      <WBGLCounter count={isLoading ? '?' : isSuccess ? WBGLCount : 0} />
      <ByLink />
      <div className={styles.InfoBlock__socialLinks}>
        <SocialLink
          type={socials.twitter.type}
          href={socials.twitter.href}
        />
        <SocialLink
          type={socials.site.type}
          href={socials.site.href}
        />
        <SocialLink
          type={socials.telegram.type}
          href={socials.telegram.href}
        />
      </div>
    </section>
  );
}
