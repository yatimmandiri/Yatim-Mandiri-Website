import Image from "next/image";
import { BreadcrumbComponent } from "../partials/BreadcrumbComponent";

export default function HeroComponent({ title = "", subTitle = "", ...props }) {
  return (
    <div
      className="relative h-[500px] flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('img/child.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-lg text-gray-300 mt-4">{subTitle}</p>
        <BreadcrumbComponent textColor="text-white" Color="white" className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse max-lg:hidden" />
      </div>
    </div>
  );
}

export const HeroComponentOr = ({ src, tagged, href }) => {
  return (
    <div className="max-w-8xl mx-auto bg-orange-500 inline-block items-center p-8 lg:flex lg:flex-row lg:px-14 lg:items-start">
      <div className="lg:w-full lg:flex-col">
        <BreadcrumbComponent textColor="text-white" Color="white" className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse" />
        <h2 className="max-w-xl lg:text-4xl mt-10 text-3xl font-bold leading-none text-white inline-block text-center lg:text-justify">
          Jalin Kemitraan dengan Yatim Mandiri. Bersama, Wujudkan Dampak Positif
          untuk Yatim dan Dhuafa di Indonesia
        </h2>

        <p className="mt-6 max-w-2xl text-[25] text-white">
          Bergabunglah dalam kemitraan dengan Yatim Mandiri untuk bersama-sama
          memperluas dampak positif bagi yatim dan dhuafa di seluruh Indonesia
        </p>
      </div>

      <Image
        src="/img/partner.png" // Replace with your actual image path
        alt="YM Majalah Logo"
        width={600}
        height={400}
        className="w-auto h-auto" // Adjust size for responsiveness
      />
    </div>
  );
};
