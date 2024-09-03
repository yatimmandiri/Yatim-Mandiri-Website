import { MainFooter } from '@/components/layouts/MainFooter';
import { AppProvider } from '@/hooks/useApp';

export const MainLayout = ({ context, children }) => {
  return (
    <AppProvider context={context}>
      <div>
        <main>{children}</main>
        <MainFooter />
      </div>
    </AppProvider>
  );
};
