import { Card, CardContent, Stack, Typography } from '@mui/material';
import { ModulePage } from './ModulePage';

const rows = [{ id: '1', setting: 'Tax Rate', value: '8.5%' }, { id: '2', setting: 'Currency', value: 'USD' }, { id: '3', setting: 'Notifications', value: 'Enabled' }];

export default function SettingsPage() {
  return <ModulePage title="Settings" description="Configure pharmacy profile, tax, notifications, and theme settings." rows={rows} columns={[{ key: 'setting', label: 'Setting' }, { key: 'value', label: 'Value' }]} note="Only super admins can access settings in this dashboard." />;
}