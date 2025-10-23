'use client';

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';
import * as React from 'react';

type ProviderProps = React.PropsWithChildren<ThemeProviderProps>;

export function ThemeProvider({ children, ...props }: ProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
