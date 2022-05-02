import { Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import ApplicationBar from '../components/ApplicationBar';
import NavigationDrawer from '../components/NavigationDrawer';
import { drawerWidth } from '../components/NavigationDrawer';

const Home : FC = () =>
{
  const width : any = 8 + drawerWidth;
  const home =
    <div>
      <NavigationDrawer />
      <ApplicationBar />
      <Box
        sx={{ ml: `${width}px`}}
      >
        <Toolbar />
        <Typography paragraph>
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;Hi!
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;I am Arvind, a Mathematics graduate from University of Waterloo. 
        </Typography>
      </Box>
    </div>
  return home;
}

export default Home;
