import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

type BadgeProps = {
   count: number;
   children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ count, children }) => (
   <div className={styles.badgeWrap}>
      <span className={styles.badge}>
         {count}
      </span>
      {children}
   </div>
)