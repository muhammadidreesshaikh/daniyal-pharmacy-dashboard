import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';

export function FormTextField<TFieldValues extends FieldValues>({
  control,
  name,
  ...props
}: TextFieldProps & { control: Control<TFieldValues>; name: Path<TFieldValues> }) {
  return <Controller control={control} name={name} render={({ field, fieldState }) => <TextField {...field} {...props} fullWidth error={Boolean(fieldState.error)} helperText={fieldState.error?.message ?? props.helperText} />} />;
}