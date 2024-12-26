import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

type CardProps = {
   bordered?: boolean;
   fullWidth?: boolean;
   children: ReactNode;
};

export const Card: FC<CardProps> = ({ fullWidth = false, bordered = false, children }) => (
   <div 
      className={clsx(
         styles.card, 
         { [styles.fullWidth]: fullWidth },
         { [styles.bordered]: bordered },
      )}>
      {children}
   </div>
);
