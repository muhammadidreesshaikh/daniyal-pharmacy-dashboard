import { Alert, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { ModulePage } from './ModulePage';

const rows = [
  { id: '1', report: 'Daily Sales', status: 'Ready' },
  { id: '2', report: 'Monthly Revenue', status: 'Ready' },
  { id: '3', report: 'Profit/Loss', status: 'Ready' },
];

export default function ReportsPage() {
  return (
    <Stack spacing={3}>
      <ModulePage title="Reports & Analytics" description="Export PDF/Excel reports and review performance trends." rows={rows} columns={[{ key: 'report', label: 'Report' }, { key: 'status', label: 'Status' }]} note="Charts and exports are wired for extension to a backend reporting pipeline." />
    </Stack>
  );
}