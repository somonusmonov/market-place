import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  return <>
    <div className='w-[100%] m-auto my-[80px]'>
        <img loading="lazy" alt="3d-lock-key" class=" m-auto w-[15%] tablet:w-[50%]" src="https://web-client.joomcdn.net/web-client/7331f5ae933a55429071.png" srcset="https://web-client.joomcdn.net/web-client/7331f5ae933a55429071.png 240w, https://web-client.joomcdn.net/web-client/427a7a437665b8de4f8b.png 480w, https://web-client.joomcdn.net/web-client/88211fecff4b6fe7867c.png 720w, https://web-client.joomcdn.net/web-client/dbbc505fe4f11f118dab.png 960w" sizes="100vw"/>
        <h1 className='w-[30%] tablet:w-full text-center m-auto text-[20px] font-bold'>Авторизуйтесь, чтобы сохранить историю ваших покупок</h1>
        <div className='w-[20%] tablet:w-[60%] m-auto '>
            <form className='w-full mt-4'>
                <h3>Эл. почта</h3>
                <input type="text" className='rounded-[20px] w-full h-[5vh] border pl-4' />
                <h3 className='mt-3'>Пароль</h3>
                <input type="text" className='rounded-[20px] w-full h-[5vh] border pl-4' />
                <button type='submit' className='bg-[#1f1f4a] h-[5vh] w-full text-white rounded-[20px] mt-4'>Войти</button>
            </form>
            <div className='w-[80%] tablet:w-full m-auto justify-between flex mt-4 text-red-500'>
                <p className='underline'>Забыли пароль?</p>
                <Link to={"/signUp"}>
                    <p className='underline text-red-500'>Регистрация</p>
                </Link>
            </div>
            {/* <div className='w-[90%] m-auto flex mt-4'>
                <hr className='w-[15%] mt-3.5'/>
                <h3 className='w-[70%] text-center opacity-60 text-[20px]'>Или войдите через</h3>
                <hr className='w-[15%] mt-3.5'/>
            </div>
            <div className='w-[90%] m-auto'>
                
            </div> */}
        </div>
    </div>
  </>
}

export default Login