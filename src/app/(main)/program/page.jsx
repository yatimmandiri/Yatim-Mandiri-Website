import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import { ButtonLinkComponent } from "@/components/partials/ButtonComponent";
import HeroComponent from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";

export default function ProgramPage() {
  const programs = [
    {
      title: "Program Pendidikan",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
    {
      title: "Program Pemberdayaan",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
    {
      title: "Program Kemanusiaan",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
    {
      title: "Program Kesehatan",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
    {
      title: "Program Dakwah",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
    {
      title: "Program Super Gizi Qurban",
      description:
        "Yatim Mandiri adalah Lembaga Amil Zakat Nasional (LAZNAS) milik masyarakat Indonesia yang berkhidmat memgangkat harkat sosial",
      link: "#",
    },
  ];

  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent
          title="Program Yatim Mandiri"
          topSubTitle="Yatim Mandiri menghadirkan ragam program guna memandirikan anak-anak yatim dan dhuafa"
        />
        <div className="absolute h-24 -bottom-14 left-0 right-0 z-100 p-4 bg-white rounded-lg justify-center mx-4">
          <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse sm:hidden " />
        </div>
      </div>

      <section className="sticky">
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between mb-8 mx-3 lg:mx-0">
            <div className="flex">
              <div className="acc-one"></div>
              <h2 className="lg:text-2xl text-xl font-semibold">
                CORE PROGRAM
              </h2>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Program Lainnya
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-100 border rounded-lg shadow-sm overflow-hidden text-center"
              >
                <Image
                  src="/img/child.jpg"
                  alt="Zakat Article 1"
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 text-xs mb-6">
                    {program.description}
                  </p>

                  <ButtonLinkComponent
                    href={program.link}
                    text="Kunjungi Program"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay now */}
      <section className="px-5 lg:px-14 py-20">
        <div className="flex lg:flex-row flex-col items-center lg:mx-60">
          <Image
            src="/img/submission.png"
            alt="h"
            width={600}
            height={400}
            className="w-70 h-80 lg:my-20 my-10 lg:px-0 px-10"
          />
          <div className="flex flex-col lg:ml-10">
            <h2 className="text-3xl text-black font-bold mb-2">
              Bayar Zakat di Yatim Mandiri
            </h2>
            <p className="text-black text-xs text-justify mb-5">
              Bayar zakat makin mudah dan praktis di Yatim Mandiri. Nikmati
              kemudahan dan kecepatan hitung dan bayar zakat sekarang juga.
            </p>
            <p className="text-black text-xs text-justify">
              Sahabat tidak perlu ke kantor, cukup buka smartphonmu, hitung dan
              bayar di aplikasi donasi Yatim Mandiri.
            </p>

            <div className="flex flex-row gap-2">
              <ButtonLinkComponent
                text="Hitung Zakat"
                className="mt-6 w-full lg:w-fit"
                variant="outline"
              />
              <ButtonLinkComponent
                text="Kunjungi Program"
                className="bg-orange-500 border border-white mt-6 w-full lg:w-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="flex flex-col px-5 lg:px-24">
          <div className="flex lg:flex-row justify-between flex-col items-center my-10">
            <div className="flex">
              <div className="acc-one"></div>
              <h2 className="lg:text-2xl text-xl font-semibold">
                Sebaran Peta Penyaluran
              </h2>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
