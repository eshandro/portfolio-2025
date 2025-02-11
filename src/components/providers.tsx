'use client';

import {ThemeProvider} from 'next-themes';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
}
