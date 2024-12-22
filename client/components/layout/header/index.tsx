import { FC } from 'react';
import Image from 'next/image';

import { Logo } from '@/components/branding';
import { Menu } from '@/components/layout';
import { ProfileIcon } from '@/public';

import styles from './index.module.scss';

export const Header: FC = () => (
   <header className={styles.header}>
      <div className={styles.headerLeft}>
         <Logo />
         <nav>
            <Menu />
         </nav>
      </div>

      <div className=''>
         <Image
            src={ProfileIcon.src}
            alt={'User icon'}
            width={24}
            height={24}
         />
      </div>
   </header>
);
