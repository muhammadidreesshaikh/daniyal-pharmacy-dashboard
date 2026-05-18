import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { routePaths } from '../../routes/routePaths';
import { FormTextField } from '../../components/forms/FormTextField';
import { useSnackbar } from 'notistack';

const schema = yup.object({ email: yup.string().email().required() });

type FormValues = yup.InferType<typeof schema>;

export default function ForgotPasswordPage() {
  const { forgotPassword, isLoading } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<FormValues>({ resolver: yupResolver(schema), defaultValues: { email: '' } });

  const onSubmit = handleSubmit(async (values) => {
    await forgotPassword(values.email);
    enqueueSnackbar('Reset link sent', { variant: 'info' });
    navigate(routePaths.resetPassword);
  });

  return (
    <Stack spacing={3} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={900}>
        Forgot password
      </Typography>
      <Typography color="text.secondary">
        Enter your email to receive a reset link.
      </Typography>
      <FormTextField control={control} name="email" label="Email address" />
      <Button type="submit" variant="contained" size="large" disabled={isLoading}>
        Send reset link
      </Button>
      <Button component={RouterLink} to={routePaths.login}>
        Back to login
      </Button>
    </Stack>
  );
}