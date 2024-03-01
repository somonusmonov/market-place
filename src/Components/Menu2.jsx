import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Обзоры от пользователей', 'Строительство и ремонт', 'Мужская мода', 'Обувь', 'Дача, сад и огород', 'Канцелярия', 'Часы', 'Праздники', 'Электроника', 'Чехлы для смартфонов', 'Автомобили и мотоциклы', 'Сумки и чемоданы', 'Товары для дома', 'Товары для животных', 'Хобби и творчество', 'Красота', 'Здоровье', 'Детские товары', 'Украшения и бижутерия', 'Спорт и отдых', 'Бытовая техника'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div className='hidden tablet:block'>
      {['left'].map((anchor) => (
        <Link to='category'>
        <React.Fragment key={anchor}>
            <MenuIcon color='secondary' onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
              </Link>
      ))}
    </div>
  );
}
