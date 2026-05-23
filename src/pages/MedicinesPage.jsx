import React, { useMemo } from 'react';
import { medicineConfig } from '../data/appData';
import { CrudEntityPage } from '../components/CrudEntityPage';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

export function MedicinesPage() {
  const theme = useTheme();
  const dashboardTheme = useMemo(() => createTheme(theme, {
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 10 },
          notchedOutline: { borderRadius: 10 },
        },
      },
      MuiInputBase: {
        styleOverrides: { root: { borderRadius: 10 } },
      },
    },
  }), [theme]);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <CrudEntityPage config={medicineConfig} />
    </ThemeProvider>
  );
}