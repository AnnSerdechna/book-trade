import type { Metadata } from 'next';
import { Poppins, Merriweather } from 'next/font/google';

import { DefaultLayout } from '@/components/layout';
import './globals.css';

const poppins = Poppins({
   variable: '--font-poppins',
   weight: ['600', '500', '400'],
   subsets: ['latin'],
});

const merriweather = Merriweather({
   variable: '--font-poppins',
   weight: ['700'],
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Book trade',
   description:
      'A platform designed for book enthusiasts to connect and trade books with their reading companions. Discover, share, and exchange books to enrich your reading journey while building a community of like-minded readers',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body
            className={`${poppins.variable} ${merriweather.variable} antialiased`}
         >
            <DefaultLayout>{children}</DefaultLayout>
         </body>
      </html>
   );
}
