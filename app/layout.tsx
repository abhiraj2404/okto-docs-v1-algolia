"use client"
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from "./providers";
import dynamic from 'next/dynamic';
import NavbarComponent from './components/Navbar';
import AskCookbook from "./components/AskCookbook";

const inter = Inter({
  subsets: ['latin'],
});

const SearchDialog = dynamic(() => import('./components/search')); // lazy load

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
      <meta name="algolia-site-verification"  content="EBF1EA904EE6DF03" />
      <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
      </head>
      <body>
        <RootProvider search={{
        SearchDialog,
      }}>
          <Providers>
            <NavbarComponent />
            {children}
          </Providers>
        </RootProvider>
        <AskCookbook />
      </body>
    </html>
  );
}
