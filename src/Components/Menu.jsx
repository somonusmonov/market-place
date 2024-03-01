import * as React from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className='flex hover:text-red-500 cursor-pointer text-black'
        ref={buttonRef}
        id="basic-demo-button"
        aria-controls={'basic-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <svg className='mt-2 mr-2' width="16" height="10" xmlns="http://www.w3.org/2000/svg" class="menu___ZEfAA">
          <path d="M.883 10C.396 10 0 9.552 0 9s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883zm0-4C.396 6 0 5.552 0 5s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883zm0-4C.396 2 0 1.552 0 1s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883z"></path>
        </svg>
        <span >Все категории</span>
      </div>
      <Menu
        className='ml-10'
        id="basic-menu"
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >

        <div className='flex justify-between w-[1620px] ml-10 px-[20px]'>
          <ul className=' '>
            <Link to="category">
              <MenuItem onClick={handleClose}>
                <li className='hover:text-red-500'>Обзоры от пользователей</li>
              </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Строительство и ремонт</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Мужская мода</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Обувь</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Дача, сад и огород</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Канцелярия</li>
            </MenuItem>
            </Link>
          </ul>
          <ul className=''>
          <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Часы</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Праздники</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Электроника</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Чехлы для смартфонов</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Автомобили и мотоциклы</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Сумки и чемоданы</li>
            </MenuItem>
            </Link>
          </ul>
          <ul className=''>
          <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Товары для дома</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Товары для животных</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Хобби и творчество</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Красота</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Здоровье</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Детские товары</li>
            </MenuItem>
            </Link>
          </ul>
          <ul className=''>
          <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Украшения и бижутерия</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Спорт и отдых</li>
            </MenuItem>
            </Link>
            <Link to='category'>
            <MenuItem onClick={handleClose}>
              <li className='hover:text-red-500'>Бытовая техника</li>
            </MenuItem>
            </Link>
          </ul>
        </div>


      </Menu>
    </div>
  );
}