import * as React from 'react';
import { styled } from '@mui/material/styles';

export function Error(props: { errCode: number }) {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));



  return (<Div sx={{ textAlign: 'center', marginTop: '50px' }}>
    {(props.errCode === 500) &&
      <img src="500_error.png" />
    }
    {(props.errCode === 404) &&
      <img src="404_error.png" />
    }



  </Div>)
}
