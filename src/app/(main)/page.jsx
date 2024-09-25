import HeroComponent from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
=======
import { ServiceComponent } from '@/components/sections/ServiceComponent';
import { MainLayout } from '@/layouts/MainLayout';
import Image from 'next/image';

export default function MainPage() {
  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent />
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 p-4 bg-white rounded-lg shadow-lg flex justify-center space-x-5">
          <div className="flex flex-row items-center pr-10 border border-gray-300 rounded-lg">
            <Image
              src="img/calculate.svg"
              alt="Kalkulator Zakat"
              className="h-10 w-10 ml-4 mr-2"
              width={80}
              height={80}
            />
            <p className="text-xs mr-5">Kalkulator Zakat</p>
          </div>
          <div className="flex flex-row items-center pr-10 border border-gray-300 rounded-lg">
            <Image
              src="img/donation.svg"
              alt="Rekening Donasi"
              className="h-10 w-10 ml-4 mr-2"
              width={80}
              height={80}
            />
            <p className="text-xs mr-5">Rekening Donasi</p>
          </div>
          <div className="flex flex-row items-center pr-10 border border-gray-300 rounded-lg">
            <Image
              src="img/pickup.svg"
              alt="Jemput Donasi"
              className="h-10 w-10 ml-4 mr-2"
              width={80}
              height={80}
            />
            <p className="text-xs mr-5">Jemput Donasi</p>
          </div>
          <div className="flex flex-row items-center pr-10 border border-gray-300 rounded-lg">
            <Image
              src="img/confirmation.svg"
              alt="Konfirmasi Donasi"
              className="h-10 w-10 ml-4 mr-2"
              width={80}
              height={80}
            />
            <p className="text-xs mr-5">Konfirmasi Donasi</p>
          </div>
          <div className="flex flex-row items-center pr-10 border border-gray-300 rounded-lg">
            <Image
              src="img/confirmation.svg"
              alt="Bayar Zakat Online"
              className="h-10 w-10 ml-4 mr-2"
              width={80}
              height={80}
            />
            <p className="text-xs mr-5">Bayar Zakat Online</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto pt-24">
          <h2 className="text-3xl font-bold text-orange-600">
            Transparansi Pengelolaan Dana Umat
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Kami terus berupaya meningkatkan dan menjaga kepercayaan donatur
            Yatim Mandiri dengan transparansi dan akuntabilitas dalam
            pengelolaan dana.
          </p>

          {/* Add additional content here as needed, such as the images below */}
          <div className="mt-8 flex space-x-4">
            <Image
              src="/path-to-image-1.jpg"
              alt="Transparency Image 1"
              className="rounded-lg shadow-lg w-1/2"
              width={100}
              height={100}
            />
            <Image
              src="/path-to-image-2.jpg"
              alt="Transparency Image 2"
              className="rounded-lg shadow-lg w-1/2"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
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
