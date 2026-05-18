import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} alignItems="flex-start">
          <Avatar sx={{ width: 72, height: 72 }}>{user?.name?.[0]}</Avatar>
          <Typography variant="h5" fontWeight={900}>
            {user?.name}
          </Typography>
          <Typography color="text.secondary">{user?.email}</Typography>
          <Typography color="text.secondary">Role: {user?.role?.replace('_', ' ')}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}