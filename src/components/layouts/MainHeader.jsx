import { ButtonLinkComponent } from '@/components/partials/ButtonComponent';
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
    <header className='flex flex-row justify-between items-center p-4 shadow'>
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
    </header>
  );
};
