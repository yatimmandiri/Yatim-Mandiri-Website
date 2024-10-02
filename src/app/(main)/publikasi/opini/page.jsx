"use client";

import { ButtonLinkComponent } from "@/components/partials/ButtonComponent";
import { ReportCard, SmallCard } from "@/components/partials/CardComponent";
import HeroComponent from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function OpiniPage() {
  const [profiles] = useState([
    {
      name: "KH. Ma’ruf Khozin",
      role: "Cek Profile DPS",
      imageUrl: "/img/person.png",
    },
    {
      name: "Drs. Agustianto, M.A.",
      role: "Cek Profile DPS",
      imageUrl: "/img/person.png",
    },
    {
      name: "Dr. Ali Hamdan, M.E.I",
      role: "Cek Profile DPS",
      imageUrl: "/img/person.png",
    },
  ]);

  const researchData = [
    {
      author: "Laporan audit keuangan tahun 2022 telah tersedia",
      title:
        "Opini hanya bisa dilihat oleh pihak tertentu. Ajukan akses untuk tahu lebih lengkap.",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Laporan audit keuangan tahun 2022 telah tersedia",
      title:
        "Opini hanya bisa dilihat oleh pihak tertentu. Ajukan akses untuk tahu lebih lengkap.",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
  ];

  const categories = [
    "Buku Panduan",
    "Fatwa DSN-MUI",
    "Komisi Fatwa MUI",
    "Regulasi & Peraturan Wakaf",
    "Regulasi & Peraturan Zakat",
  ];

  const [activeTab, setActiveTab] = useState("Buku Panduan");

  const booksData = {
    "Buku Panduan": [
      { title: "Buku Panduan Zakat", image: "/img/child.jpg" },
      { title: "Buku Panduan 1", image: "/img/child.jpg" },
      { title: "Buku Panduan 2", image: "/img/child.jpg" },
    ],
    "Fatwa DSN-MUI": [
      { title: "Fatwa DSN Book 1", image: "/img/child.jpg" },
      { title: "Fatwa DSN Book 2", image: "/img/child.jpg" },
    ],
    "Komisi Fatwa MUI": [
      { title: "Komisi Fatwa Book 1", image: "/img/child.jpg" },
      { title: "Komisi Fatwa Book 2", image: "/img/child.jpg" },
    ],
    "Regulasi & Peraturan Wakaf": [
      { title: "Regulasi Wakaf Book 1", image: "/img/child.jpg" },
      { title: "Regulasi Wakaf Book 2", image: "/img/child.jpg" },
    ],
    "Regulasi & Peraturan Zakat": [
      { title: "Regulasi Zakat Book 1", image: "/img/child.jpg" },
      { title: "Regulasi Zakat Book 2", image: "/img/child.jpg" },
    ],
  };

  const books = booksData[activeTab] || [];

  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent
          title="Opini Dewan Pengawas Syariah"
          url="/img/public.png"
        />
        <div className="absolute h-fit -bottom-4 left-0 right-0 z-100 p-4 bg-white rounded-xl justify-center"></div>
      </div>
      <section className="mx-auto mt-5 mb-36 lg:px-32 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col lg:text-justify sm:text-center">
            <h2 className="text-3xl font-bold mb-4">
              Tentang Opini Pengawas Syariah
            </h2>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Yatim Mandiri</span> menyadari
              pentingnya penerapan hukum-hukum Islam dalam segala bentuk
              kegiatan organisasi, oleh karena itu dalam rangka menjaga agar
              <span className="font-semibold"> Yatim Mandiri</span> sesuai
              dengan nilai-nilai Islam, maka dalam struktur lembaga terdapat
              Dewan Pengawas Syariah sebagai pengawas dalam berjalannya kegiatan
              <span className="font-semibold"> Yatim Mandiri</span>.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-64"></div>
        </div>
      </section>

      {/* Profile Dewan */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-12 lg:py-28">
          <h2 className="text-3xl font-semibold mb-10">
            Profile Dewan Pengawas Syariah
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative group">
                  {/* Profile Image */}
                  <Image
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-full rounded-t-2xl shadow-lg transition-transform transform"
                    width={400}
                    height={400}
                  />

                  {/* Overlay Button */}
                  {profile.role && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href="/publikasi/opini/KH. Ma’ruf Khozin"
                        className="text-white border border-white py-2 px-4 rounded-lg"
                      >
                        {profile.role}
                      </a>
                    </div>
                  )}

                  {/* Profile Name */}
                </div>
                <div className="bg-orange-500 text-white text-center py-3 rounded-b-2xl font-semibold">
                  {profile.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opini Syariah */}
      <section className="mx-auto lg:px-20 px-5 py-12 text-center">
        <div className="flex mb-5">
          <div className="acc-one"></div>
          <h2 className="text-lg font-semibold">Opini Syariah</h2>
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
              btnTitle="Ajukan Akses"
            />
          ))}
        </div>
        <ButtonLinkComponent
          variant="solid"
          text="Cek Opini Lainnya"
          className="my-12"
        />
      </section>

      {/* Kategori */}
      <section>
        <div className="container mx-auto p-4">
          <div className="lg:flex">
            {/* Tabs Section */}
            <div className="w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`py-2 px-4 rounded-lg border ${
                      activeTab === category
                        ? "bg-orange-200 text-black"
                        : "text-gray-500"
                    } hover:bg-orange-100`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Section */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="bg-white p-1 rounded-lg shadow-lg"
                  >
                    <Image
                      src={book.image}
                      alt={book.title}
                      className="rounded-lg mb-2"
                      width={400}
                      height={400}
                    />
                    <p className="font-semibold text-start">{book.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Ziswaf */}
      <section className="bg-gray-100 px-8 lg:px-10 py-10">
        <div className="flex">
          <div className="acc-one mb-4"></div>
          <h2 className="text-lg font-semibold mb-4">Video Ziswaf</h2>
        </div>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {[1, 2, 3, 4, 5].map((i, data) => {
            return (
              <>
                <SwiperSlide>
                  <SmallCard hidden={false} />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </MainLayout>
  );
}
