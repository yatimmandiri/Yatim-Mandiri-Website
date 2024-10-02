import { ButtonLinkComponent } from '@/components/partials/ButtonComponent';
import Image from 'next/image';
import Link from 'next/link';

export const MainHeader = () => {
  const menus = [
    {
      label: 'Tentang Kami',
      href: '#',
    },
    {
      label: 'Layanan',
      href: '#',
    },
    {
      label: 'Program',
      href: '#',
    },
    {
      label: 'Publikasi',
      href: '#',
    },
    {
      label: 'Partnership',
      href: '#',
    },
    {
      label: 'Media',
      href: '#',
    },
  ];

  return (
    <header className='flex flex-row justify-between items-center p-4 px-12 shadow'>
      <Image src='img/ym-logo.svg' alt='Logo' width={40} height={40} />
      <ul className='hidden md:flex flex-row space-x-7 items-center'>
        {menus.map((menu, i) => (
          <Link
            key={i}
            className='font-semibold text-xs hover:text-baseColor-600'
            href={menu.href}
          >
            {menu.label}
          </Link>
        ))}
        <ButtonLinkComponent text='Donasi' className='px-6 md:px-12' />
      </ul>
    </header>
  );
};
