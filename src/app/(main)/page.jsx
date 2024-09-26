import { KabarTerbaruSection } from '@/components/sections/KabarTerbaruSection';
import { MainLayout } from '@/layouts/MainLayout';
import { GetDataNews } from '@/services/AppService';

export default async function HomePage() {
  const [news] = await Promise.all([GetDataNews({ page: 1, perPage: 5 })]);

  return (
    <MainLayout>
      <div className='flex flex-col'>
        <KabarTerbaruSection data={news?.data} />
      </div>
    </MainLayout>
  );
}
