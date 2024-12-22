'use client';

import { FC, ReactNode, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './index.module.scss';
import { Title } from '@/components/ui';

type CollapseProps = {
   title: string;
   children: ReactNode
}

const ChevronIcon: FC<{rotate: boolean}> = ({ rotate }) => (
   <svg 
      width="1em" 
      height="1em" 
      viewBox="0 0 24 24" 
      fill="none"
      style={{
         transform: `rotate(${rotate ? '-180deg' : 0})`,
      }}
   >
      <path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
)

export const Collapse: FC<CollapseProps> = ({
   title,
   children
}) => {
   const [open, setOpen] = useState(false);

   const handleToggleColapse = () => setOpen(!open);

   return (
      <Accordion.Root 
         type={'single'} 
         collapsible={open} 
         className={styles.collapse}
      >
         <Accordion.Item value="item-1" className={styles.item}>
            <Accordion.Header className={styles.header}>
               <Accordion.Trigger className={styles.trigger} onClick={handleToggleColapse}>
                  <Title title={title} level={6} />
                  <ChevronIcon rotate={open} />
               </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.content}>
               {children}
            </Accordion.Content>
         </Accordion.Item>
      </Accordion.Root>
   );
};

