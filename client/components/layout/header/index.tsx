import { FC } from 'react';

import styles from './index.module.scss';
import { Logo } from '@/components/branding';
import { NavMenu, ProfileMenu } from '@/components/layout';
import { Login } from '@/components/auth';

export const Header: FC = () => (
   <header className={styles.header}>
      <div className={styles.headerLeft}>
         <Logo />
         <nav>
            <NavMenu />
         </nav>
      </div>

      <div className={styles.headerRight}>
         <Login />
         <ProfileMenu />
      </div>
   </header>
);
