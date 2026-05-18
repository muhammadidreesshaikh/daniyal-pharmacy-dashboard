import { Card, CardContent, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const colors = ['#0B6E4F', '#0D47A1', '#4FB39B', '#98C1D9'];

export function CategoryChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography fontWeight={800} gutterBottom>
          Sales by Category
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={68} outerRadius={106} paddingAngle={4}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}