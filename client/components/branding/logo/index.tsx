import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.scss';

export const Logo: FC = () => (
   <Link href={'/'} className={styles.logo}>
      Book Trade
   </Link>
);
