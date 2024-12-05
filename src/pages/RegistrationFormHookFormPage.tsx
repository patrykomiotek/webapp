import { toast } from 'react-toastify';
import { RegistrationFormHookForm } from '@components/RegistrationFormHookForm';
import { RegistrationFromData, registrationSchema } from '@apptypes/registration';

export const RegistrationFormHookFormPage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    // console.log({ data }); // POST -> API
    // registrationSchema.parse(data) // throw an error
    const { success, error } = registrationSchema.safeParse(data); // { success: true }
    if (success) {
      // API call
      toast.success('Done!');
      console.info(data);
    } else {
      // validation error
      console.log(error);
      toast.error('Validation error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl">With React Hook Form</h2>
      <RegistrationFormHookForm onSubmit={handleSubmit} />
    </div>
  );
};