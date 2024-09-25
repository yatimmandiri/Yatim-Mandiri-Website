import Image from 'next/image';

export const ServiceComponent = () => {
  const services = [
    {
      id: 1,
      name: 'Kalkulator Zakat',
      icon: '/images/kalkulator-zakat.svg',
    },
    {
      id: 2,
      name: 'Kalkulator Iuran',
      icon: '/images/kalkulator-zakat.svg',
    },
    {
      id: 3,
      name: 'Kalkulator Iuran',
      icon: '/images/kalkulator-zakat.svg',
    },
    {
      id: 4,
      name: 'Kalkulator Iuran',
      icon: '/images/kalkulator-zakat.svg',
    },
    {
      id: 5,
      name: 'Kalkulator Iuran',
      icon: '/images/kalkulator-zakat.svg',
    },
  ];

  return (
    <section className='px-4 py-4 bg-white max-w-sm md:max-w-4xl mx-auto relative -mt-10 text-xs shadow rounded grid grid-cols-1 md:grid-cols-5 gap-3 text-center items-center justify-center'>
      {services.map((service, i) => (
        <div key={i} className='flex flex-row w-full items-center space-x-2'>
          <Image src={service.icon} alt={service.name} width={60} height={60} />
          <span className='md:w-5 font-semibold'>{service.name}</span>
        </div>
      ))}
    </section>
  );
};
