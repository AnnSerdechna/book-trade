'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { MenuItemProps } from '@/components/layout/menu/menuItems';
import { Link } from '@/components/ui';

export const MenuLink: FC<MenuItemProps> = ({ path, label }) => {
   const pathname = usePathname();

   const isActive = pathname === path;

   return (
      <Link
         href={path}
         text={label}
         as={'button'}
         btnType={isActive ? 'active' : 'ghost'}
      />
   );
};
