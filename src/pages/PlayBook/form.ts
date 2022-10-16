import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  playbook: '',
};

const validationSchema = Yup.object({
  playbook: Yup.string().required('Required'),
});

const useForm = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return { form };
};

type UseForm = ReturnType<typeof useForm>;
export type FormType = UseForm['form'];

export default useForm;
