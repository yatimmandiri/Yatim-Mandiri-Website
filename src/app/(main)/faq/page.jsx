"use client";

import { HeroComponentOr } from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function FaqPage() {
  const [faqs] = useState([
    "Siapa pemilik Yayasan Yatim Mandiri?",
    "Bagaimana cara untuk meminta bantuan urgent?",
    "Bagaimana cara berdonasi di Yayasan Yatim Mandiri?",
    "Mana nomor rekening resmi Yatim Mandiri?",
    "Bagaimana proses penyaluran dari dana yang terkumpul?",
  ]);

  const categories = [
    { name: "Kelembagaan", icon: "/icons/build.svg" }, // Replace with appropriate icons or image sources
    { name: "Program", icon: "/icons/program.svg" },
    { name: "Galang Dana", icon: "/icons/dana.svg" },
    { name: "Donatur", icon: "/icons/gift.svg" },
  ];

  return (
    <MainLayout>
      <HeroComponentOr
        imgH={200}
        imgW={300}
        src="/img/doublecare.png"
        title="Kamu Butuh Bantuan?"
        subTitle="Masih bingung dengan layanan atau program yang kami berikan? Tanyakan apa saja yang masih bikin kamu bingung."
        content={
          <>
            <input
              className="bg-white shadow-inner rounded-full p-2 my-5 border border-white w-full lg:w-1/2 h-14 text-xl pl-5 placeholder:font-semibold placeholder:text-base placeholder:text-gray-300 placeholder:pl-3"
              id="keyword"
              type="text"
              aria-label="keyword"
              placeholder="Ketik kata kunci pertanyaan...."
            />
          </>
        }
      />

      <div className="container mx-auto px-4 py-12">
        {/* Category Buttons */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-6">
            Pilih kategori sesuai dengan kendalamu
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white border border-gray-300 shadow-lg rounded-lg px-4 py-4 flex items-center justify-center space-x-2 lg:space-x-4 hover:bg-gray-100"
              >
                <Image
                  width={36}
                  height={36}
                  src={category.icon}
                  alt={category.name}
                />
                <span className="font-semibold text-gray-700">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Yang sering ditanyakan</h2>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex flex-row py-3 px-6 justify-between text-start cursor-pointer hover:bg-gray-50"
              >
                <p className="text-base lg:text-xl text-black">{faq}</p>
                <ChevronRightIcon className="w-8 h-8 text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
