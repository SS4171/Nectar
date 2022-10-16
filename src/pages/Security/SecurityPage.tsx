/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import { Box, Button, Container, Typography } from '@mui/material';
import { PageCommandButtons } from 'components/PageCommandButtons.tsx/PageCommandButtons';
import { useNavigate } from 'react-router-dom';

type SecurityOptionProps = {
  onClick: () => void;
  name: string;
  description: string;
};

const SecurityOption = (props: SecurityOptionProps) => {
  return (
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button
        onClick={props.onClick}
        variant="outlined"
        sx={{
          width: '100%',
          py: 5,
        }}
      >
        {props.name}
      </Button>
      <Typography mt={3} textAlign="justify">
        {props.description}
      </Typography>
    </Box>
  );
};

export const SecurityPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/password');
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 6,
      }}
    >
      <Typography variant="h5">What security bounding do you want?</Typography>

      <Box
        sx={{
          mt: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <SecurityOption
          onClick={() => handleClick()}
          name="BASIC"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum"
        />
        <SecurityOption
          onClick={() => handleClick()}
          name="MEDIUM"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum"
        />
        <SecurityOption
          onClick={() => handleClick()}
          name="ADVANCED"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum"
        />
      </Box>

      <PageCommandButtons
        mainButton={{
          show: false,
        }}
      />
    </Container>
  );
};
