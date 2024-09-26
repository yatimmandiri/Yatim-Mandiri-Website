import { TitleSectionComponent } from '@/components/partials/SectionComponent';
import Image from 'next/image';

export const ProgramKamiSection = () => {
  const data = [
    {
      title: 'Pendidikan',
      link: '/pendidikan',
    },
    {
      title: 'Pemberdayaan',
      link: '/pemberdayaan',
    },
    {
      title: 'Kesehatan',
      link: '/kesehatan',
    },
    {
      title: 'Kemanusiaan',
      link: '/Kemanusiaan',
    },
    {
      title: 'Dakwah',
      link: '/Dakwah',
    },
  ];

  return (
    <div className='flex flex-col space-y-4 px-4 md:px-16 py-4'>
      <TitleSectionComponent title='Program Kami' />
      <p className='flex flex-col'>
        <span>Yatim Mandiri mempunyai 5 pilar program yang akan terus</span>
        <span>dibawa dengan tujuan kemakmuran dan kemandirian yatim </span>
        <span>dhuafa</span>
      </p>
      <div className='flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
          {data?.map((item, i) => (
            <ProgramKamiItemSection
              key={i}
              item={item}
              priority={i == 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProgramKamiItemSection = ({ item = [] }) => {
  return (
    <div className='flex flex-col rounded-lg overflow-hidden'>
      <Image
        src={'https://picsum.photos/400/400'}
        alt='program_kami'
        className='object-cover w-full h-48'
        width={400}
        height={400}
      />
      <span className='text-center p-2 text-white bg-orange-500'>
        {item.title}
      </span>
    </div>
  );
};
