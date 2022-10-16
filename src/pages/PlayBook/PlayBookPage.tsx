/* eslint-disable import/prefer-default-export */
import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { PageCommandButtons } from '../../components/PageCommandButtons.tsx/PageCommandButtons';
import MiddleButtons from './components/MiddleButtons';
import PlayBookEditor from './components/PlayBookEditor';
import ResultBox from './components/ResultBox';
import useForm from './form';

export const PlayBookPage = () => {
  const [results, setResults] = useState('');
  const { form } = useForm();

  return (
    <Container
      sx={{
        my: 6,
      }}
    >
      <Box component="form" onSubmit={form.handleSubmit}>
        <Typography>project-name.yml</Typography>

        <PlayBookEditor form={form} />

        <Box pt={5} />

        <MiddleButtons form={form} onValidated={setResults} />

        <Box pt={5} />

        <ResultBox results={results} />

        <PageCommandButtons
          mainButton={{
            onClick: () => {},
            text: 'Next',
            type: 'submit',
          }}
        />
      </Box>
    </Container>
  );
};
