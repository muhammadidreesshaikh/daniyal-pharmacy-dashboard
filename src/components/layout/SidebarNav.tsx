import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Dashboard, Inventory2, LocalShipping, ReceiptLong, People, Receipt, Medication, Analytics, Settings, Person, PointOfSale } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../routes/routePaths';
import { useAuth } from '../../contexts/AuthContext';

const navItems = [
  { label: 'Dashboard', path: routePaths.dashboard, icon: <Dashboard /> },
  { label: 'Medicines', path: routePaths.medicines, icon: <Medication /> },
  { label: 'Inventory', path: routePaths.inventory, icon: <Inventory2 /> },
  { label: 'Sales', path: routePaths.sales, icon: <ReceiptLong /> },
  { label: 'POS Billing', path: routePaths.pos, icon: <PointOfSale /> },
  { label: 'Purchases', path: routePaths.purchases, icon: <Receipt /> },
  { label: 'Suppliers', path: routePaths.suppliers, icon: <LocalShipping /> },
  { label: 'Customers', path: routePaths.customers, icon: <People /> },
  { label: 'Reports', path: routePaths.reports, icon: <Analytics /> },
  { label: 'Employees', path: routePaths.employees, icon: <People />, adminOnly: true },
  { label: 'Settings', path: routePaths.settings, icon: <Settings />, adminOnly: true },
  { label: 'Profile', path: routePaths.profile, icon: <Person /> },
];

export function SidebarNav() {
  const { user } = useAuth();

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2} sx={{ px: 1, py: 2 }}>
        <Typography variant="h5" fontWeight={900} color="primary.main">
          Ali Pharmacy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Secure dashboard for pharmacy operations
        </Typography>
      </Stack>
      <Divider sx={{ my: 1.5 }} />
      <List sx={{ py: 1 }}>
        {navItems
          .filter((item) => !item.adminOnly || user?.role === 'SUPER_ADMIN')
          .map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: 2,
                mb: 0.75,
                '&.active': {
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  '& .MuiListItemIcon-root': { color: 'common.white' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
      </List>
    </Box>
  );
}