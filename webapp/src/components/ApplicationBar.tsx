import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const ApplicationBar: FC = () =>
{
  const applicationBar =
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          noWrap 
          component="div"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Sai Arvind Budaraju's Website
        </Typography>
      </Toolbar>
    </AppBar>;
  return applicationBar;
}

export default ApplicationBar;
