"use client";

import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import { MainLayout } from "@/layouts/MainLayout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ReportCard } from "@/components/partials/CardComponent";

import "swiper/css";
import "swiper/css/navigation";

export default function LaporanProgramPage() {
  const tabs = [
    {
      label: "Audit Tahunan",
      content: 6,
    },
    {
      label: "Audit Bulanan",
      content: 5,
    },
  ];

  const reports = [
    {
      id: 1,
      title: "Audit Keuangan Tahun 2021",
      subTitle: "Laporan audit keuangan tahun 2022 telah tersedia",
    },
    {
      id: 2,
      title: "Audit Keuangan Tahun 2020",
      subTitle: "Laporan audit keuangan tahun 2021 telah tersedia",
    },
    {
      id: 3,
      title: "Audit Keuangan Tahun 2019",
      subTitle: "Laporan audit keuangan tahun 2020 telah tersedia",
    },
    {
      id: 4,
      title: "Audit Keuangan Tahun 2018",
      subTitle: "Laporan audit keuangan tahun 2019 telah tersedia",
    },
    {
      id: 4,
      title: "Audit Keuangan Tahun 2018",
      subTitle: "Laporan audit keuangan tahun 2019 telah tersedia",
    },
    {
      id: 4,
      title: "Audit Keuangan Tahun 2018",
      subTitle: "Laporan audit keuangan tahun 2019 telah tersedia",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
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

  return (
    <MainLayout>
      <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mt-5 px-5 lg:px-10 " />

      <section className="mt-10 px-5 lg:px-10 ">
        <div className="flex flex-row w-5/6 lg:w-1/4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 py-2 text-sm font-semibold text-start 
            ${
              activeTab === index
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-black border-b-2 border-black"
            } 
            focus:outline-none focus:text-orange-500`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4].map((i) => {
              return (
                <ReportCard
                  key={i}
                  imgUrl="/img/child.jpg"
                  title="Audit Keuangan Tahun 2021"
                  subTitle="Laporan audit keuangan tahun 2022 telah tersedia"
                />
              );
            })}
          </div> */}

          <Swiper
            slidesPerView={1} // Show one slide at a time
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {[0, 1].map((groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                  {reports
                    .slice(groupIndex * 3, groupIndex * 3 + 3) // Display 3 ReportCards per SwiperSlide
                    .map((report) => (
                      <ReportCard
                        key={report.id}
                        imgUrl="/img/child.jpg"
                        title={report.title}
                        subTitle={report.subTitle}
                      />
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Section */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 justify-center mt-8">
            <button className="swiper-button-pre p-1 rounded-lg border border-gray-300 text-gray-500">
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <span>
              {lastVisibleSlide} dari {tabs.length}
            </span>
            <button className="swiper-button-nex p-1 rounded-lg border border-gray-300 text-gray-500">
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
