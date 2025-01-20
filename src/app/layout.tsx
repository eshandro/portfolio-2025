import type { Metadata } from 'next';
import { Gotu, Lato, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

const lato = Lato({
  weight: ['400', '700'],
  variable: '--font-lato',
  subsets: ['latin'],
});

const gotu = Gotu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gotu',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Erik Shandrowski Portfolio',
  description: 'Erik Shandrowski Full Stack Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gotu.variable} ${lato.variable} ${geistMono.variable} flex min-h-screen flex-col font-serif antialiased`}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
