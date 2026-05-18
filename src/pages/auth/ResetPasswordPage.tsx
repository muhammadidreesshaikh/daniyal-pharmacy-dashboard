import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { routePaths } from '../../routes/routePaths';
import { FormTextField } from '../../components/forms/FormTextField';
import { useSnackbar } from 'notistack';

const schema = yup.object({ token: yup.string().required(), password: yup.string().min(6).required() });

type FormValues = yup.InferType<typeof schema>;

export default function ResetPasswordPage() {
  const { resetPassword, isLoading } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<FormValues>({ resolver: yupResolver(schema), defaultValues: { token: 'RESET-1234', password: '' } });

  const onSubmit = handleSubmit(async (values) => {
    await resetPassword(values);
    enqueueSnackbar('Password reset successful', { variant: 'success' });
    navigate(routePaths.login);
  });

  return (
    <Stack spacing={3} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={900}>
        Reset password
      </Typography>
      <FormTextField control={control} name="token" label="Reset token" />
      <FormTextField control={control} name="password" label="New password" type="password" />
      <Button type="submit" variant="contained" size="large" disabled={isLoading}>
        Reset password
      </Button>
      <Button component={RouterLink} to={routePaths.login}>
        Back to login
      </Button>
    </Stack>
  );
}