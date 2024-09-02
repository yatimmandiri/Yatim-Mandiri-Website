import { AppProvider } from '@/hooks/useApp';

export const MainLayout = ({ context, children }) => {
  return (
    <AppProvider context={context}>
      <main>{children}</main>
    </AppProvider>
  );
};
