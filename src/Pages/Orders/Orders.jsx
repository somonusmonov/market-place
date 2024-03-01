import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return <>
    <div className='text-center py-[30px] pb-[100px]'>
        <img loading="lazy" alt="3d-zoom" class=" w-[30%] tablet:w-[50%] m-auto" src="https://web-client.joomcdn.net/web-client/fcbc407ccde470158047.png" srcset="https://web-client.joomcdn.net/web-client/fcbc407ccde470158047.png 240w, https://web-client.joomcdn.net/web-client/2725b8baa869ae287201.png 480w, https://web-client.joomcdn.net/web-client/1aed19ee993ef1eae78f.png 720w, https://web-client.joomcdn.net/web-client/7f662f584166153a9022.png 960w" sizes="100vw"/>
        <h1 className='font-bold tablet:text-[24px]'>Ваша история заказов пуста!</h1>
        <Link to="/">
            <button className='bg-red-500 w-[180px] h-[6vh] rounded-[20px] text-[20px] text-white mt-10'>Купить сейчас</button>
        </Link>
    </div>
  </>
}

export default Orders