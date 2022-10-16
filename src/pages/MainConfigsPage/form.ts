import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  projectName: '',
  hostType: '',
  hosts: '',
};

const validationSchema = Yup.object({
  projectName: Yup.string().required('Project name is required'),
  hostType: Yup.string().required('Host type is required'),
  hosts: Yup.string().required('Host is required'),
});

const useForm = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return { form };
};

type UseFormType = ReturnType<typeof useForm>;
export type FormType = UseFormType['form'];

export default useForm;
