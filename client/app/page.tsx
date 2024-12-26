import { Section } from '@/components/layout/section';

import { BookCard, CardsGrid } from '@/components/cards';
import { booksData } from '@/data';

export default function Home() {
   return (
      <Section title={'Books'}>
         <CardsGrid cols={5}>
            {booksData.map((book) => (
               <BookCard key={book.id} book={book} />
            ))}
         </CardsGrid>
      </Section>
   );
}
