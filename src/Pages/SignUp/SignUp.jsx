import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return <>
    <div className='w-[90%] m-auto my-[80px]'>
        <img loading="lazy" alt="3d-lock-key" class=" m-auto w-[15%] tablet:w-[50%]" src="https://web-client.joomcdn.net/web-client/7331f5ae933a55429071.png" srcset="https://web-client.joomcdn.net/web-client/7331f5ae933a55429071.png 240w, https://web-client.joomcdn.net/web-client/427a7a437665b8de4f8b.png 480w, https://web-client.joomcdn.net/web-client/88211fecff4b6fe7867c.png 720w, https://web-client.joomcdn.net/web-client/dbbc505fe4f11f118dab.png 960w" sizes="100vw"/>
        <h1 className='text-center text-[20px] font-bold'>Зарегистрируйтесь</h1>
        <h2 className='text-[19px] tablet:text-[16px] font-semibold mt-2 text-center'>Это нужно, чтобы сохранить историю своих покупок</h2>
        <div className='w-[25%] m-auto tablet:w-[70%]'>
            <form className='w-full mt-4'>
              <h3>Имя</h3>
              <input type="text" required className='rounded-[20px] w-full h-[5vh] border pl-4'/>
              <h3>Фамилия</h3>
              <input type="text" required  className='rounded-[20px] w-full h-[5vh] border pl-4'/>
                <h3>Эл. почта</h3>
                <input type="text" required className='rounded-[20px] w-full h-[5vh] border pl-4' />
                <h3 className='mt-3'>Пароль</h3>
                <input type="text" required className='rounded-[20px] w-full h-[5vh] border pl-4' />
                <h3 className='mt-3'>Повторите пароль</h3>
                <input type="text" required className='rounded-[20px] w-full h-[5vh] border pl-4' />
                <button type='submit' className='bg-[#1f1f4a] h-[5vh] w-full text-white rounded-[20px] mt-4'>Войти</button>
            </form>
            <div className='w-[80%] tablet:w-full m-auto justify-center flex mt-4 '>
                <p className='mr-2'>Уже есть аккаунт?</p>
                <Link to="/login">
                  <p className='underline text-red-500'>Войдите здесь</p>
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

export default SignUp