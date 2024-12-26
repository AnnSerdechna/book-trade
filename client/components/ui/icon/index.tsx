import Image from 'next/image';
import { FC } from 'react';

export type IconProps = {
   size?: 'sm' | 'md';
   iconSrc?: string;
   iconAlt?: string;
};

export const Icon: FC<IconProps> = ({ iconSrc, iconAlt, size = 'md' }) => {
   const iconSize = size === 'sm' ? 20 : 24;

   return (
      <Image
         src={iconSrc ?? ''}
         alt={iconAlt ?? ''}
         width={iconSize}
         height={iconSize}
      />
   );
};
