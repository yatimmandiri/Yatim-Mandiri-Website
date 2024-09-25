import Image from 'next/image';

export const YatimMandiriGroupSection = () => {
  return (
    <div className='text-sm flex flex-col space-y-3'>
      <span className='font-semibold'>Yatim Mandiri Group</span>
      <div className='flex space-x-3'>
        <Image
          src={'/assets/images/infak_yatim_logo.png'}
          alt='logo'
          width={80}
          height={80}
          className='w-16 h-8'
        />
        <Image
          src={'/assets/images/wakaf_logo.png'}
          alt='logo'
          width={80}
          height={80}
          className='w-16 h-8'
        />
        <Image
          src={'/assets/images/tanam_berkah_logo.png'}
          alt='logo'
          width={80}
          height={80}
          className='w-16 h-8'
        />
      </div>
    </div>
  );
};
