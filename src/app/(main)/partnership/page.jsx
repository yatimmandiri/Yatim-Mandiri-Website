"use client";

import { SmallCard } from "@/components/partials/CardComponent";
import { HeroComponentOr } from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

  const logos = Array.from({ length: 10 }, (_, i) => `/img/child.jpg`);

  return (
    <MainLayout>
      <HeroComponentOr />
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
        <div className="items-center">
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
                  className="w-24 h-24 sm:w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
                    <div className="bg-orange-500 p-4 rounded-lg">
                      <Image
                        src={logo}
                        alt={logo}
                        width={300}
                        height={200}
                        className="w-24 h-24"
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

      <section className="news-partnership">
        <div className="bg-white">
          {/* Yatim Mandiri TV Section */}
          <section className="px-5 lg:px-24 py-10 items-center">
            <div className="flex-col">
              <h2 className="text-lg font-semibold mb-4 text-center">
                YATIM MANDIRI TV
              </h2>
              <p className="text-md text-center mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                nesciunt. Nobis labore velit id hic quisquam vero ut officiis,
                exercitationem ad et dolorem? Accusamus suscipit optio atque
                reiciendis voluptatem necessitatibus.
              </p>
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
      </section>
    </MainLayout>
  );
}
