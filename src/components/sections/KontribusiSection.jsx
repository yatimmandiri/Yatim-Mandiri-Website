import Image from 'next/image';
import { ButtonComponent } from '../partials/ButtonComponent';

export const KontribusiSection = () => {
  return (
    <section className='px-4 md:px-16'>
      {/* flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x- items-center justify-center md:justify-between bg-opacity-75 p-6 md:p-8 rounded-xl overflow-hidden bg-orange-200 */}
      <div className='flex flex-col md:flex-row items-center justify-center md:px-24 py-4 space-y-6 md:space-y-0 md:space-x-16 space-x-0 rounded-xl overflow-hidden bg-orange-200 bg-opacity-20'>
        <Image
          src={'/assets/images/icon_1.png'}
          alt='kontribusi'
          width={700}
          height={700}
          className='md:w-96 md:h-96 w-64 h-64 md:relative md:-bottom-4'
        />
        <div className='flex flex-1 flex-col justify-center items-center md:items-start text-center md:text-left space-y-4'>
          <p className='text-3xl font-bold md:w-96'>
            Jadi Bagian dari{' '}
            <span className='text-orange-500'>
              Kehebatan Mereka Berkontribusi
            </span>{' '}
            untuk Masyarakat
          </p>
          <p className='text-sm md:w-96'>
            Tidak harus menunggu kaya untuk berkontribusi, mulai sekarang kamu
            bisa ikut serta memberi manfaat untuk mereka dengan gabung ke
            Relawan Kemandirian
          </p>
          <ButtonComponent text='Gabung Sekarang' />
        </div>
      </div>
    </section>
    // <section className='px-4 md:px-16 py-4'>
    //   <div className='flex flex-row border h-58 space-x-24 rounded-xl overflow-hidden px-28 bg-orange-200 bg-opacity-75'>

    //   </div>
    // </section>
    // <section>
    //   <div className='flex flex-row h-56 items-end justify-center rounded-lg overflow-hidden bg-opacity-75 bg-orange-200'>
    //     <Image
    //       src={'/assets/images/icon_1.png'}
    //       alt='kontribusi'
    //       width={400}
    //       height={400}
    //       className='w-24 h-24'
    //     />

    //   </div>
    // </section>
    // <section className='shadow-lg flex flex-row justify-between border mx-4 md:mx-16 rounded-lg overflow-hidden bg-blue-500'>
    //   <div className='relative w-full h-40 md:h-64'>
    //     <Image src={'/assets/images/icon_1.png'} alt='kontribusi' fill={true} />
    //   </div>

    // </section>
    // <div className='border mx-auto'>
    //   <div className='flex flex-row space-x-4 items-center justify-center'>
    //     <span className='w-1/2'>Icon</span>
    //     <div className='flex flex-col space-y-4'>

    //     </div>
    //   </div>
    // </div>
  );
};
