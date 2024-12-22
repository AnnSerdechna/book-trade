import { FC } from 'react';

import { Title } from '@/components/ui';

type TitleProps = {
   title: string;
};

export const SectionTitle: FC<TitleProps> = ({ title }) => {
   return <Title title={title} family={'serif'} type={'accent'} centered />;
};
