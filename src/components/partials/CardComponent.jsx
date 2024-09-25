import Image from "next/image";
import { createElement } from "react";
import { ButtonLinkComponent } from "./ButtonComponent";
import { PlayIcon } from "@heroicons/react/24/outline";

export const NewsCard = ({ src, tagged, href, ...props }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <a href={href}>
        <Image
          src={src}
          alt="Card"
          width={300}
          height={200}
          className="w-full object-cover"
        />
        <div className="p-4">{createElement(tagged.type, tagged.props)}</div>
      </a>
    </div>
  );
};

export const SmallCard = ({
  src = "/img/child.jpg",
  content = "Profil Siswa - siswi Asrama Mandiri Entrepreneur Center (MEC)",
  href,
}) => {
  return (
    <div className="min-w-[250px] bg-white rounded-md mb-3">
      <div className="relative">
        <Image
          src={src}
          alt="Yatim Mandiri TV Thumbnail"
          width={300}
          height={170}
          className="rounded-md"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white bg-opacity-70 rounded-md p-1 shadow-md">
            <PlayIcon className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold">{content}</p>
    </div>
  );
};

export const MagazineCard = ({ src, tagged, href }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-2 flex flex-col md:flex-row w-full">
      <div className="md:w-1/4 flex justify-center">
        <Image
          src="/img/child.jpg"
          alt="Majalah Cover 1"
          width={150}
          height={200}
          className="object-cover rounded"
        />
      </div>
      <div className="md:w-3/4 p-4">
        <div className="text-gray-500 text-sm mb-2">
          28 Februari 2023 • 09:20 WIB
        </div>
        <h3 className="text-md font-semibold mb-2">
          Memetik Hikmah Isra Miraj
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Assalamualaikum Wr. Wb. Alhamdulillah Majalah Yatim Mandiri kembali
          terbit pada edisi Februari 2023. Memasuki bulan Februari dalam
          kalender masehi dan Rajab dalam kalender Hijriah ini kita akan
          memperingati salah satu momen penting bagi umat Islam Yaitu Isra Miraj
          <span className="text-orange-600"> Baca Selengkapnya...</span>
        </p>
        <div className="flex space-x-4">
          <ButtonLinkComponent text="DOWNLOAD" />
          <button className="border border-orange-600 text-orange-600 py-2 px-4 rounded-md">
            BACA
          </button>
        </div>
      </div>
    </div>
  );
};
