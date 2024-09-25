'use client';

import { ButtonIconComponent } from '@/components/partials/ButtonComponent';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export const SubscribeSocialSection = () => {
  return (
    <div className='text-sm flex flex-col space-y-3'>
      <span className='font-semibold'>Temukan & Ikuti Kami</span>
      <div className='flex space-x-3'>
        <ButtonIconComponent
          className='border-white border-2'
          icons={BsFacebook}
        />
        <ButtonIconComponent
          className='border-white border-2'
          icons={BsTwitter}
        />
        <ButtonIconComponent
          className='border-white border-2'
          icons={BsInstagram}
        />
        <ButtonIconComponent
          className='border-white border-2'
          icons={BsYoutube}
        />
      </div>
    </div>
  );
};
