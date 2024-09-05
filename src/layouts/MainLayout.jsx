import { MainFooter } from '@/components/layouts/MainFooter';
import { MainHeader } from '@/components/layouts/MainHeader';
import { AppProvider } from '@/hooks/useApp';

export const MainLayout = ({ context, children }) => {
  return (
    <AppProvider context={context}>
      <div className='flex flex-col min-h-screen'>
        <MainHeader />
        <main className='flex-1'>{children}</main>
        <MainFooter />
      </div>
    </AppProvider>
  );
};
