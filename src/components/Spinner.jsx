import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
);

export default Spinner;
