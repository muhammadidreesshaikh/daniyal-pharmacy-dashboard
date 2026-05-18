import { Button, MenuItem, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { routePaths } from '../../routes/routePaths';
import { FormTextField } from '../../components/forms/FormTextField';
import { useSnackbar } from 'notistack';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  role: yup.mixed<'SUPER_ADMIN' | 'EMPLOYEE'>().required(),
});

type FormValues = yup.InferType<typeof schema>;

export default function SignupPage() {
  const { register: signUp, isLoading } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', password: '', role: 'EMPLOYEE' },
  });

  const onSubmit = handleSubmit(async (values) => {
    await signUp(values);
    enqueueSnackbar('Account created successfully', { variant: 'success' });
    navigate(routePaths.dashboard);
  });

  return (
    <Stack spacing={3} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={900}>
        Create account
      </Typography>
      <FormTextField control={control} name="name" label="Full name" />
      <FormTextField control={control} name="email" label="Email address" />
      <FormTextField control={control} name="password" label="Password" type="password" />
      <FormTextField control={control} name="role" label="Role" select>
        <MenuItem value="EMPLOYEE">Employee</MenuItem>
        <MenuItem value="SUPER_ADMIN">Super Admin</MenuItem>
      </FormTextField>
      <Button type="submit" variant="contained" size="large" disabled={isLoading}>
        Register
      </Button>
      <Button component={RouterLink} to={routePaths.login}>
        Back to login
      </Button>
    </Stack>
  );
}