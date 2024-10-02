import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import HeroComponent from "@/components/sections/HeroComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";

export default function LayananKamiPage() {
  const features = [
    {
      title: "Kalkulator Zakat",
      description:
        "Hitung kewajiban zakat semakin mudah. Masukkan jumlah hartanya dan dapatkan nilai kewajiban zakat Anda.",
      icon: "img/calculate.svg",
    },
    {
      title: "Rekening Donasi",
      description:
        "Lihat rekening donasi resmi milik Yatim Mandiri agar tidak salah transaksi ke rekening lain.",
      icon: "img/donation.svg",
    },
    {
      title: "Jemput Donasi",
      description:
        "Sahabat tidak perlu susah-susah ke kantor, donasi sahabat akan dijemput oleh tim pelayanan kami.",
      icon: "img/pickup.svg",
    },
    {
      title: "Konfirmasi Donasi",
      description: "Sahabat sudah transfer? Yuk konfirmasi donasi Anda.",
      icon: "img/confirmation.svg",
    },
    {
      title: "Bayar Donasi Online",
      description:
        "Makin mudah sekarang donasi tidak perlu ke kantor, cukup buka handphone dan lakukan donasi online melalui platform kami.",
      icon: "img/confirmation.svg",
    },
    {
      title: "FAQ",
      description:
        "Beberapa pertanyaan yang sering di tanyakan kepada kami. Mulai dari program, transaksi dan lainnya.",
      icon: "img/confirmation.svg",
    },
  ];

  return (
    <MainLayout>
      <div className="relative">
        <HeroComponent title="Layanan Yatim Mandiri" />
        <div className="absolute h-24 -bottom-14 left-0 right-0 z-100 p-4 bg-white rounded-lg justify-center mx-4">
          <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse sm:hidden " />
        </div>
      </div>

      <section className="sticky mb-20">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-start text-start"
              >
                <div className="flex flex-row items-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-24 h-24"
                    width={600}
                    height={400}
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
