import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import App from './App';
import { AppThemeProvider, useAppTheme } from './theme/AppThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css';

const Root = () => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppThemeProvider>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </AppThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);