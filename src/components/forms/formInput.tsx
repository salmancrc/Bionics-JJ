import { Controller, Control } from 'react-hook-form';
import { FormFieldWrapper } from './formFieldWrapper';
import { Input } from '../ui/Input';

export const RHFInput = ({
  name,
  control,
  label,
}: {
  name: string;
  control: Control<any>;
  label: string;
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <FormFieldWrapper label={label} error={fieldState.error?.message}>
        <Input value={field.value || ''} onChange={field.onChange} />
      </FormFieldWrapper>
    )}
  />
);
