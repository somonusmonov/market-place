import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../api/products'
import { useDispatch, useSelector } from 'react-redux';
import { decrementProduct, deleteProduct, incrementProduct } from '../../reducers/basket';

const Korzina = () => {
    const { data = [], isLoading } = useGetProductsQuery();
    const products = useSelector(({ basket }) => basket.products);
    const total = useSelector(({ basket }) => basket.total);
    const dispatch = useDispatch();
    const params = useParams();
    console.log(products);
    return <>
        <div className='bg-[#edecec]'>
            {
                params.id
            }
            <div className='w-[90%] m-auto py-[20px]'>
                <Link to="/">
                    <p className='opacity-60 text-black'>Главная</p>
                </Link>
                <h1 className='mt-3'>Моя корзина</h1>
                {
                    products.length > 0 ?
                        products.map((e) => {
                            return <Link key={e.id} to={`/tovar/${e.id}`}>
                                <div key={e.id} className='bg-white w-full flex-wrap flex justify-between p-[30px] mt-[20px] rounded-[20px]'>
                                    {/* <p className='hidden tablet:block text-[14px] w-full opacity-60'>2022 Новый блестящий ожерелье бабочки для женщин девочек Дамы Изысканный двухслойный ключик Цепочка Ожерелье Мода Ювелирные изделия Подарок</p> */}
                                    {/* <img className='w-[16%] tablet:w-[35%] tablet:mt-4' loading="lazy" src={e?.media[0]?.src}/> */}
                                    <div className='w-[60%]'>
                                        <h2>{e.name}</h2>
                                        {/* <p className='tablet:hidden'>2022 Новый блестящий ожерелье бабочки для женщин девочек Дамы Изысканный двухслойный ключик Цепочка Ожерелье Мода Ювелирные изделия Подарок</p> */}
                                        {
                                            e.description && e.description
                                        }
                                        <p className='opacity-60 mt-4'>Доставка: 15‑45 дней</p>
                                        <div className='flex w-[10%] mt-4'>
                                            <div className='flex w-[90%]'>
                                                <button onClick={() => dispatch(decrementProduct(e.product.id))} className='rounded-[20px] w-[45%] text-center h-[2vh] mr-2'>-</button>
                                                {
                                                    e.quantity
                                                }
                                                <button onClick={() => dispatch(incrementProduct(e.product.id))} className='rounded-[20px] w-[45%] text-center h-[2vh] ml-2'>+</button>
                                            </div>
                                            <div className='ml-4 tablet:ml-[30px]'>
                                                <svg onClick={() => dispatch(deleteProduct(e.product.id))} className=' cursor-pointer text-[red]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1.2em" viewBox="0 0 18 18" class="icon___FELxM block___r27IC">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M2 6v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6H2zm11-3V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v2H0v2h18V3h-5zm-2 0H7V2h4v1z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[20%]'>

                                    </div>
                                </div>
                            </Link>
                        }) : null
                }
            </div>
        </div>
    </>
}

export default Korzina