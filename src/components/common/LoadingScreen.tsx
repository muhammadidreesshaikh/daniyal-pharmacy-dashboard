import { Box, CircularProgress, Stack, Typography } from '@mui/material';

export function LoadingScreen({ fullScreen = false }: { fullScreen?: boolean }) {
  return (
    <Box sx={{ minHeight: fullScreen ? '100vh' : 360, display: 'grid', placeItems: 'center' }}>
      <Stack alignItems="center" spacing={2}>
        <CircularProgress color="primary" />
        <Typography variant="body2" color="text.secondary">
          Loading pharmacy dashboard...
        </Typography>
      </Stack>
    </Box>
  );
}