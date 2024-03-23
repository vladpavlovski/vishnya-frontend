export const Mission = () => {
  return (
    <section className='bg-background py-16 md:py-32'>
      <div className='container mx-auto'>
        <span>Наша миссия</span>
        <h2 className='mb-10 text-center text-3xl font-bold text-gray-800'>
          Ваши приоритеты - наша первостепенная задача
        </h2>
        <p className='text-lg leading-relaxed'>
          Агентство по недвижимости VISHNYA основано на стремлении приблизиться
          к максимально полному удовлетворению потребностей наших клиентов и
          готово в кратчайшие сроки подобрать для своих клиентов идеально
          подходящее жильё, элитный объект недвижимости или успешно
          инвестировать финансовые средства.
        </p>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='flex flex-col items-center'>
            <img
              src='/images/mission/1.png'
              alt='mission'
              className='h-20 w-20'
            />
            <h3 className='mt-4 text-xl font-bold'>Профессионализм</h3>
            <p className='text-center'>
              Наши сотрудники - профессионалы своего дела, которые помогут вам
              сделать правильный выбор
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/images/mission/2.png'
              alt='mission'
              className='h-20 w-20'
            />
            <h3 className='mt-4 text-xl font-bold'>Качество</h3>
            <p className='text-center'>
              Мы предлагаем только качественные объекты недвижимости, которые
              прошли проверку нашими специалистами
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/images/mission/3.png'
              alt='mission'
              className='h-20 w-20'
            />
            <h3 className='mt-4 text-xl font-bold'>Безопасность</h3>
            <p className='text-center'>
              Мы гарантируем безопасность сделок и конфиденциальность ваших
              данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
