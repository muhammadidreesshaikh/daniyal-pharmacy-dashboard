import { Button, Checkbox, FormControlLabel, Link, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { routePaths } from '../../routes/routePaths';
import { FormTextField } from '../../components/forms/FormTextField';
import { useSnackbar } from 'notistack';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  rememberMe: yup.boolean().required(),
});

type FormValues = yup.InferType<typeof schema>;

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit, register } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { email: 'admin@pharmacy.com', password: 'Password123!', rememberMe: true },
  });

  const onSubmit = handleSubmit(async (values) => {
    await login(values);
    enqueueSnackbar('Logged in successfully', { variant: 'success' });
    navigate(routePaths.dashboard);
  });

  return (
    <Stack spacing={3} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={900}>
        Sign in
      </Typography>
      <Typography color="text.secondary">
        Access your pharmacy operations dashboard.
      </Typography>
      <FormTextField control={control} name="email" label="Email address" />
      <FormTextField control={control} name="password" label="Password" type="password" />
      <FormControlLabel control={<Checkbox {...register('rememberMe')} defaultChecked />} label="Remember me" />
      <Button type="submit" variant="contained" size="large" disabled={isLoading}>
        Sign in
      </Button>
      <Stack direction="row" justifyContent="space-between">
        <Link component={RouterLink} to={routePaths.forgotPassword} underline="hover">
          Forgot password?
        </Link>
        <Link component={RouterLink} to={routePaths.signup} underline="hover">
          Create account
        </Link>
      </Stack>
    </Stack>
  );
}