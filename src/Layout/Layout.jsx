import React from 'react'
import '../App.css'
import { Link, Outlet } from 'react-router-dom';
import BasicMenu from '../Components/Menu';
import Notification from '../Pages/Notification/Notification';
import Menu from '../Components/Menu2';

const Layout = () => {
  return <>
    {/* <div className='navbar p-3 w-[1694px] text-white'> */}
    <div className='navbar p-3 w-full tablet:w-[100%] text-white flex text-center  justify-center'>
      <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tablet:mt-2">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.013 1.626a1.95 1.95 0 0 0-2.507.814l-.637 1.127a1.95 1.95 0 0 1-1.31.95l-1.269.258a1.948 1.948 0 0 0-1.549 2.13l.148 1.286a1.947 1.947 0 0 1-.5 1.539l-.876.953a1.947 1.947 0 0 0 0 2.634l.875.953c.382.417.565.978.5 1.539l-.147 1.285a1.948 1.948 0 0 0 1.55 2.131l1.268.258a1.95 1.95 0 0 1 1.31.95l.637 1.127a1.95 1.95 0 0 0 2.507.814l1.178-.537a1.95 1.95 0 0 1 1.618 0l1.178.537c.92.42 2.01.066 2.507-.814l.637-1.127a1.95 1.95 0 0 1 1.31-.95l1.269-.258a1.948 1.948 0 0 0 1.549-2.13l-.148-1.286a1.947 1.947 0 0 1 .5-1.539l.876-.953a1.947 1.947 0 0 0 0-2.634l-.875-.953a1.947 1.947 0 0 1-.5-1.539l.147-1.285a1.948 1.948 0 0 0-1.55-2.131l-1.268-.257a1.95 1.95 0 0 1-1.31-.951l-.637-1.127a1.95 1.95 0 0 0-2.507-.814l-1.178.538a1.95 1.95 0 0 1-1.618 0l-1.178-.538Zm6.194 7.581a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 1 0 1.414 1.414l7-7ZM17 15.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM8.75 10.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" fill="currentColor"></path>
      </svg>
      <h2 className='text-[18px] tablet:text-[15px]'>Впервые у нас? Ловите скидку 10% на первый заказ! Нажмите здесь</h2>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tablet:mt-2">
        <path d="M9.29 15.88 13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z" fill="currentColor"></path>
      </svg>
    </div>
    <div className='w-[90%] xs:hidden m-auto tablet:hidden flex justify-between py-[20px]'>
      <div className='flex justify-between w-[15%]'>
        <select>
          <option>🇷🇺Русский</option>
          <option>🇺🇸English</option>
        </select>
        <select>
          <option>🇺🇸USD</option>
          <option>🇷🇺RUB</option>
        </select>
      </div>
      <div className='flex justify-between w-[20%]'>
        <p className='opacitu-60 hover:underline cursor-pointer'>Поддержка</p>
        <p className='opacitu-60 hover:underline cursor-pointer'>Доставка</p>
        <p className='opacitu-60 hover:underline cursor-pointer'>Гарантия</p>
      </div>
    </div>
    <div className='w-[90%] text-black m-auto py-[20px] flex justify-evenly'>
      <Menu />
      <Link to="/">
        <svg className='w-[20%]' class="logo___Fd2f1" width="123px" height="28px" viewBox="0 0 123 28" xmlns="http://www.w3.org/2000/svg" role="img">
          <title>Домашняя страница Joom</title>
          <path d="M45 18.804V5.764c0-.485.185-.9.554-1.245.369-.346.812-.519 1.329-.519s.955.173 1.313.519c.37.345.554.76.554 1.244v13.04c0 1.78-.67 3.3-2.01 4.565-1.35 1.255-2.974 1.882-4.873 1.882-.517 0-.955-.173-1.313-.519a1.6 1.6 0 01-.554-1.23c0-.484.185-.899.554-1.244a1.821 1.821 0 011.313-.519c.865 0 1.603-.287 2.215-.86.612-.573.918-1.264.918-2.074zm25.642 3.324c-2.081 2.081-4.587 3.122-7.517 3.122s-5.43-1.04-7.503-3.122c-2.081-2.072-3.122-4.573-3.122-7.503 0-2.93 1.04-5.436 3.122-7.517C57.694 5.036 60.195 4 63.125 4s5.436 1.036 7.517 3.108c2.072 2.081 3.108 4.587 3.108 7.517 0 2.93-1.036 5.43-3.108 7.503zM67.99 9.76c-1.35-1.34-2.972-2.011-4.864-2.011s-3.509.67-4.85 2.011c-1.35 1.35-2.025 2.972-2.025 4.864s.675 3.509 2.025 4.85c1.341 1.35 2.958 2.025 4.85 2.025 1.892 0 3.514-.675 4.864-2.025 1.34-1.341 2.011-2.958 2.011-4.85 0-1.892-.67-3.514-2.011-4.864zm26.403 12.367c-2.081 2.081-4.587 3.122-7.517 3.122s-5.43-1.04-7.503-3.122c-2.081-2.072-3.122-4.573-3.122-7.503 0-2.93 1.04-5.436 3.122-7.517C81.444 5.036 83.945 4 86.875 4s5.436 1.036 7.517 3.108c2.072 2.081 3.108 4.587 3.108 7.517 0 2.93-1.036 5.43-3.108 7.503zM91.74 9.76c-1.35-1.34-2.972-2.011-4.864-2.011s-3.509.67-4.85 2.011C80.675 11.111 80 12.733 80 14.625s.675 3.509 2.025 4.85c1.341 1.35 2.958 2.025 4.85 2.025 1.892 0 3.514-.675 4.864-2.025 1.34-1.341 2.011-2.958 2.011-4.85 0-1.892-.67-3.514-2.011-4.864zm18.605 11.364c-.14-.25-1.993-3.288-5.555-9.114v11.495c0 .483-.174.892-.522 1.227a1.72 1.72 0 01-1.255.517 1.67 1.67 0 01-1.24-.517 1.636 1.636 0 01-.522-1.227V5.746c0-.394.12-.744.358-1.05.24-.314.553-.526.941-.634a1.775 1.775 0 011.986.783l7.347 12.012 7.348-12.012c.199-.335.482-.577.85-.724a1.86 1.86 0 011.136-.06c.378.109.687.32.926.636.239.305.358.655.358 1.049v17.76c0 .483-.17.892-.508 1.227a1.72 1.72 0 01-1.254.517 1.72 1.72 0 01-1.255-.517 1.66 1.66 0 01-.507-1.227V12.011c-3.528 5.826-5.385 8.86-5.57 9.102-.278.363-.781 1.012-1.531 1.012s-1.319-.625-1.53-1zM18.75 19.333c0 4.51-3.638 8.167-8.125 8.167V8.167C10.625 3.657 14.263 0 18.75 0v19.333z" fill="#3D3F56"></path>
          <circle fill="#F64343" cx="4.063" cy="23.438" r="4.063">
          </circle>
        </svg>
      </Link>
      <form className='w-[45%] tablet:hidden xs:hidden'>
        <input type="text" placeholder='Поиск' className='bg-[#f2f3f7] rounded-[10px] h-[5vh] px-[15px] w-[75%]' />
        <button className='bg-[#fb4967] w-[100px] h-[5vh] text-white rounded-[10px]'>Найти</button>
      </form>
      <div className='flex justify-between w-[30%]'>
        {/* <div className='cursor-pointer'>
      <svg className='m-auto' width="30" height="30" viewBox="0 2 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16.427 6.482c2.792 1.021 3.909 3.378 3.784 6.596-.04 1.022-.165 1.866-.445 3.341-.075.393-.094.497-.123.659-.268 1.522.048 3.037.975 4.584a1 1 0 0 1-1.032 1.498l-4.959-.874a3.5 3.5 0 0 1-6.824-1.203l-2.989-.527a1 1 0 0 1-.457-1.761c1.4-1.137 2.215-2.453 2.484-3.975.028-.161.045-.266.11-.66.24-1.483.412-2.319.724-3.293.983-3.066 2.84-4.899 5.812-4.903a1 1 0 0 1 1.173-.935l.985.174a1 1 0 0 1 .782 1.28zM9.822 21.44a1.5 1.5 0 0 0 2.786.49l-2.786-.49zm7.852-4.709c.03-.174.05-.281.127-.684.263-1.382.377-2.153.412-3.046.11-2.824-.851-4.448-3.582-4.93-2.73-.48-4.189.717-5.051 3.408-.273.851-.43 1.614-.655 3.002-.066.406-.084.514-.115.688a8.031 8.031 0 0 1-1.746 3.753l10.967 1.934a8.031 8.031 0 0 1-.357-4.125zm.776-10.055a.875.875 0 1 1 .907-1.497c3.116 1.887 3.984 5.077 3.482 9.4a.875.875 0 1 1-1.738-.201c.432-3.718-.259-6.254-2.65-7.702zM6.404 11.744a.875.875 0 1 1-1.701-.408c1.014-4.23 2.938-6.924 6.53-7.61a.875.875 0 1 1 .328 1.72c-2.758.526-4.285 2.664-5.157 6.298z" fill="#3D3F56"></path>
      </svg>
      <p className=' text-black'>Уведомление</p>
      </div> */}
        <Notification />
        <Link to="login">
          <div>
            <svg className='m-auto' width="26" height="26" viewBox="-4 -3 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g stroke="#3D3F56" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2"></path><circle cx="8" cy="4" r="4"></circle></g>
            </svg>
            <p className=' text-black tablet:hidden xs:hidden'>Войти</p>
          </div>
        </Link>
        <Link to="orders">
          <div className='cursor-pointer'>
            <svg className='m-auto' width="26" height="26" viewBox="-3 -4 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M19 6.732V15a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6.732A2 2 0 0 1 0 5V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-1 1.732zM17 7H3v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7zM8 9h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM2 2v3h16V2H2z" fill="#3D3F56"></path>
            </svg>
            <p className=' text-black tablet:hidden xs:hidden'>Мои заказы</p>
          </div>
        </Link>
        <Link to="korzina">
          <div>
            <svg className='m-auto' width="26" height="26" viewBox="-3 -3 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.752 12.5H4.759a2.058 2.058 0 0 1-1.89-1.212l-2.202-5c-.448-1.015.036-2.191 1.08-2.626.255-.107.53-.162.81-.162h12.33l.344-1.45C15.446 1.143 16.277.5 17.234.5h1.238c.568 0 1.028.448 1.028 1s-.46 1-1.028 1h-1.238l-2.669 11.25c1.09.462 1.851 1.52 1.851 2.75 0 1.657-1.38 3-3.084 3-1.703 0-3.083-1.343-3.083-3 0-.35.062-.687.175-1H8.017c.114.313.176.65.176 1 0 1.657-1.38 3-3.084 3-1.703 0-3.084-1.343-3.084-3s1.381-3 3.084-3h7.406l.237-1zm-10.196-7 2.203 5h8.467l1.186-5H2.556zm2.553 12c.568 0 1.028-.448 1.028-1s-.46-1-1.028-1c-.568 0-1.028.448-1.028 1s.46 1 1.028 1zm8.223 0c.568 0 1.028-.448 1.028-1s-.46-1-1.028-1c-.567 0-1.027.448-1.027 1s.46 1 1.027 1z" fill="#3D3F56"></path>
            </svg>
            <p className=' text-black tablet:hidden xs:hidden'>Корзина</p>
          </div>
        </Link>
      </div>
    </div>
    <div className='w-[90%] xs:hidden m-auto flex justify-evenly tablet:hidden flex-wrap pb-[30px]'>
      <div className='flex w-[12%]  hover:text-red-500 cursor-pointer'>
        <BasicMenu />
      </div>
      <div className='flex w-[16%] text-red-500 cursor-pointer'>
        <img loading="lazy" alt="" className='w-[10%] h-[3vh] mr-2' src="https://resources.joomcdn.net/icon/feed@3x.png" srcset="https://resources.joomcdn.net/icon/feed.png 16w, https://resources.joomcdn.net/icon/feed@2x.png 32w, https://resources.joomcdn.net/icon/feed@3x.png 48w" sizes="1.5em" />
        <Link to='category'>
          <span className='mt-1 text-black  hover:text-red-500'>Обзоры от пользователей</span>
        </Link>
      </div>
      <div className='w-[14%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Строительство и ремонт</span>
        </Link>
      </div>
      <div className='w-[12%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Мужская мода</span>
        </Link>
      </div>
      <div className='w-[6%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Обувь</span>
        </Link>
      </div>
      <div className='w-[11%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Дача, сад и огород</span>
        </Link>
      </div>
      <div className='w-[11%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Канцелярия</span>
        </Link>
      </div>
      <div className='w-[6%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black  hover:text-red-500'>Часы</span>
        </Link>
      </div>
      <div className='w-[6%] hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Праздники</span>
        </Link>
      </div>
      <div className='w-[8%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Электроника</span>
        </Link>
      </div>
      <div className='w-[14%] mt-3 hover:text-red-500  xs:hidden cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Чехлы для смартфонов</span>
        </Link>
      </div>
      <div className='w-[14%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Автомобили и мотоциклы</span>
        </Link>
      </div>
      <div className='w-[12%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Сумки и чемоданы</span>
        </Link>
      </div>
      <div className='w-[12%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Товары для дома</span>
        </Link>
      </div>
      <div className='w-[12%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Товары для животных</span>
        </Link>
      </div>
      <div className='w-[12%] mt-3 hover:text-red-500 cursor-pointer'>
        <Link to='category'>
          <span className='text-black hover:text-red-500'>Хобби и творчество</span>
        </Link>
      </div>
    </div>
    <Outlet />
    <hr />
    <div className='w-[90%] m-auto flex justify-between py-[30px] flex-wrap'>
      <ul>
        <li className='font-bold text-[20px]'>Покупателям</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Каталог</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Поддержка</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Политика конфиденциальности</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Условия использования</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Специальные возможности</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Популярные статьи на Joom</li>
        <li className='mt-[10px] hover:underline cursor-pointer'>Популярные запросы на Joom</li>
      </ul>
      <ul>
        <li className='font-bold text-[20px]'>Партнерам</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Стать продавцом</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Условия использования</li>
      </ul>
      <ul className='mt-4 tablet:w-[50%]'>
        <li className=' font-bold text-[20px]'>Компания</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>О компании</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Правообладателям</li>
        <li className='mt-[40px] font-bold text-[20px]'>Компании Joom Group</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Joom Logistics</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Joompay</li>
        <li className='mt-[10px] cursor-pointer hover:underline'>Onfy</li>
      </ul>
      <div className='tablet:w-[50%] mt-4'>
        <p className='font-bold text-[20px]'>Visa Secure</p>
        <div className='border flex mt-[10px] rounded-lg p-[20px] w-[70%] tablet:w-full'>
          <img className='mr-3' src="https://web-client.joomcdn.net/web-client/98b13ee8b2e75270df8e.svg" alt="" />
          <p>Payment Card Security Standard</p>
        </div>
        <p className='font-bold text-[20px] mt-[30px]'>Наше приложение</p>
        <img className='mt-[10px] w-[55%]' class="badge___u8gal" alt="App Store" src="https://web-client.joomcdn.net/web-client/cf31914e4eafdeedab11.svg"></img>
        <img className='mt-[10px] w-[55%]' class="badge___u8gal" alt="Google Play" src="https://web-client.joomcdn.net/web-client/8d6d1bf539fd43832361.svg"></img>
        <img className='mt-[10px] w-[55%]' class="badge___u8gal" alt="Huawei" src="https://web-client.joomcdn.net/web-client/f5013a8dfac37bf59c3f.svg"></img>
      </div>
    </div>
    <div className='w-[90%] m-auto tablet:hidden'>
      <hr />
      <div className='flex justify-between py-[25px]'>
        <p>© 2023 SIA Joom (Latvia)</p>
        <div className='flex justify-between w-[60%]'>
          <p>Этот сайт защищен reCAPTCHA и Google</p>
          <p className='underline cursor-pointer'>Политика конфиденциальности</p>
          <p className='underline cursor-pointer'>Условия использования</p>
        </div>
      </div>
    </div>
  </>
}

export default Layout;