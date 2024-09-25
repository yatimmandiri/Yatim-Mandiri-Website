"use client";

import HeroComponent from "@/components/sections/HeroComponent";
import { ButtonLinkComponent } from "@/components/partials/ButtonComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import { useState } from "react";
import {
  MagazineCard,
  NewsCard,
  SmallCard,
} from "@/components/partials/CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";

export default function MediaPage() {
  const news = [
    {
      release: "28 February 2023",
      author: "Ika Faztin",
      label: "Tim Ambulance Yatim Mandiri Bantu Korban Tragedi Kanjuruhan",
      href: "#",
    },
    {
      release: "28 February 2023",
      author: "Ika Faztin",
      label: "Tim Ambulance Yatim Mandiri Bantu Korban Tragedi Kanjuruhan",
      href: "#",
    },
    {
      release: "28 February 2023",
      author: "Ika Faztin",
      label: "Tim Ambulance Yatim Mandiri Bantu Korban Tragedi Kanjuruhan",
      href: "#",
    },
    {
      release: "28 February 2023",
      author: "Ika Faztin",
      label: "Tim Ambulance Yatim Mandiri Bantu Korban Tragedi Kanjuruhan",
      href: "#",
    },
  ];

  const [lastVisibleSlide, setLastVisibleSlide] = useState(1);

  const handleSlideChange = (swiper) => {
    const slidesPerView = swiper.params.slidesPerView;
    const activeIndex = swiper.activeIndex;

    // Calculate the last visible slide
    const newLastVisibleSlide = Math.min(
      activeIndex + slidesPerView,
      news.length
    );
    setLastVisibleSlide(newLastVisibleSlide);
  };

  const handleSwiperInit = (swiper) => {
    // Dynamically set lastVisibleSlide based on initial slidesPerView
    const slidesPerView = swiper.params.slidesPerView;
    setLastVisibleSlide(slidesPerView); // Set to the number of slides visible initially
  };

  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent title="Media Yatim Mandiri" />
        <div className="absolute h-24 -bottom-14 left-0 right-0 z-100 p-4 bg-white rounded-lg justify-center mx-4">
          <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse sm:hidden " />
        </div>
      </div>
      <div className="w-full bg-white">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 md:px-14 max-lg:pt-8">
          <div className="col-span-2 relative">
            <h2 className="text-xl font-bold text-gray-800">YM NEWS</h2>
            <div className="max-w-full mt-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src="/img/child.jpg"
                    alt="Kalkulator Zakat"
                    className="w-full h-full rounded-lg"
                    width={300}
                    height={200}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4">
                    <p className="text-sm">
                      Pembukaan Sanggar Belajar Gratis untuk Yatim dan Dhuafa
                      Kediri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 relative">
            <div className="flex">
              <div className="acc-one"></div>
              <h2 className="text-xl font-bold text-orange-600">
                PROGRAM DARURAT
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
              <Image
                src="/img/child.jpg"
                alt="Kalkulator Zakat"
                className="w-full h-full rounded-lg"
                width={300}
                height={200}
              />
            </div>
          </div>
        </section>
      </div>

      {/* News */}
      <div className="bg-gray-100 pb-20">
        <section className="mt-8 px-3 lg:px-10">
          <section className="flex justify-between items-center mb-4 px-5 pt-5">
            <div className="flex">
              <div className="acc-one"></div>
              <h2 className="text-lg font-semibold">BERITA TERBARU</h2>
            </div>
            <h4 className="text-base underline text-blue-600">Lihat Lainnya</h4>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 pb-5">
            {/* News Item 1 */}
            {news.map((data, i) => (
              <NewsCard
                key={i}
                src="/img/child.jpg"
                href={data.href}
                tagged={
                  <>
                    <p className="text-xs text-gray-600">
                      By {data.author} • {data.release}
                    </p>
                    <h3 className="text-sm font-semibold">{data.label}</h3>
                  </>
                }
              />
            ))}
          </div>
        </section>

        {/* Inspiration */}
        <section className="mt-8 px-8 lg:px-14">
          <div className="flex">
            <div className="acc-one mb-4"></div>
            <h2 className="text-lg font-semibold mb-4">INSPIRASI DAN HIKMAH</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Article 1 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row">
              <Image
                src="/img/child.jpg"
                alt="Zakat Article 1"
                width={600}
                height={400}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-2">
                  <a href="#" className="mr-2">
                    Blog
                  </a>
                  <a href="#" className="mr-2">
                    Inspirasi
                  </a>
                  <a href="#">Zakat</a>
                </div>
                <h3 className="text-md font-semibold">
                  Pengertian Zakat: Syarat, Hukum, Rukun, dan Macam-macamnya
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie...
                </p>
                <div className="text-sm text-gray-600 mt-4">
                  <span>28 Februari 2023</span> • <span>09:20 WIB</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row">
              <Image
                src="/img/child.jpg"
                alt="Zakat Article 2"
                width={600}
                height={400}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-2">
                  <a href="#" className="mr-2">
                    Blog
                  </a>
                  <a href="#" className="mr-2">
                    Inspirasi
                  </a>
                  <a href="#">Zakat</a>
                </div>
                <h3 className="text-md font-semibold">
                  Pengertian Zakat: Syarat, Hukum, Rukun, dan Macam-macamnya
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie...
                </p>
                <div className="text-sm text-gray-600 mt-4">
                  <span>28 Februari 2023</span> • <span>09:20 WIB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="text-blue-600 font-semibold">
              Kunjungi Blog
            </a>
          </div>
        </section>
      </div>

      <div className="bg-white">
        {/* YM Majalah Section */}
        <section className="bg-white px-10 lg:px-24 py-24">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
            {/* Majalah Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/img/child.jpg" // Replace with your actual image path
                alt="YM Majalah Logo"
                width={100}
                height={100}
                className="w-24 h-24 md:w-32 md:h-32" // Adjust size for responsiveness
              />
            </div>

            <div className="flex flex-col">
              {/* Majalah Info Text */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold mb-2">YM Majalah</h2>
                <p className="text-gray-700">
                  Install aplikasi Majalah Yatim Mandiri di gadget kamu
                  sekarang. Dapatkan kabar dan informasi terbaru di dalamnya
                  lengkap dengan laporan penyaluran.
                </p>
              </div>

              {/* Download Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://play.google.com/store/apps" // Replace with your actual Play Store link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 md:mt-0"
                >
                  <Image
                    src="/img/child.jpg" // Replace with actual Google Play image
                    alt="Download on Google Play"
                    width={80}
                    height={30}
                    className="w-20 md:w-20 pt-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Majalah YM Section */}
        <section className="px-8 py-10 lg:px-10">
          <div className="flex justify-between mb-4 pt-5">
            <div className="flex">
              <div className="acc-one mb-4"></div>
              <h2 className="text-lg font-semibold mb-4">MAJALAH YM</h2>
            </div>
            {/* Pagination Section */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>
                {lastVisibleSlide} dari {news.length}
              </span>
              <button className="swiper-button-pre p-2 rounded-lg border border-gray-300 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="swiper-button-nex p-2 rounded-lg border border-gray-300 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            navigation={{
              nextEl: ".swiper-button-nex",
              prevEl: ".swiper-button-pre",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            onInit={handleSwiperInit}
          >
            {news.map((i, data) => {
              return (
                <>
                  <SwiperSlide key={i}>
                    <MagazineCard />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </section>

        {/* Yatim Mandiri TV Section */}
        <section className="px-8 lg:px-10 py-10">
          <div className="flex">
            <div className="acc-one mb-4"></div>
            <h2 className="text-lg font-semibold mb-4">YATIM MANDIRI TV</h2>
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
                    <SmallCard />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </section>
      </div>
    </MainLayout>
  );
}
