import { FC } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';

type TextProps = {
   text: string;
   secondary?: boolean;
   size?: 'sm' | 'base'
}

export const Text: FC<TextProps> = ({ text, secondary = false, size = 'sm' }) => (
   <p
      className={clsx(
         styles.text,
         { [styles.secondary]: secondary },
         { [styles.base]: size === 'base'}
      )}
   >
      {text}
   </p>
)