'use client';

import React, { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { ProfileIcon } from '@/public';
import styles from './index.module.scss';
import { Button } from '@/components/ui';

export const ProfileMenu: FC = () => {
   return (
      <DropdownMenu.Root>
         <DropdownMenu.Trigger asChild>
            <Button 
               iconSrc={ProfileIcon.src} 
               iconAlt={'Profile avatar'} 
               btnType={'ghost'} 
               rounded 
            />
         </DropdownMenu.Trigger>
         <DropdownMenu.Portal>
            <DropdownMenu.Content className={styles.menuContent} side={'bottom'} align={'end'} >
               <DropdownMenu.Item className={styles.menuItem}>
                  New Tab 
               </DropdownMenu.Item>
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>
   );
};

