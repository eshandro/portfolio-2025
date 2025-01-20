'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle light and dark theme</span>
    </Button>
  );
}
