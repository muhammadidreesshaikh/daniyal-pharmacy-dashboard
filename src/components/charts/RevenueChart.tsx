import { Card, CardContent, Typography } from '@mui/material';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import type { SalesPoint } from '../../types/dashboard';

export function RevenueChart({ data }: { data: SalesPoint[] }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography fontWeight={800} gutterBottom>
          Monthly Revenue
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#0B6E4F" strokeWidth={3} />
            <Line type="monotone" dataKey="purchases" stroke="#0D47A1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}