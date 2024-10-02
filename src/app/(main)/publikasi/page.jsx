import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import {
  ButtonComponent,
  ButtonLinkComponent,
} from "@/components/partials/ButtonComponent";
import { ReportCard } from "@/components/partials/CardComponent";
import HeroComponent from "@/components/sections/HeroComponent";
import MapComponent from "@/components/sections/MapsSection";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";

export default function PublikasiPage() {
  const researchData = [
    {
      author: "Laporan audit keuangan tahun 2022 telah tersedia",
      title: "Audit Keuangan Tahun 2021",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Laporan audit keuangan tahun 2022 telah tersedia",
      title: "Audit Keuangan Tahun 2021",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
  ];

  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent title="Publikasi Yatim Mandiri" url="/img/public.png" />
        <div className="absolute h-24 -bottom-14 left-0 right-0 z-100 p-4 bg-white rounded-lg justify-center mx-4">
          <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse sm:hidden " />
        </div>
      </div>

      <section className="flex flex-col px-5 lg:px-24 mt-3 mb-20">
        <div className="text-center">
          <div className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Right Side - Text Content */}
              <div className="text-justify order-1 lg:order-2">
                <ButtonComponent text="Keuangan" pill />
                <h3 className="text-2xl font-bold mb-4 mt-3">
                  Laporan Audit Keuangan Yatim Mandiri
                </h3>
                <p className="text-gray-700 mb-4">
                  Yatim Mandiri rutin melakukan AUDIT keuangan dalam upaya
                  menjaga kepercayaan dan bentuk tanggung jawab lembaga terhadap
                  donatur.
                </p>
                <p className="text-gray-700">
                  Dalam Audit terakhir, Yatim Mandiri berhasil mendapat WTP
                  (Wajar Tanpa Pengecualian) dan sudah 9x berturut-turut
                  mendapatkan predikat tersebut.
                </p>
              </div>

              {/* Image */}
              <Image
                src="/img/public.png" // Replace with your image path
                alt="Laznas Yatim Mandiri"
                width={500}
                height={500}
                className="rounded-lg w-full h-full order-2 lg:order-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {researchData.map((item, index) => (
              <ReportCard
                key={index}
                imgUrl={item.imageUrl}
                title={item.title}
                subTitle={item.author}
                imgH={280}
                imgW={120}
              />
            ))}
          </div>
          <ButtonLinkComponent
            variant="outline"
            text="Lihat Semua"
            className="my-12"
          />

          {/*  */}
          <div className="mx-auto py-12 px-4">
            {/* Two Sections in a grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Opini Dewan Pengawas Syariah Section */}
              <div className="flex flex-col lg:text-justify sm:text-center order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Opini Dewan Pengawas Syariah
                </h2>
                <p className="text-gray-700 mb-6">
                  Yatim Mandiri menyadari pentingnya penerapan hukum-hukum Islam
                  dalam segala bentuk kegiatan organisasi, oleh karena itu dalam
                  rangka menjaga agar{" "}
                  <span className="font-semibold">Yatim Mandiri</span> sesuai
                  dengan nilai-nilai Islam, maka dalam struktur lembaga terdapat
                  Dewan Pengawas Syariah sebagai pengawas dalam berjalannya
                  kegiatan di
                  <span className="font-semibold"> Yatim Mandiri</span>.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4">
                  <ButtonLinkComponent
                    text="Opini Syariah"
                    className="w-full sm:w-fit"
                  />
                  <ButtonLinkComponent
                    text="Panduan Ziswaf"
                    variant="outline"
                    className="w-full sm:w-fit"
                  />
                </div>
              </div>
              {/* Empty image placeholder for future content */}
              <div className="bg-gray-200 rounded-lg h-64 order-1 lg:order-2"></div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Placeholder image */}
              <div className="bg-gray-200 rounded-lg h-64"></div>

              {/* Hasil & Pengajuan Penelitian Section */}
              <div className="flex flex-col lg:text-justify sm:text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Hasil & Pengajuan Penelitian
                </h2>
                <p className="text-gray-700 mb-6">
                  Yatim Mandiri membuka kesempatan seluas-luasnya untuk para
                  mahasiswa dan lainnya yang ingin mengajukan penelitian. Sudah
                  banyak mahasiswa dan instansi lainnya yang bekerjasama dengan
                  kami dan menghasilkan hasil penelitian yang beragam.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4">
                  <ButtonLinkComponent
                    text="Cek Hasil Penelitian"
                    className="w-full sm:w-fit"
                  />
                  <ButtonLinkComponent
                    text="Ajukan Penelitian"
                    variant="outline"
                    className="w-full sm:w-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="flex flex-col px-5 lg:px-24">
          <div className="flex lg:flex-row justify-between flex-col items-center my-10">
            <div>
              <p className="text-lg font-medium text-gray-700">
                Donasimu sudah sampai ke mereka
              </p>
              <h1 className="text-3xl font-bold text-gray-900">
                Tersebar di 51 Kota di Indonesia
              </h1>
            </div>
            <ButtonLinkComponent
              text="Lihat Laporan"
              variant="outline"
              className="mt-5 lg:mt-0"
            />
          </div>
          {/* <MapComponent /> */}
          <div className="bg-white p-5 lg:p-10 my-20 rounded-3xl text-center">
            <div className="flex mb-8">
              <div className="acc-one"></div>
              <h2 className="text-2xl font-semibold">
                Hasil Penelitian Publik
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {researchData.map((item, index) => (
                <ReportCard
                  key={index}
                  imgUrl={item.imageUrl}
                  title={item.title}
                  subTitle={item.author}
                  imgH={280}
                  imgW={120}
                />
              ))}
            </div>
            <ButtonLinkComponent
              variant="outline"
              text="Lihat Semua"
              className="my-12"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
