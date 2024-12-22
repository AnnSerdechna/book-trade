import { FC, JSX } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

interface TitleProps {
   level?: 1 | 2 | 3 | 4 | 5 | 6;
   title: string;
   type?: 'primary' | 'secondary' | 'accent';
   family?: 'sans' | 'serif';
   centered?: boolean;
}

const classMap = {
   1: styles['font-xl'],
   2: styles['font-lg'],
   3: styles['font-md'],
   4: styles['font-sm'],
   5: styles['font-base'],
   6: styles['font-xs'],
};

export const Title: FC<TitleProps> = ({
   level = 1,
   title,
   type = 'primary',
   family = 'serif',
   centered = false,
   ...props
}) => {
   const Tag =
      `h${Math.max(1, Math.min(6, level))}` as keyof JSX.IntrinsicElements;

   return (
      <Tag
         className={clsx(
            styles.title,
            classMap[level],
            { [styles.secondary]: type === 'secondary' },
            { [styles.accent]: type === 'accent' },
            { [styles.serif]: family === 'serif' },
            { [styles.centered]: centered }
         )}
         {...props}
      >
         {title}
      </Tag>
   );
};
