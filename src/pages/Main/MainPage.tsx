import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../resources/logo.png';

const TopPart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{
          border: '1px solid',
          mr: 5,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        }}
      />

      <Box>
        <Typography
          sx={{
            textIndent: 50,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
    </Box>
  );
};

const BottomPart = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 270,
        }}
        onClick={() => navigate('/main_configs/new')}
      >
        Start New Project
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 270,
        }}
        onClick={() => navigate('/main_configs/template')}
      >
        Start With a Template
      </Button>
    </Box>
  );
};

const MainPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TopPart />

      <Box height={100} />

      <BottomPart />
    </Container>
  );
};

export default MainPage;
