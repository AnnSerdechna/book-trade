import React, { FC, ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import styles from './index.module.scss';
import { Button } from '@/components/ui';

type DialogProps = {
   title: string;
   okBtnText: string;
   trigger: ReactNode;
   children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ title, trigger, okBtnText, children }) => (
   <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
         {trigger}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
         <AlertDialog.Overlay className={styles.dialogOverlay} />
         <AlertDialog.Content className={styles.dialogContent}>
            <AlertDialog.Title className={styles.dialogTitle}>
               {title}
            </AlertDialog.Title>

            {children}

            <div className={styles.actionBtns}>
               <AlertDialog.Action asChild>
                  <Button text={okBtnText} />
               </AlertDialog.Action>
               <AlertDialog.Cancel asChild>
                  <Button text={'Cancel'} btnType={'outline'} />
               </AlertDialog.Cancel>
            </div>
         </AlertDialog.Content>
      </AlertDialog.Portal>
   </AlertDialog.Root>
);
