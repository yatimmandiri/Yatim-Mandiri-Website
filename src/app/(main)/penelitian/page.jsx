"use client";

import {
  ButtonComponent,
  ButtonLinkComponent,
} from "@/components/partials/ButtonComponent";
import { HeroComponentOr } from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function PenelitianPage() {
  const researchData = [
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
    {
      author: "Muhammad Nur Kholis Ramadani",
      title:
        "Wakaf Produktif dan Aplikasinya di Indonesia Studi Kasus di Yatim Mandiri",
      imageUrl: "/img/child.jpg", // Replace with the correct image path
      downloadLink: "#", // Replace with actual download link
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleExpand = () => {
    setVisibleCount((prevCount) => (prevCount === 6 ? researchData.length : 6)); // Toggle between showing 6 and 9 items
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Isi Form",
      content:
        "Tahap pertama, Anda bisa ajukan data diri melalui form yang sudah kami sediakan di https://s.id/ajuan-penelitian/",
    },
    {
      label: "Tunggu Konfirmasi",
      content:
        "Setelah pengajuan form, Anda perlu menunggu konfirmasi dari tim kami.",
    },
    {
      label: "Proses Penelitian",
      content:
        "Jika pengajuan diterima, penelitian dapat dimulai sesuai dengan ketentuan.",
    },
    {
      label: "Publikasi",
      content:
        "Hasil penelitian akan dipublikasikan setelah melalui proses evaluasi.",
    },
  ];

  return (
    <MainLayout>
      <HeroComponentOr
        src="/img/research.png"
        title="Dokumen Penelitian & Pengajuan"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae euismod ligula, at egestas enim. Integer eros ligula, pellentesque sed dolor sed, convallis sollicitudin tortor. Duis a luctus lectus. Integer sollicitudin vulputate erat a rhoncus."
        content={
          <div className="flex flex-row gap-2">
            <ButtonLinkComponent
              text="Ajukan Penelitian"
              className="bg-white mt-6 w-full lg:w-fit"
              color=""
            />
            <ButtonLinkComponent
              text="Kotak Kami"
              className="bg-orange-500 border border-white mt-6 w-full lg:w-fit"
            />
          </div>
        }
      />

      {/* Result */}
      <section className="px-5 lg:px-14">
        <div className="py-12 text-center">
          <div className="flex mb-8">
            <div className="acc-one"></div>
            <h2 className="text-2xl font-semibold">Hasil Penelitian Publik</h2>
          </div>

          {/* Research Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {researchData.slice(0, visibleCount).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border-2 flex flex-row"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-28 h-40 rounded-xl p-2"
                />
                <div className="flex flex-col justify-between items-start py-3 px-2 text-start">
                  <div className="flex flex-col">
                    <div className="text-gray-500 text-[10px] mb-1 lg:mb-3">
                      Dibuat oleh : {item.author}
                    </div>
                    <h3 className="font-bold text-sm text-start">
                      {item.title}
                    </h3>
                  </div>

                  <a
                    href={item.downloadLink}
                    className="bg-orange-500 text-white text-xs py-2 px-6 rounded-full hover:bg-orange-600 transition duration-200"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* "Lihat Semua" Button */}
          <div className="mt-14">
            <ButtonLinkComponent
              funct={handleExpand}
              variant="outline"
              text={visibleCount === 6 ? "Lihat Semua" : "Lihat Lebih Sedikit"}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 lg:px-14">
        <div className="py-12">
          <div className="flex mb-8">
            <div className="acc-one"></div>
            <h2 className="text-2xl font-semibold">
              Syarat & Ketentuan Penelitian
            </h2>
          </div>

          {/* Syarat Permohonan Penelitian */}

          <div className="border border-gray-300 rounded mb-4">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full text-left p-4 font-semibold text-lg flex justify-between items-center"
            >
              Syarat Permohonan Penelitian?
              {activeIndex === 0 ? (
                <div className="rounded-full border border-black">
                  <ChevronUpIcon className="h-4 w-4 m-1" />
                </div>
              ) : (
                <div className="rounded-full border border-black">
                  <ChevronDownIcon className="h-4 w-4 m-1" />
                </div>
              )}
            </button>
            {activeIndex === 0 && (
              <div className="p-4 border-t border-gray-300">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Surat keterangan dari perguruan tinggi untuk mahasiswa...
                  </li>
                  <li>
                    Proposal penelitian yang dilengkapi dengan daftar
                    pertanyaan...
                  </li>
                  <li>Surat pernyataan bersedia menyerahkan hasil riset...</li>
                  <li>
                    Fotokopi Kartu Tanda Penduduk (KTP) dan Kartu Mahasiswa...
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Aturan Penelitian */}
          <div className="border border-gray-300 rounded mb-4">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full text-left p-4 font-semibold text-lg flex justify-between items-center"
            >
              Aturan Penelitian
              {activeIndex === 1 ? (
                <div className="rounded-full border border-black">
                  <ChevronUpIcon className="h-4 w-4 m-1" />
                </div>
              ) : (
                <div className="rounded-full border border-black">
                  <ChevronDownIcon className="h-4 w-4 m-1" />
                </div>
              )}
            </button>
            {activeIndex === 1 && (
              <div className="p-4 border-t border-gray-300">
                <p>Berikut adalah aturan penelitian yang harus diikuti...</p>
              </div>
            )}
          </div>

          {/* Add more sections as needed */}
        </div>
      </section>

      {/* Submission */}
      <section className="px-5 lg:px-14 bg-gray-100">
        <div className="flex lg:flex-row flex-col items-center">
          <Image
            src="/img/submission.png"
            alt="h"
            width={600}
            height={400}
            className="w-70 h-80 lg:my-20 my-10 lg:px-0 px-20"
          />
          <div className="flex flex-col lg:ml-5">
            <h2 className="text-2xl text-black font-bold mb-2">
              Ajukan Penelitian Anda Sekarang
            </h2>
            <p className="text-black text-xs text-justify">
              Ajukan penelitian Anda di Yatim Mandiri dan temukan kesempatan
              untuk mendalami isu-isu sosial yang relevan. Hasilkan penelitian
              berkualitas yang bermanfaat untuk tugas kampus dan berkontribusi
              nyata bagi masa depan anak-anak yatim. Terbuka juga untuk
              masyarakat umum yang ingin berperan serta dalam mengubah kehidupan
              mereka
            </p>
            <ButtonLinkComponent
              text="Ajukan penelitian"
              className="my-8 w-full lg:w-fit"
            />
          </div>
        </div>
      </section>

      {/* Rule */}
      <section className="px-5 lg:px-24">
        <div className="py-12 items-center text-center">
          <h2 className="text-2xl font-bold mb-6">Alur Penelitian</h2>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-1 p-2 md:p-4 text-sm md:text-lg font-semibold 
            ${
              activeTab === index
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600"
            } 
            focus:outline-none focus:text-white`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-white shadow rounded mt-4">
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
