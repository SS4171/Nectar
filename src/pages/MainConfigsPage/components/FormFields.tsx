import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from '@mui/material';
import { FormType } from '../form';
import HostsField from './HostsField';

type FormFieldsProps = {
  form: FormType;
};

const FormFields = ({ form }: FormFieldsProps) => {
  return (
    <>
      <TextField
        label="Project Name"
        fullWidth
        name="projectName"
        onChange={form.handleChange}
        value={form.values.projectName}
        error={!!form.errors.projectName && !!form.touched.projectName}
        helperText={
          !!form.errors.projectName && !!form.touched.projectName
            ? form.errors.projectName
            : ''
        }
      />

      <FormControl fullWidth>
        <InputLabel>Select host type</InputLabel>
        <Select
          name="hostType"
          onChange={form.handleChange}
          value={form.values.hostType}
        >
          <MenuItem value="windows">Windows</MenuItem>
          <MenuItem value="linux">Linux</MenuItem>
          <MenuItem value="macos">MacOS</MenuItem>
        </Select>
        <FormHelperText
          error={!!form.errors.hostType && !!form.touched.hostType}
        >
          {!!form.errors.hostType && !!form.touched.hostType
            ? form.errors.hostType
            : ''}
        </FormHelperText>
      </FormControl>

      <HostsField
        textFieldProps={{
          name: 'hosts',
          onChange: form.handleChange,
          value: form.values.hosts,
          error: !!form.errors.hosts && !!form.touched.hosts,
          helperText:
            !!form.errors.hosts && !!form.touched.hosts
              ? form.errors.hosts
              : '',
        }}
      />
    </>
  );
};

export default FormFields;
