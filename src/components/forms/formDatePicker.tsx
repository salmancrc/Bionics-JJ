import { Controller, Control } from 'react-hook-form';
import { FormFieldWrapper } from './formFieldWrapper';
import { DatePicker } from '../ui/datePicker';

export const RHFDatePicker = ({
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
        <DatePicker value={field.value || ''} onChange={field.onChange} />
      </FormFieldWrapper>
    )}
  />
);
