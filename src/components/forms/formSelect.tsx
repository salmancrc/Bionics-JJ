import { Controller, Control } from 'react-hook-form';
import { FormFieldWrapper } from './formFieldWrapper';
import { Select } from '../ui/select';


export const RHFSelect = ({
  name,
  control,
  label,
  options,
}: {
  name: string;
  control: Control<any>;
  label: string;
  options: { label: string; value: string }[];
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <FormFieldWrapper label={label} error={fieldState.error?.message}>
        <Select value={field.value || ''} onChange={field.onChange} options={options} />
      </FormFieldWrapper>
    )}
  />
);
