import { InspirasiHikmahSection } from '@/components/sections/InspirasiHikmahSection';
import { KabarTerbaruSection } from '@/components/sections/KabarTerbaruSection';
import { KontribusiSection } from '@/components/sections/KontribusiSection';
import { ProgramKamiSection } from '@/components/sections/ProgramKamiSection';
import { MainLayout } from '@/layouts/MainLayout';
import { GetDataBlogs, GetDataNews } from '@/services/AppService';

export default async function HomePage() {
  const [news, blog] = await Promise.all([
    GetDataNews({ page: 1, perPage: 5 }),
    GetDataBlogs({ page: 1, perPage: 3 }),
  ]);

  return (
    <MainLayout>
      <div className='flex flex-col space-y-4'>
        <ProgramKamiSection />
        <KabarTerbaruSection data={news?.data} />
        <KontribusiSection />
        <InspirasiHikmahSection data={blog?.data} />
      </div>
    </MainLayout>
  );
}
