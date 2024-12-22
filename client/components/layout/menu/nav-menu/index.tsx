import { FC } from 'react';

import { menuItems } from '@/components/layout/menu/nav-menu/menuItems';
import { MenuLink } from '@/components/layout/menu/nav-menu/menu-link';
import styles from './index.module.scss';

export const NavMenu: FC = () => (
   <ul className={styles.navMenu}>
      {menuItems.map((item) => (
         <li key={item.path}>
            <MenuLink {...item} />
         </li>
      ))}
   </ul>
);
