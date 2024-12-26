import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { Icon, IconProps } from '../icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
   IconProps & {
      text?: string;
      btnType?: 'primary' | 'outline' | 'ghost' | 'text';
      iconSrc?: string;
      iconAlt?: string;
      fullWidth?: boolean;
      rounded?: boolean;
      size?: 'sm' | 'md';
   };

export const Button: FC<ButtonProps> = ({
   text,
   btnType = 'primary',
   iconSrc,
   iconAlt,
   fullWidth = false,
   size = 'md',
   rounded = false,
   ...props
}) => {
   const isIconOnly = !!iconSrc && !!iconAlt && !text;

   return (
      <button
         className={clsx(
            styles.button,
            { [styles.iconOnly]: isIconOnly },
            { [styles.outline]: btnType === 'outline' },
            { [styles.ghost]: btnType === 'ghost' },
            { [styles.text]: btnType === 'text' },
            { [styles.fullWidth]: fullWidth },
            { [styles.sm]: size === 'sm' },
            { [styles.rounded]: rounded }
         )}
         {...props}
      >
         {!!iconSrc && !!iconAlt && (
            <Icon iconSrc={iconSrc} iconAlt={iconAlt} size={size} />
         )}
         {text}
      </button>
   );
};
