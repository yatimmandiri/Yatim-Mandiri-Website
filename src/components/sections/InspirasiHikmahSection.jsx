import { TitleSectionComponent } from '@/components/partials/SectionComponent';
import Image from 'next/image';
import Link from 'next/link';

export const InspirasiHikmahSection = ({ data = [] }) => {
  return (
    <div className='flex flex-col space-y-4 py-4 px-6 md:px-24'>
      <TitleSectionComponent title='Inspirasi dan Hikmah' />
      <div className='flex-1'>
        <div className='grid grid-cols-1 gap-4'>
          {data?.map((item, i) => (
            <InspirasiHikmahItemSection
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

export const InspirasiHikmahItemSection = ({ item = [] }) => {
  return (
    <Link
      href={item?.link}
      className='flex flex-row space-x-4 border rounded-lg overflow-hidden'
    >
      <Image
        src={item?.featured_image?.large}
        alt={item?.slug}
        width={400}
        height={400}
        className='w-1/4 h-48 object-cover'
      />
      <div className='flex flex-col space-y-4 py-4'>
        <div className='flex flex-row space-x-3 text-blue-500 font-semibold text-sm'>
          {item?.categories?.map((category, i) => (
            <span key={i}>{category?.name}</span>
          ))}
        </div>
        <span className='text-base font-semibold line-clamp-2'>
          {item?.title}
        </span>
        <div
          className='line-clamp-4 text-sm'
          dangerouslySetInnerHTML={{ __html: item?.excerpt }}
        />
      </div>
    </Link>
  );
};
