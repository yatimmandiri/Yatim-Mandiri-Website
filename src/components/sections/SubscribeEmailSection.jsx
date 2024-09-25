'use client';

import { ButtonComponent } from '@/components/partials/ButtonComponent';
import { InputTextComponent } from '@/components/partials/InputComponent';

export const SubscribeEmailSection = () => {
  return (
    <div className='text-sm flex flex-col space-y-3'>
      <span className='font-semibold'>Langganan News Letter</span>
      <InputTextComponent placeholder='Email Address' />
      <ButtonComponent text='Langganan' color='primary' fullWidth />
    </div>
  );
};
