import * as React from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import './Notification.css'

export default function Notification() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        ref={buttonRef}
        id="basic-demo-button"
        aria-controls={'basic-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        className='btn cursor-pointer'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <svg className='m-auto' width="30" height="30" viewBox="0 2 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16.427 6.482c2.792 1.021 3.909 3.378 3.784 6.596-.04 1.022-.165 1.866-.445 3.341-.075.393-.094.497-.123.659-.268 1.522.048 3.037.975 4.584a1 1 0 0 1-1.032 1.498l-4.959-.874a3.5 3.5 0 0 1-6.824-1.203l-2.989-.527a1 1 0 0 1-.457-1.761c1.4-1.137 2.215-2.453 2.484-3.975.028-.161.045-.266.11-.66.24-1.483.412-2.319.724-3.293.983-3.066 2.84-4.899 5.812-4.903a1 1 0 0 1 1.173-.935l.985.174a1 1 0 0 1 .782 1.28zM9.822 21.44a1.5 1.5 0 0 0 2.786.49l-2.786-.49zm7.852-4.709c.03-.174.05-.281.127-.684.263-1.382.377-2.153.412-3.046.11-2.824-.851-4.448-3.582-4.93-2.73-.48-4.189.717-5.051 3.408-.273.851-.43 1.614-.655 3.002-.066.406-.084.514-.115.688a8.031 8.031 0 0 1-1.746 3.753l10.967 1.934a8.031 8.031 0 0 1-.357-4.125zm.776-10.055a.875.875 0 1 1 .907-1.497c3.116 1.887 3.984 5.077 3.482 9.4a.875.875 0 1 1-1.738-.201c.432-3.718-.259-6.254-2.65-7.702zM6.404 11.744a.875.875 0 1 1-1.701-.408c1.014-4.23 2.938-6.924 6.53-7.61a.875.875 0 1 1 .328 1.72c-2.758.526-4.285 2.664-5.157 6.298z" fill="#3D3F56"></path>
      </svg>
      <p className=' text-black tablet:hidden  xs:hidden'>Уведомление</p>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
      >
        <MenuItem onClick={handleClose}>
            <div className=' w-[350px] px-[10px] flex justify-between'>
                <p className=' text-black'>Уведомление</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="settingsIcon___eLZJ1"><g fill="none" fill-rule="evenodd"><path d="M-2-2h20v20H-2z"></path><path fill="currentColor" d="M13.95 8.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L10 .34A.4.4 0 0 0 9.6 0H6.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18L.28 5.39c-.1.18-.06.39.1.51l1.69 1.32C2.03 7.47 2 7.74 2 8s.02.53.06.78L.37 10.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM8 11c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"></path></g></svg> */}
                <SettingsIcon className='ml-5'/>
            </div>
        </MenuItem>
        <hr className='mt-2'/>
        <MenuItem onClick={handleClose}>
            <div className='flex w-[350px] ml-2 mt-5 justify-between'>
                <div className='w-[70%]'>
                    <h2>Ваш купон на скидку 💌</h2>
                    <h2>Потому что мы дорожим вами!</h2>
                    <p className='opacity-60'>30 июня в 18:28</p>
                </div>
                <div className='w-[30%]'>
                    <img height="" width="80%" loading="eager" alt="" class="image___SvnGD    contain___noUdD" src="https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_xxhdpi.png" srcset="https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_mdpi.png 42w, https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_hdpi.png 63w, https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_xhdpi.png 84w, https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_xxhdpi.png 126w, https://s3.eu-central-1.amazonaws.com/joom.offers/Coupon_generic_xxxhdpi.png 168w" sizes="100vw"></img>
                </div>
            </div>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}