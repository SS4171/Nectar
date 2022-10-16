/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import { Box, Container } from '@mui/material';
import { PageCommandButtons } from 'components/PageCommandButtons.tsx/PageCommandButtons';
import { useNavigate, useParams } from 'react-router-dom';
import FormFields from './components/FormFields';
import useForm from './form';

export const MainConfigsPage = () => {
  const navigate = useNavigate();
  const { form } = useForm();
  const { type } = useParams<{ type: string }>();

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 10,
      }}
    >
      <Box
        onSubmit={form.handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 5,
        }}
      >
        <FormFields form={form} />

        <PageCommandButtons
          mainButton={{
            onClick: () => {
              if (form.isValid)
                navigate(type === 'new' ? '/playbook' : '/security');
            },
            disabled: !form.isValid || !form.dirty,
            type: 'submit',
          }}
        />
      </Box>
    </Container>
  );
};
