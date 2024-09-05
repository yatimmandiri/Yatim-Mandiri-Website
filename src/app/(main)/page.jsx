import { ServiceComponent } from '@/components/sections/ServiceComponent';
import { MainLayout } from '@/layouts/MainLayout';
import Image from 'next/image';

export default function MainPage() {
  return (
    <MainLayout>
      <Image
        src={'https://picsum.photos/1920/1080'}
        alt='media'
        width={1920}
        height={1080}
        className='object-contain md:object-cover w-full md:h-96 md:w-full'
      />
      <ServiceComponent />
    </MainLayout>
  );
}
