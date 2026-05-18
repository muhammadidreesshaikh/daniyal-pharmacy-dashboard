import { Card, CardContent, Stack, Typography } from '@mui/material';

export function StatCard({ label, value, change, color }: { label: string; value: string; change: string; color: string }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h4" fontWeight={900}>
            {value}
          </Typography>
          <Typography variant="body2" sx={{ color }}>
            {change}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}