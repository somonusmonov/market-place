import React from 'react'
import './Home.css';
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/products.js'
import { addProduct } from '../../reducers/basket';
import { useDispatch } from 'react-redux';

const Home = () => {
    const { data = [], isLoading } = useGetProductsQuery();
    const dispatch = useDispatch();
    const params = useParams();
    console.log(data);
    console.log(params.id);
    return <>
        <div className='item___k_5eL py-[30px] my-[30px] w-[90%] m-auto flex justify-evenly '>
            <div className='mt-[60px] tablet:mt-[40px] text-white'>
                <h1 className='tablet:text-[20px]'>Хиты этой недели</h1>
                <h2 className='tablet:text-[20px]'>Акция недели</h2>
            </div>
            <img loading="lazy" alt="" class=" tablet:w-[30%]" src="https://upload.joomcdn.net/e806404117dadd18a43147326babbc355e40df57_352_352.png" srcset="https://upload.joomcdn.net/e806404117dadd18a43147326babbc355e40df57_176_176.png 176w, https://upload.joomcdn.net/e806404117dadd18a43147326babbc355e40df57_352_352.png 352w, https://upload.joomcdn.net/e806404117dadd18a43147326babbc355e40df57_original.png 704w" sizes="(min-width: 768px) 288px, 132px" />
        </div>
        <div className='w-[90%] m-auto py-[30px]'>
            <h1>Платья на лето</h1>
            <div className='flex justify-between flex-wrap mt-6'>
                {
                    data.length > 0 &&
                    data.map((e) => {
                        return <div className='w-[18%] mt-4 tablet:w-[48%]'>
                            <Link key={e.id} to={`/tovar/${e.id}`}>
                                <h2 className='text-[24px]'>{e.name}</h2>
                                <img className='w-full' src={e?.media[0]?.src} alt="" />
                                {
                                    e?.discount?.length > 0 ? <h1 className='text-[24px] mt-[10px]'>{((e.price * 10) - e.discount) / 100}<span className='text-[18px] line-through ml-2'>{e.price}</span></h1> : <h1 className='text-[24px] mt-[10px]'>{e.price}</h1>
                                }
                                <div className='flex w-[40%] mt-[8px] '>
                                    <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                    <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                    <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                    <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                    <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                </div>
                                {
                                    e.description && e.description
                                }
                                <button onClick={() => {
                                    dispatch(addProduct(e));
                                }}>Buy</button>
                            </Link>
                        </div>
                    })
                }
                {/* <div className='w-[18%] mt-4 tablet:w-[48%]'>
                    <Link to="tovar">
                        <img className='w-full' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw" />

                        <div className='bg-[#fb4967] w-[28%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                        <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                        <div class="star w-[82.238806px] flex mt-[10px]">
                            <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                            <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                            <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                            <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                            <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        </div>
                        <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                    </Link>
                </div> */}
            </div>
            <br /><br />
            <h1>Акция недели</h1>
            <div className='flex justify-between flex-wrap'>
                <div className='item___k_5eL text-center w-[33%] tablet:w-[100%] pt-[20px] rounded-[20px] text-white mt-[40px]'>
                    <h2 className='font-semibold'>Ухаживаем за машиной</h2>
                    <h2 className='font-semibold'>Акция недели</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/790c9349f8b0977a33edb6e5be82879a3d5c1a2d_176_76.jpeg" srcset="https://upload.joomcdn.net/790c9349f8b0977a33edb6e5be82879a3d5c1a2d_176_76.jpeg 176w, https://upload.joomcdn.net/790c9349f8b0977a33edb6e5be82879a3d5c1a2d_352_152.jpeg 352w, https://upload.joomcdn.net/790c9349f8b0977a33edb6e5be82879a3d5c1a2d_704_305.jpeg 704w, https://upload.joomcdn.net/790c9349f8b0977a33edb6e5be82879a3d5c1a2d_original.jpeg 1440w" sizes="100vw" ></img>
                </div>
                <div className='text-center w-[33%] pt-[20px] tablet:w-[100%] text-black rounded-[20px] bg-[pink] mt-[40px]'>
                    <h2 className='font-semibold'>Все по полочкам</h2>
                    <h2 className='font-semibold'>Акция недели</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/6838ef2c5d10aaf35056b29521f78c06097b97bd_176_76.jpeg" srcset="https://upload.joomcdn.net/6838ef2c5d10aaf35056b29521f78c06097b97bd_176_76.jpeg 176w, https://upload.joomcdn.net/6838ef2c5d10aaf35056b29521f78c06097b97bd_352_152.jpeg 352w, https://upload.joomcdn.net/6838ef2c5d10aaf35056b29521f78c06097b97bd_704_305.jpeg 704w, https://upload.joomcdn.net/6838ef2c5d10aaf35056b29521f78c06097b97bd_original.jpeg 1440w" sizes="100vw" ></img>
                </div>
                <div className='text-center w-[33%] pt-[20px] tablet:w-[100%] text-black rounded-[20px] bg-[#e9aab5] mt-[40px]'>
                    <h2 className='font-semibold'>Солнцезащитные очки</h2>
                    <h2 className='font-semibold'>Акция недели</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/d7d7b271e1d86ec63170b2eacfc69560650b21a0_176_76.jpeg" srcset="https://upload.joomcdn.net/d7d7b271e1d86ec63170b2eacfc69560650b21a0_176_76.jpeg 176w, https://upload.joomcdn.net/d7d7b271e1d86ec63170b2eacfc69560650b21a0_352_152.jpeg 352w, https://upload.joomcdn.net/d7d7b271e1d86ec63170b2eacfc69560650b21a0_704_305.jpeg 704w, https://upload.joomcdn.net/d7d7b271e1d86ec63170b2eacfc69560650b21a0_original.jpeg 1440w" sizes="100vw" />
                </div>
                <div className='text-center w-[33%] pt-[20px] tablet:w-[100%]  rounded-[20px] bg-[#3d3d9a] mt-[40px] text-white'>
                    <h2 className='font-semibold'>Обувь на любой вкус</h2>
                    <h2 className='font-semibold'>Со скидками от магазина</h2>
                    <img loading="lazy" class="m-auto image___SvnGD transparentLoading___GfPDh image___w9rd5  block___HT_rx contain___noUdD" src="https://resources.joomcdn.net/promotions/merchant/5fdb703436004614072e920b_bannerImage.png" srcset="https://resources.joomcdn.net/promotions/merchant/5fdb703436004614072e920b_bannerImage.png 176w, https://resources.joomcdn.net/promotions/merchant/5fdb703436004614072e920b_bannerImage@2x.png 352w, https://resources.joomcdn.net/promotions/merchant/5fdb703436004614072e920b_bannerImage@3x.png 528w, https://resources.joomcdn.net/promotions/merchant/5fdb703436004614072e920b_bannerImage@4x.png 704w" sizes="132px" />
                </div>
            </div>
            <h1 className='mt-[40px]'>Товары из разных стран</h1>
            <div className='flex justify-between flex-wrap'>
                <div className='w-[33%] mt-[40px] tablet:w-[100%] text-black pt-[20px] rounded-[20px] text-center bg-[#f4f1f1]'>
                    <h2 className='font-bold'>Товары из Кореи</h2>
                    <h2 className='font-bold'>Лучшее со всего мира</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/e0d04bd4b205e2475883400c6f40be5d342ce9b8_original.jpeg" ></img>
                </div>
                <div className='w-[33%] mt-[40px] tablet:w-[100%] text-black pt-[20px] rounded-[20px] text-center bg-[#f4f1f1]'>
                    <h2 className='font-bold'>Товары из Турции</h2>
                    <h2 className='font-bold'>Лучшее со всего мира</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/079b6606bae241cbc9b61dfeb640d42e6e9079b2_original.jpeg" />
                </div>
                <div className='w-[33%] mt-[40px] tablet:w-[100%] text-black pt-[20px] rounded-[20px] text-center bg-[#f4f1f1]'>
                    <h2 className='font-bold'>Товары из Индии</h2>
                    <h2 className='font-bold'>Лучшее со всего мира</h2>
                    <img loading="lazy" alt="" class="image___SvnGD  background___mEarA  cover___FrJXf" src="https://upload.joomcdn.net/1ba3bd871f5bd4eb141e688c7e900a245a999646_original.jpeg" />
                </div>
            </div><br /><br />
            <h1>Лучшие товары специально для вас</h1>
            <div className='flex justify-between flex-wrap mt-6'>
                {
                    data.length > 0 &&
                    data.map((e) => {
                        return <div className='w-[18%] mt-4 tablet:w-[48%]'>
                            <h2 className='text-[24px]'>{e.name}</h2>
                            <img className='w-full' src={e?.media[0]?.src} alt="" />
                            {
                                e?.discount?.length > 0 ? <h1 className='text-[24px] mt-[10px]'>{((e.price * 10) - e.discount) / 100}<span className='text-[18px] line-through ml-2'>{e.price}</span></h1> : <h1 className='text-[24px] mt-[10px]'>{e.price}</h1>
                            }
                            <div className='flex w-[40%] mt-[8px] '>
                                <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                                <img className='w-[20%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                            </div>
                            {
                                e.description && e.description
                            }

                        </div>
                    })
                }
            </div>
            <div className=' justify-center flex mt-7'>
                <button className='m-auto h-[6.5vh] text-[20px] text-white bg-[#14141f] w-[180px] rounded-[18px]'>Показать ещё</button>
            </div>
        </div >
    </>
}

export default Home;