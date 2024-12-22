import { FC } from 'react';

import { menuItems } from '@/components/layout/menu/menuItems';
import { MenuLink } from '@/components/layout/menu/menu-link';
import styles from './index.module.scss';

export const Menu: FC = () => (
   <ul className={styles.menu}>
      {menuItems.map((item) => (
         <li key={item.path}>
            <MenuLink {...item} />
         </li>
      ))}
   </ul>
);
