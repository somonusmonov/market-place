import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../api/products';

const Tovar = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useGetProductsQuery();
  return <>
    <div className='w-[90%] m-auto py-[30px]'>
      <div className='flex'>
      <Link to="/">
        <p className='opacity-60 mr-2'>Главная</p>
      </Link>
      <p className='opacity-60 mr-2'>/</p>
      <p className='opacity-60 mr-2'>Каталог</p>
      </div>
      <div className='mt-5 flex justify-between flex-wrap'>
        <div className='w-[42%] tablet:w-full'>
          {/* <img className=' w-[100%] rounded-[20px]' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/> */}
          {
            data.filter((e) => e === id ).map((e) => {
              return (
                <img src={e?.media[0]?.scr} className='w-[100%] rounded-[20px]' alt="" />
              )
            })
          }
          <div className=' mt-16 tablet:hidden'>
            <h1>Отзывы</h1>
            <div className='flex mt-6 flex-col'>
              <div className='flex justify-between'>
                <div className='flex w-[30%]'>
                  <img loading="lazy" alt="Профиль пользователя Polina Baranova" class="image___SvnGD rounded-[100px] w-[30%]  avatar___Ery5Q image___SvnGD " src="https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_100_100.jpeg" srcset="https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_100_100.jpeg 100w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_200_200.jpeg 200w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_400_400.jpeg 400w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_original.jpeg 604w" sizes="(min-width: 768px) 5vw, 10vw"/>
                  <div className='ml-2 mt-1'>
                    <h2>Polina Baranova</h2>
                    <p className='opacity-60'>15 июля 2022 г.</p>
                  </div>
                </div>
                <div className='w-[30%]'>
                  <div className='flex'>
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                  </div>
                  <p className='opacity-60 mt-2'>95mm X 70mm</p>
                </div>
              </div>
              <div className='px-[50px] pb-[20px]'>
                <h2>🔸Пришли хорошими, нигде ничего не порвано и т.п. </h2>
                <h2>🔸Не советую отрывать от бумаги, если Вы приклеивали к книге. Если не жалко книги, не важен текст, то можно отрывать.  </h2>
                <h2>🔸На стике держаться только шариковая ручка и любой карандаш (цветной, простой).  </h2>
                <h2>✈️Заказывала 02.06, пришла 15.07 в Москву.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[48%] tablet:w-full tablet:mt-4'>
          {/* <h1 className='text-[26px] tablet:text-[20px]'>50 листов Водонепроницаемый ПЭТ Прозрачный липкий блокнот Для заметки Ежедневно Для дел Список Бумаглария Школа Канцелярские канцелярские офисные аксессуары</h1> */}
          {
            data.filter((e) => e.id === id ).map((e) => {
              return (
                <h1>{e.description}</h1>
              )
            })
          }
          <div className='flex mt-3'>
            <img className='w-[3%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
            <p className='text-red-500 text-[16px] ml-1'>4,7</p>
            <p className='opacity-60 ml-4 text-[16px]'>94% рекомендуют</p>
            <p className='opacity-60 ml-4 text-[16px]'>более 3000 покупок</p>
          </div>
          <hr className='mt-6'/>
          <div className='flex justify-between mt-6'>
            <h1 className=' mt-2'>43 $ <span className='opacity-60 line-through text-[36px]'>48 $</span></h1>
            <div>
              <button className='w-[200px] h-[6vh] bg-[#14141f] rounded-[18px] text-[19px] text-white'>В корзину</button><br />
              <button className='w-[200px] h-[6vh] bg-red-500 rounded-[18px]    text-[19px] text-white mt-4'>Купить сейчас</button>
            </div>
          </div>
          <hr className='mt-6'/>
          <div className='mt-6'>
            <p className='opacity-60'>Цвет <span className='text-black'>Как на картинке</span></p>
            <img className=' w-[6%] mt-4 rounded-[20px] border cursor-pointer' loading="lazy" alt="DIMANAF Женское платье Лето Пляж Сарафан Шифон Богемный Принт Цветы Мода Леди Vestidos Свободный Повседневный Длинное Платье Оверсайз" class="image___SvnGD  image___iZ0xe  contain___noUdD multiply___qGIpX" src="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg" srcset="https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_100_100.jpeg 100w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_200_200.jpeg 200w, https://img.joomcdn.net/83162460db304c9ad11fad4549a6429bdeaab3ba_400_400.jpeg 400w" sizes="(min-width: 1280px) 197px, (min-width: 840px) 25vw, (min-width: 600px) 33vw, (min-width: 0) 50vw"/>
            <p className='opacity-60 mt-4'>Размер</p>
            <button className='mt-4 bg-[green] text-white w-[150px] rounded-[30px] h-[6vh] mr-3'>51mm X 76mm</button>
            <button className='mt-4 bg-[green] text-white w-[150px] rounded-[30px] h-[6vh] mr-3'>51mm X 76mm</button>
            <button className='mt-4 bg-[green] text-white w-[150px] rounded-[30px] h-[6vh]'>51mm X 76mm</button>
          </div>
        </div>
        <div className=' hidden tablet:block w-full mt-8'>
            <h1>Отзывы</h1>
            <div className='flex mt-6 flex-col'>
              <div className='flex justify-between'>
                <div className='flex w-[50%]'>
                  <img loading="lazy" alt="Профиль пользователя Polina Baranova" class="image___SvnGD rounded-[100px] w-[30%]  avatar___Ery5Q image___SvnGD " src="https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_100_100.jpeg" srcset="https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_100_100.jpeg 100w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_200_200.jpeg 200w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_400_400.jpeg 400w, https://avatars.joomcdn.net/bd564ca3831e002876b3576e1eda04b6c4b03941_original.jpeg 604w" sizes="(min-width: 768px) 5vw, 10vw"/>
                  <div className='ml-2 mt-1'>
                    <h2>Polina Baranova</h2>
                    <p className='opacity-60'>15 июля 2022 г.</p>
                  </div>
                </div>
                <div className='w-[30%] mt-3'>
                  <div className='flex'>
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                    <img className='w-[10%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" alt="" />
                  </div>
                  <p className='opacity-60 mt-2 text-[15px]'>95mm X 70mm</p>
                </div>
              </div>
              <div className='px-[50px] py-[20px]'>
                <h2>🔸Пришли хорошими, нигде ничего не порвано и т.п. </h2>
                <h2>🔸Не советую отрывать от бумаги, если Вы приклеивали к книге. Если не жалко книги, не важен текст, то можно отрывать.  </h2>
                <h2>🔸На стике держаться только шариковая ручка и любой карандаш (цветной, простой).  </h2>
                <h2>✈️Заказывала 02.06, пришла 15.07 в Москву.</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  </>
}

export default Tovar