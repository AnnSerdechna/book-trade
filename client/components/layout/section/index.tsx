import { FC, ReactNode } from 'react';

import { SectionTitle } from '@/components/layout';
import styles from './index.module.scss';

type SectionProps = {
   title: string;
   children: ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => (
   <section className={styles.section}>
      <SectionTitle title={title} />

      {children}
   </section>
);
