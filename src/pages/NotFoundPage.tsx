import { Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routePaths } from '../routes/routePaths';

export default function NotFoundPage() {
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      <Typography variant="h2" fontWeight={900}>
        404
      </Typography>
      <Typography color="text.secondary">The page you are looking for does not exist.</Typography>
      <Button component={RouterLink} to={routePaths.dashboard} variant="contained">
        Go to dashboard
      </Button>
    </Stack>
  );
}