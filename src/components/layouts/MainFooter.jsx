import { SubscribeEmailSection } from '@/components/sections/SubscribeEmailSection';
import { SubscribeSocialSection } from '@/components/sections/SubscribeSocialSection';
import { YatimMandiriGroupSection } from '@/components/sections/YatimMandiriGroupSection';
import Image from 'next/image';
import Link from 'next/link';

export const MainFooter = () => {
  return (
    <footer className='bg-orange-500'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 container py-8 text-white'>
        <div className='text-sm flex flex-col space-y-6'>
          <Image
            src={'/assets/images/logo_white.png'}
            alt='logo'
            width={80}
            height={80}
            priority={true}
            className='w-24 h-16'
          />
          <p className='flex flex-col space-y-1'>
            <span className='font-bold'>Graha Yatim Mandiri</span>
            <span className='w-44'>
              Jl. Jambangan No.135-137 Surabaya, 60232
            </span>
          </p>
          <p className='flex flex-col space-y-1'>
            <span>Telp. (031) 8283 488</span>
            <span>WA center 0811 1343 577</span>
            <span>E-mail: sahabat@yatimmandiri.org</span>
          </p>
        </div>
        <div className='text-sm flex flex-col space-y-3'>
          <span className='font-bold text-sm'>Program</span>
          <ul className='list-disc list-inside flex flex-col space-y-1 text-sm'>
            <Link href='/'>Pendidikan</Link>
            <Link href='/'>Pemberdayaan</Link>
            <Link href='/'>Kemanusiaan</Link>
            <Link href='/'>Kesehatan</Link>
            <Link href='/'>Dakwah</Link>
            <Link href='/'>Super Gizi Qurban (SGQ)</Link>
            <Link href='/'>Zakat</Link>
            <Link href='/'>Wakaf</Link>
          </ul>
        </div>
        <div className='text-sm flex flex-col space-y-3'>
          <span className='font-bold text-sm'>Lebih Dekat</span>
          <ul className='list-disc list-inside flex flex-col space-y-1 text-sm'>
            <Link href='/'>Tentang Kami</Link>
            <Link href='/'>Hubungi Kami</Link>
            <Link href='/'>Kebijakan Privasi</Link>
            <Link href='/'>Syarat & Ketentuan</Link>
            <Link href='/'>Karir</Link>
            <Link href='/'>FAQ</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>Berita Kemanusiaan</Link>
          </ul>
        </div>
        <div className='flex flex-col space-y-4'>
          <SubscribeEmailSection />
          <SubscribeSocialSection />
          <YatimMandiriGroupSection />
        </div>
      </div>
      <div className='text-center text-xs p-3 bg-white shadow border-t'>
        Copright @ 2024 <b>Yayasan Yatim Mandiri</b>
      </div>
    </footer>
  );
};
