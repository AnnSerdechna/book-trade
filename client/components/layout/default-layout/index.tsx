import { FC, PropsWithChildren } from 'react';
import { Container, Header } from '@/components/layout';

import styles from './index.module.scss';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
   <div className={styles.layout}>
      <Container>
         <Header />

         {children}
      </Container>
   </div>
);
