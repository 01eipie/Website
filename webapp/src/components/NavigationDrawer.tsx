import { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';
import { Home, ListAlt, GitHub, LinkedIn } from '@mui/icons-material';

export const drawerWidth = 240;

const openGithub = () =>
{
  window.open("https://github.com/01eipie");
  return;
}

const openLinkedin = () =>
{
  window.open("https://www.linkedin.com/in/saiarvindbudaraju");
  return;
}

const NavigationDrawer : FC = () =>
{
  const navigationDrawer =
      <Drawer
        sx =
        {
          {
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper":
            {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }
        }
        variant = "persistent"
        anchor = "left"
        open = {true}
      >
        <Divider />
        <List>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
              <ListItemIcon> <Home /> </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          <Link to="/resume" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
              <ListItemIcon> <ListAlt /> </ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItem>
          </Link>

          <ListItem button onClick={openGithub}>
            <ListItemIcon> <GitHub /> </ListItemIcon>
            <ListItemText primary={"GitHub"} />
          </ListItem>

          <ListItem button onClick={openLinkedin}>
            <ListItemIcon> <LinkedIn /> </ListItemIcon>
            <ListItemText primary={"LinkedIn"} />
          </ListItem>

        </List>
      </Drawer>;
  return navigationDrawer;
}

export default NavigationDrawer;
