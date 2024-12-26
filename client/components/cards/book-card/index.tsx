import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

import { Button, Card, Link, Title } from '@/components/ui';
import { HeartIcon, ShareIcon } from '@/public';
import styles from './index.module.scss';
import { BookProps } from '@/data';
import clsx from 'clsx';

type BookCardProps = {
   book: BookProps;
   isFavorite?: boolean;
};

export const BookCard: FC<BookCardProps> = ({ book, isFavorite = false }) => (
   <Card fullWidth>
      <div
         className={clsx(styles.bookCard, { [styles.isFavorite]: isFavorite })}
      >
         <NextLink href={'about'} className={styles.topLink}>
            <div className={styles.top}>
               <div className={styles.imageWrap}>
                  <Image
                     src={book.imageUrl}
                     alt={book.title}
                     width={200}
                     height={300}
                  />
               </div>

               <div className={styles.actions}>
                  <Button
                     iconSrc={HeartIcon.src}
                     iconAlt={'Add to favorite'}
                     btnType={'ghost'}
                  />
                  <Button
                     iconSrc={ShareIcon.src}
                     iconAlt={'Share'}
                     btnType={'ghost'}
                  />
               </div>

               <div className={styles.info}>
                  <Title title={book.title} level={4} />
                  <Title title={book.author} level={6} type={'secondary'} />
               </div>
            </div>
         </NextLink>
         <Link
            href={'/request'}
            as='button'
            text={'Request'}
            btnType={'primary'}
            size='md'
            fullWidth
         />
      </div>
   </Card>
);
