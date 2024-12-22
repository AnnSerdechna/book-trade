import { CardsGrid, UserCard } from '@/components/cards';
import { Section } from '@/components/layout/section';

export default function Community() {
   return (
      <Section title={'Community'}>
         <CardsGrid cols={4}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
         </CardsGrid>
      </Section>
   )
}
