import { InspirasiHikmahSection } from '@/components/sections/InspirasiHikmahSection';
import { KabarTerbaruSection } from '@/components/sections/KabarTerbaruSection';
import { MainLayout } from '@/layouts/MainLayout';
import { GetDataBlogs, GetDataNews } from '@/services/AppService';

export default async function HomePage() {
  const [news, blog] = await Promise.all([
    GetDataNews({ page: 1, perPage: 5 }),
    GetDataBlogs({ page: 1, perPage: 3 }),
  ]);

  return (
    <MainLayout>
      <div className='flex flex-col'>
        <KabarTerbaruSection data={news?.data} />
        <InspirasiHikmahSection data={blog?.data} />
      </div>
    </MainLayout>
  );
}
