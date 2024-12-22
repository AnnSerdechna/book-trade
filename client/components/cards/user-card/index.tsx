import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';
import { Card, Title, Text, Collapse } from '@/components/ui';

export const UserCard: FC = () => {
   return (
      <Card bordered>
         <Link href={'/'}>
            <div className={styles.userCard}>
               <Image
                  src={'https://res.cloudinary.com/duoohoaqi/image/upload/v1730999579/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2__cropped_jiaykl.jpg'}
                  alt={''}
                  width={84}
                  height={84}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
               />
               <div className={styles.userInfo}>
                  <div>
                     <Title title='Stephen King' level={6} />
                     <Title title='@stephen_king' level={6} type={'secondary'} />
                  </div>
                  <div>
                     <Text text='Dnipro, Ukraine' />
                     <Text text='since Jul, 2024' secondary />
                  </div>
               </div>
            </div></Link>

         <Collapse title={'Book 3'}>
            Book 1
         </Collapse>

         <Collapse title={'Incoming request 2'}>
            Request 1
         </Collapse>
      </Card>
   )
}