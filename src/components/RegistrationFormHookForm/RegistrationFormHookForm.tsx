import { type RegistrationFromData, registrationSchema } from '@apptypes/registration';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@ui';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onSubmit: (data: RegistrationFromData) => void;
}

export const RegistrationFormHookForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFromData>({
    resolver: zodResolver(registrationSchema),
  });
  // createRef

  const handleRegistrationForm: SubmitHandler<RegistrationFromData> = (data) => {
    onSubmit({
      email: data.email,
      password: data.password,
      favLang: data.favLang,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input {...register('email')} label="E-mail" error={errors.email} />
      <Input {...register('password')} label="Password" type="password" error={errors.password} />
      <Input {...register('favLang')} label="Language" error={errors.favLang} />

      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
