import HeroComponent from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";

export default function KontakKamiPage() {
  const data = {
    headquarters: {
      title: "Pusat",
      sections: [
        {
          name: "Pusat",
          phone: "(031) 8283 488",
          mobile: "+62811 1343 577",
          email: "sahabat@yatimmandiri.org",
          address:
            "Graha Yatim Mandiri, Jl. Jambangan No.135-137 Surabaya, 60232",
        },
        {
          name: "Partnership",
          phone: "(031) 8283 488",
          mobile: "+62811 1343 577",
          email: "partnership@yatimmandiri.org",
          address:
            "Graha Yatim Mandiri, Jl. Jambangan No.135-137 Surabaya, 60232",
        },
        {
          name: "Event",
          phone: "(031) 8283 488",
          mobile: "+62811 1343 577",
          email: "event@yatimmandiri.org",
          address:
            "Graha Yatim Mandiri, Jl. Jambangan No.135-137 Surabaya, 60232",
        },
        {
          name: "Surabaya",
          phone: "0821-3200-4007",
          address:
            "Jl. Imam Bonjol No.35, Tukangkayu, Kec. Banyuwangi, Jawa Timur 68411",
        },
      ],
    },
    regions: [
      {
        title: "Regional Office 1",
        contact: "0815-5379-8317",
        address: "Perum Bugul Permai, Jl. Durian Raya A2",
        branches: [
          {
            name: "Banyuwangi",
            contact: "628645654434",
            address: "Jl. Imam Bonjol No.35, Tukangkayu, Jawa Timur 68411",
          },
          {
            name: "Blitar",
            contact: "628645654434",
            address: "Jl. Bali No.264, Karangtengah, Blitar, Jawa Timur 66137",
          },
          {
            name: "Batu",
            contact: "628645654434",
            address:
              "Jl. Samadi No.5, Pesanggrahan, Kec. Batu, Jawa Timur 65317",
          },
          // Add more branches here
        ],
      },
      {
        title: "Regional Office 2",
        contact: "0815-5379-8318",
        address: "Perum Bugul Permai, Jl. Durian Raya A2",
        branches: [
          {
            name: "Jember",
            contact: "628645654434",
            address: "Jl. Kahuripan Bl.1 R3, Perum Bukit Permai, Jember",
          },
          {
            name: "Kediri",
            contact: "628645654434",
            address: "Perum. Candra Kirana Blok T No.4a, Mojotoroto, Kediri",
          },
          {
            name: "Malang",
            contact: "628645654434",
            address:
              "Grand Cahd Mendut Kav 17 RT 3 RW 10, Lowokwaru, Kota Malang",
          },
          // Add more branches here
        ],
      },
      {
        title: "Regional Office 3",
        contact: "0815-5379-8319",
        address: "Perum Bugul Permai, Jl. Durian Raya A2",
        branches: [
          {
            name: "Lumajang",
            contact: "628645654434",
            address: "Kapten Suwandak No.42, Lumajang",
          },

          {
            name: "Probolinggo",
            contact: "628645654434",
            address: "Jalan Gubernur Suryo III No.5A, Probolinggo",
          },
          {
            name: "Tulungagung",
            contact: "628645654434",
            address: "Jl. Pahlawan II No.5, Kedungwaru, Tulungagung",
          },
          // Add more branches here
        ],
      },
      {
        title: "Regional Office 4",
        contact: "0815-5379-8320",
        address: "Perum Bugul Permai, Jl. Durian Raya A2",
        branches: [
          {
            name: "Pasuruan",
            contact: "628645654434",
            address: "Perum Bugul Permai, Jl. Durian Raya A2 No.26, Pasuruan",
          },
          {
            name: "Sidoarjo",
            contact: "628645654434",
            address: "Jl. Serai No.1, Sari Rogo, Sidoarjo",
          },
          {
            name: "Kepanjen",
            contact: "628645654434",
            address: "Jl. Diponegoro No.44, Kepanjen, Malang",
          },
          // Add more branches here
        ],
      },
    ],
  };

  return (
    <MainLayout>
      <HeroComponent
        blankMode
        title="Kontak Kami"
        subTitle="Punya pertanyaan atau mau tau lebih jauh tentang program dan layanan Yatim Mandiri?
        Hubungi kami sekarang juga."
      />
      <section className="bg-gray-100">
        <div className="pt-14">
          {/* Headquarters Section */}
          <div className="mb-8">
            <h4 className="text-center text-lg font-semibold">
              Kantor Layanan
            </h4>
            <h2 className="text-center text-orange-600 text-3xl font-bold">
              {data.headquarters.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 bg-[#FBEDE9] px-5 lg:px-10">
              {data.headquarters.sections.map((section, index) => (
                <div key={index} className="p-4 bg-[#FBEDE9] w-full">
                  <h3 className="text-orange-600 text-lg font-semibold">
                    {section.name}
                  </h3>
                  <p className="mt-2">
                    {section.phone}
                    <br />
                    {section.mobile}
                    <br />
                    {section.email}
                    <br />
                    <strong>{section.address}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Offices Section */}
          {data.regions.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-8">
              <h4 className="text-center text-lg font-semibold">
                Kantor Layanan
              </h4>
              <h2 className="text-center text-orange-600 text-3xl font-bold mb-2">
                {region.title}
              </h2>
              <p className="text-center text-gray-500">{region.contact}</p>
              <p className="text-center text-black font-semibold">{region.address}</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 bg-[#FBEDE9] px-5 lg:px-10">
                {region.branches.map((branch, branchIndex) => (
                  <div key={branchIndex} className="p-4 orange-100">
                    <h3 className="text-orange-600 text-lg font-semibold">
                      {branch.name}
                    </h3>
                    <p className="mt-2">{branch.contact}</p>
                    <p className="mt-2 font-semibold">{branch.address}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
