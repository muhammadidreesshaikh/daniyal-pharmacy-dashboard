import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background:
            'linear-gradient(135deg, rgba(11,110,79,0.98), rgba(13,71,161,0.94)), radial-gradient(circle at top, rgba(255,255,255,.18), transparent 40%)',
          color: 'common.white',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          p: 6,
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 520 }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, opacity: 0.8 }}>
            Pharmacy Management Suite
          </Typography>
          <Typography variant="h3" fontWeight={900}>
            Manage medicines, sales, inventory, and teams from one clean workspace.
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
            Modern admin tooling for super admins and employees with role-aware workflows, analytics, and secure access.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center', minHeight: '100%' }}>
          <Paper elevation={0} sx={{ width: '100%', p: { xs: 3, sm: 4 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <Outlet />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}