"use client";

import { SmallCard } from "@/components/partials/CardComponent";
import { HeroComponentOr } from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/navigation";

export default function PartnershipPage() {
  const cards = [
    {
      title: "CSR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/img/child.jpg", // Replace with actual path
    },
    {
      title: "Komunitas/Lembaga Sosial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/img/child.jpg", // Replace with actual path
    },
    {
      title: "Individu/Perseorangan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/img/child.jpg", // Replace with actual path
    },
  ];

  const logos = Array.from({ length: 10 }, (_, i) => `/img/google-cloud.svg`);

  return (
    <MainLayout>
      <HeroComponentOr
        src="/img/partner.png"
        title="Jalin Kemitraan dengan Yatim Mandiri. Bersama, Wujudkan Dampak Positif
          untuk Yatim dan Dhuafa di Indonesia"
        subTitle="Bergabunglah dalam kemitraan dengan Yatim Mandiri untuk bersama-sama
          memperluas dampak positif bagi yatim dan dhuafa di seluruh Indonesia"
        
      />
      <section className="my-12 px-5 lg:px-24">
        <h2 className="text-center text-2xl font-bold mb-4">
          30 Tahun Yatim Mandiri dan 100+ Partner yang Pernah Menjalin Kemitraan
        </h2>
        <p className="text-center mb-8">
          Selama 30 tahun, Yatim Mandiri telah berdedikasi untuk memberdayakan
          anak-anak yatim dan dhuafa di seluruh Indonesia. Bersama lebih dari
          100 mitra yang pernah menjalin kemitraan dengan kami, kami telah
          berhasil membawa perubahan positif dan meningkatkan kesejahteraan
          mereka yang membutuhkan.
        </p>

        {/* Container for logos */}
        <div className="flex-col">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={logo}
                  alt={logo}
                  width={300}
                  height={200}
                  className="h-24 sm:w-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={logo}
                  alt={logo}
                  width={300}
                  height={200}
                  className="h-24 sm:w-full w-full my-5"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={logo}
                  alt={logo}
                  width={300}
                  height={200}
                  className="h-24 sm:w-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-center text-2xl font-bold mb-8">
          Pilihan Jenis Kemitraan
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 hover:text-white`}
            >
              {/* Image Section */}
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />

              {/* Text Section */}
              <div className="p-4 text-center">
                <h4 className="text-xl font-bold mt-2">{card.title}</h4>
                <p className="mt-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gray-100 text-center py-12 px-5 lg:px-24">
          <h2 className="text-2xl font-bold mb-6">
            Kenapa Harus Yatim Mandiri
          </h2>
          <p className="mb-10 text-gray-600 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            {[1, 2, 3, 4, 5, 6].map((i, data) => {
              return (
                <div key={i} className="p-6 text-start">
                  <div className="flex justify-start mb-4">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <Image
                        src="/img/badge.svg"
                        alt="{logo}"
                        width={300}
                        height={200}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Berpengalaman</h3>
                  <p className="text-gray-500">
                    Yatim mandiri sudah berpengalaman 30+ tahun lebih untuk
                    mengelola dana CSR dari berbagai perusahaan di Indonesia.
                  </p>
                </div>
              );
            })}

            {/* Add other cards similarly */}
          </div>
        </div>
      </section>

      <section className="news-partnership">
        <div className="bg-white relative">
          {/* News Partnership */}
          <Image
            src="/img/spiral.png"
            alt="Yatim Mandiri TV Thumbnail"
            width={300}
            height={170}
            className="absolute"
          />
          <section className="py-10 items-center sticky">
            <div className="flex-col px-5 lg:px-24">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Berita Kemitraan
              </h2>
              <p className="text-md text-center mb-10">
                Beragam manfaat dari hasil kolaborasi memberi senyuman yang
                berarti untuk negeri. Yuk jadi salah satunya.
              </p>
            </div>
            <div className="flex text-center content-center items-center px-5 lg:px-8">
              <button className="swiper-button-pre bg-white p-4 rounded-full border border-gray-300 text-black mr-6">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
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
                navigation={{
                  nextEl: ".swiper-button-nex",
                  prevEl: ".swiper-button-pre",
                }}
                modules={[Navigation]}
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
              <button className="swiper-button-nex bg-white p-4 rounded-full border border-gray-300 text-black ml-6">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </section>
    </MainLayout>
  );
}
