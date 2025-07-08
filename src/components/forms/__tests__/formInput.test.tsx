import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { RHFInput } from '../formInput';

const Wrapper = () => {
  const { control } = useForm({ defaultValues: { name: 'John' } });
  return <RHFInput name="name" control={control} label="Name" />;
};

describe('RHFInput', () => {
  it('renders input with label', () => {
    render(<Wrapper />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  it('updates value on user input', async () => {
    render(<Wrapper />);
    const input = screen.getByLabelText(/name/i) as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, 'Alice');
    expect(input.value).toBe('Alice');
  });
});
