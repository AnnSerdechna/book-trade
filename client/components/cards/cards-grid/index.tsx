import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

const classMap = {
   4: styles['cols-4'],
   5: styles['cols-5'],
};

type CardsGridProps = {
   cols: 4 | 5;
   children: ReactNode;
}

export const CardsGrid: FC<CardsGridProps> = ({ cols, children }) => {
   return(
      <div 
         className={clsx(styles.cardsGrid, classMap[cols],)}
      >
         {children}
      </div>
   );
};
