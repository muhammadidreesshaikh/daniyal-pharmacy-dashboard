import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

type ThemeContextValue = {
  mode: PaletteMode;
  toggleMode: () => void;
  theme: ReturnType<typeof createTheme>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getStoredMode = (): PaletteMode => {
  const stored = localStorage.getItem('pharmacy-theme-mode');
  return stored === 'dark' ? 'dark' : 'light';
};

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(getStoredMode);

  useEffect(() => {
    localStorage.setItem('pharmacy-theme-mode', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#0B6E4F',
            light: '#4FB39B',
            dark: '#054B35',
          },
          secondary: {
            main: '#0D47A1',
          },
          background: {
            default: mode === 'dark' ? '#0B1220' : '#F5F8FC',
            paper: mode === 'dark' ? '#111A2E' : '#FFFFFF',
          },
        },
        shape: { borderRadius: 14 },
        typography: {
          fontFamily: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'].join(','),
          h4: { fontWeight: 800 },
          h5: { fontWeight: 800 },
          h6: { fontWeight: 700 },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { textTransform: 'none', borderRadius: 12, fontWeight: 700 },
            },
          },
          MuiCard: {
            styleOverrides: { root: { boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)' } },
          },
        },
      }),
    [mode],
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
      theme,
    }),
    [mode, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
}