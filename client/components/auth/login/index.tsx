import React, { FC } from "react";

import { Button, Dialog } from '@/components/ui';

export const Login: FC = () => (
   <Dialog
      title={'Sign in'}
      trigger={<Button text={'Login'} btnType={'outline'} />}
      okBtnText={'Submit'}
   >
      Login form
   </Dialog>
);
