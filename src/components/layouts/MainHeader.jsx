import { ButtonLinkComponent } from '@/components/partials/ButtonComponent';
import Link from 'next/link';

export const MainHeader = () => {
  const menus = [
    {
      label: 'Tentang Kami',
      href: '/tentang-kami',
    },
    {
      label: 'Layanan',
      href: '/layanan',
    },
    {
      label: 'Program',
      href: '/program',
    },
    {
      label: 'Publikasi',
      href: '/publikasi',
    },
    {
      label: 'Partnership',
      href: '/partnership',
    },
    {
      label: 'Media',
      href: '/media',
    },
  ];

  return (
    <header className='bg-white shadow'>
      <nav className='container flex flex-row justify-between items-center p-4'>
        <span>Logo</span>
        <ul className='hidden md:flex flex-row space-x-4 items-center'>
          {menus.map((menu, i) => (
            <Link key={i} className='font-semibold text-xs' href={menu.href}>
              {menu.label}
            </Link>
          ))}
          <ButtonLinkComponent
            text='Donasi'
            className='px-6 md:px-12'
            variant='outline'
          />
        </ul>
      </nav>
    </header>
  );
};

export const NavigationMobile = () => {
  return (
    <ul className='fixed bottom-0 left-0 right-0 md:hidden grid grid-cols-5 gap-4 text-center bg-blue-500 p-4 w-full inset-x-0'>
      <Link className='font-semibold text-xs' href={'#'}>
        Menu
      </Link>
      <Link className='font-semibold text-xs' href={'#'}>
        Menu
      </Link>
      <Link className='font-semibold text-xs' href={'#'}>
        Menu
      </Link>
      <Link className='font-semibold text-xs' href={'#'}>
        Menu
      </Link>
      <Link className='font-semibold text-xs' href={'#'}>
        Menu
      </Link>
    </ul>
  );
};
