import React from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Category = () => {
  return <>
    <div className=' w-[90%] m-auto py-[30px]'>
        <Link to="/">
        <span className=' text-black opacity-40 hover:text-red-500 hover:underline'>Главная</span>
        </Link>
        <span className='ml-2 opacity-60'>/</span>
        <span className='ml-2 opacity-60 hover:text-red-500 hover:underline'>Каталог</span>
        <div className='flex justify-between'>
            <div className='w-[30%] tablet:hidden pr-[30px] sticky left-0'>
                <h2 className='text-[28px] xs:text-[20px]'>Строительство и ремонт</h2>
                <div className='flex mt-4 hover:text-red-500 cursor-pointer'>
                    <div className='flex items-center'><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="prevIcon___zBMqY"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10H3M9 16l-6-6 6-6"></path></g></svg></div>
                    <h2 className='ml-2 hover:text-red-500 cursor-pointer'>Строительство и ремонт</h2>
                </div>
                <div className='flex justify-between mt-4 hover:text-red-500 cursor-pointer'>
                    <h2>Инструменты и аксессуары</h2>
                    <ChevronRightIcon/>
                </div>
                <div className='flex justify-between mt-4 hover:text-red-500 cursor-pointer'>
                    <h2>Инструменты и аксессуары</h2>
                    <ChevronRightIcon/>
                </div>
                <div className='flex justify-between mt-4 hover:text-red-500 cursor-pointer'>
                    <h2>Инструменты и аксессуары</h2>
                    <ChevronRightIcon/>
                </div>
                <div className='flex justify-between mt-4 hover:text-red-500 cursor-pointer'>
                    <h2>Инструменты и аксессуары</h2>
                    <ChevronRightIcon/>
                </div>
                <div className='flex justify-between mt-4 hover:text-red-500 cursor-pointer'>
                    <h2>Инструменты и аксессуары</h2>
                    <ChevronRightIcon/>
                </div>
            </div>
            <div className='w-[70%] tablet:w-full flex flex-wrap justify-between'>
                <div className='w-[30%] tablet:w-[48%] mt-4'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
                <div className='w-[30%] mt-4 tablet:w-[48%]'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
                <div className='w-[30%] mt-4 tablet:w-[48%]'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
                <div className='w-[30%] mt-4 tablet:w-[48%]'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
                <div className='w-[30%] mt-4 tablet:w-[48%]'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
                <div className='w-[30%] mt-4 tablet:w-[48%]'>
                    <img className='w-[100%]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
                    <div className='bg-[#fb4967] w-[18%] text-white rounded-[20px] pl-2 mt-3'>-30%</div>
                    <h1 className='text-[24px] mt-[10px]'>31,37$ <span className='text-[18px] line-through'>45$</span></h1>
                    <div class="star w-[82.238806px] flex mt-[10px]">
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                        <img className='w-[30%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    </div>
                    <p className='text-[13px] mt-3'>DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз</p>
                </div>
            </div>
        </div>
        <div className='hidden tablet:block text-center mt-8'>
        <button className='m-auto h-[6.5vh] text-[20px] text-white bg-[#14141f] w-[180px] rounded-[18px]'>Показать ещё</button>
        </div>
    </div>
  </>
}

export default Category;
