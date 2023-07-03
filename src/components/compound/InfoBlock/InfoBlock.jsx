import { SocialLink } from '@UI/SocialLink/SocialLink';
import { ByLink } from '@UI/ByLink/ByLink';
import { WBGLCounter } from '@UI/WBGLCounter/WBGLCounter';

import styles from './InfoBlock.module.scss';

const socials = {
  twitter: {
    type: 'twitter',
    href: 'https://twitter.com/bit_gesell',
  },
  g44: {
    type: 'g44',
    href: 'https://bitgesell.ca/',
  },
  discord: {
    type: 'discord',
    href: 'https://discord.gg/4pz9rN7QCp',
  },
};

export function InfoBlock() {
  return (
    <section className={styles.InfoBlock}>
      <WBGLCounter count={567} />
      <ByLink />
      <div className={styles.InfoBlock__socialLinks}>
        <SocialLink type={socials.twitter.type} href={socials.twitter.href} />
        <SocialLink type={socials.g44.type} href={socials.g44.href} />
        <SocialLink type={socials.discord.type} href={socials.discord.href} />
      </div>
    </section>
  );
}
