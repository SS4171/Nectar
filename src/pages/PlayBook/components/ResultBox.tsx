import { Box, Typography, TextField } from '@mui/material';

const ROWS = 3;

const ResultBox = ({ results }: { results: string }) => {
  return results ? (
    <Box>
      <Typography>Result</Typography>

      <TextField
        fullWidth
        multiline
        minRows={ROWS}
        maxRows={ROWS}
        value={results ?? 'Your YAML settings are fine'}
      />
    </Box>
  ) : null;
};

export default ResultBox;
