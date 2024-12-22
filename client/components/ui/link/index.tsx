import NextLink from 'next/link';
import { FC } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { Icon, IconProps } from '@/components/ui';

type LinkProps = IconProps & {
   href: string;
   text?: string;
   as?: 'button' | 'icon';
   btnType?: 'default' | 'primary' | 'ghost' | 'active' | 'outline';
   size?: 'md' | 'sm';
   fullWidth?: boolean;
};

export const Link: FC<LinkProps> = ({
   href,
   text,
   as,
   iconSrc,
   iconAlt,
   btnType = 'default',
   size = 'md',
   fullWidth = false,
}) => (
   <NextLink
      href={href}
      className={clsx(
         styles.link,
         { [styles.asBtn]: as === 'button' },
         { [styles.asIcon]: as === 'icon' },
         { [styles.ghost]: btnType === 'ghost' },
         { [styles.primary]: btnType === 'primary' },
         { [styles.outline]: btnType === 'outline' },
         { [styles.sm]: size === 'sm' },
         { [styles.fullWidth]: fullWidth }
      )}
   >
      {text}
      {iconSrc && <Icon iconSrc={iconSrc} iconAlt={iconAlt} size={size} />}
   </NextLink>
);
