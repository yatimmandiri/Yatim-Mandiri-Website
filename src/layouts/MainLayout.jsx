import { MainFooter } from '@/components/layouts/MainFooter';
import { MainHeader } from '@/components/layouts/MainHeader';
import { AppProvider } from '@/hooks/useApp';

export const MainLayout = ({ context, children }) => {
  return (
    <AppProvider context={context}>
      <main className='flex flex-col min-h-screen'>
        <MainHeader />
        <div className='flex flex-col flex-1'>{children}</div>
        <MainFooter />
      </main>
    </AppProvider>
  );
};
