import { AppBar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import { Menu as MenuIcon, Notifications, Search, DarkMode, LightMode } from '@mui/icons-material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAppTheme } from '../../theme/AppThemeProvider';
import { routePaths } from '../../routes/routePaths';

export function Topbar({ onMenuClick, isMobile }: { onMenuClick: () => void; isMobile: boolean }) {
  const { user, logout } = useAuth();
  const { mode, toggleMode } = useAppTheme();
  const navigate = useNavigate();
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const notifications = useMemo(
    () => [
      '3 medicines are near expiry.',
      'Inventory low for 12 items.',
      'New sales report is ready.',
    ],
    [],
  );

  const handleLogout = () => {
    logout();
    navigate(routePaths.login);
  };

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, px: { xs: 2, sm: 3 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flex: 1 }}>
        {isMobile && (
          <IconButton onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', bgcolor: 'background.paper', px: 2, py: 1, borderRadius: 999, border: '1px solid', borderColor: 'divider', width: '100%', maxWidth: 420 }}>
          <Search sx={{ color: 'text.secondary', mr: 1 }} />
          <InputBase placeholder="Search medicines, invoices, customers..." fullWidth />
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          <IconButton onClick={toggleMode}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Tooltip>
        <IconButton onClick={(event) => setNotificationAnchor(event.currentTarget)}>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Box
          onClick={(event) => setProfileAnchor(event.currentTarget)}
          sx={{ cursor: 'pointer', px: 1.5, py: 0.8, borderRadius: 999, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}
        >
          <Typography variant="body2" fontWeight={700}>
            {user?.name ?? 'User'}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {user?.role?.replace('_', ' ')}
          </Typography>
        </Box>
      </Stack>
      <Menu anchorEl={notificationAnchor} open={Boolean(notificationAnchor)} onClose={() => setNotificationAnchor(null)}>
        {notifications.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Menu>
      <Menu anchorEl={profileAnchor} open={Boolean(profileAnchor)} onClose={() => setProfileAnchor(null)}>
        <MenuItem onClick={() => navigate(routePaths.profile)}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Toolbar>
  );
}