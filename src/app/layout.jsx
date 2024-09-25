import '@/app/globals.css';
import classNames from 'classnames';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  style: 'normal'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={classNames(inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
