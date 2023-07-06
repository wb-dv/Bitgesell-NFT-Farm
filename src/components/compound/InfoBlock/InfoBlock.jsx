import { SocialLink } from '@UI/SocialLink/SocialLink';
import { ByLink } from '@UI/ByLink/ByLink';
import { WBGLCounter } from '@UI/WBGLCounter/WBGLCounter';

import styles from './InfoBlock.module.scss';

const socials = {
  twitter: {
    type: 'twitter',
    href: 'https://twitter.com/bit_gesell',
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
  return (
    <section className={styles.InfoBlock}>
      <WBGLCounter count={567} />
      <ByLink />
      <div className={styles.InfoBlock__socialLinks}>
        <SocialLink type={socials.twitter.type} href={socials.twitter.href} />
        <SocialLink type={socials.site.type} href={socials.site.href} />
        <SocialLink type={socials.telegram.type} href={socials.telegram.href} />
      </div>
    </section>
  );
}
