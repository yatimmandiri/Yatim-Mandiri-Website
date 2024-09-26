'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleSectionComponent } from '../partials/SectionComponent';

export const KabarTerbaruSection = ({ data = [] }) => {
  return (
    <div className='flex flex-col space-y-4 px-4 md:px-16 py-4'>
      <TitleSectionComponent title='Kabar Terbaru' />
      <div className='flex-1'>
        <Swiper
          spaceBetween={20}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ delay: 2500 }}
          className='grid grid-cols-1 md:grid-cols-4 gap-4'
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <KabarTerbaruItemSection
                item={item}
                priority={i == 0 ? true : false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const KabarTerbaruItemSection = ({ item = [] }) => {
  return (
    <Link
      href={item?.link}
      target='_blank'
      className='flex flex-col border rounded-lg overflow-hidden'
    >
      <Image
        src={item?.featured_image?.large}
        alt={item?.slug}
        width={400}
        height={400}
        className='w-full h-48 object-cover'
      />
      <div className='flex flex-col space-y-3 justify-center p-4'>
        <div className='flex flex-row justify-between items-center text-xs text-gray-400'>
          <span className='line-clamp-1'>{item?.author}</span>
          <span className='line-clamp-1'>{item?.date}</span>
        </div>
        <span className='text-sm font-semibold line-clamp-2'>
          {item?.title}
        </span>
      </div>
    </Link>
  );
};
