import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";

export default function OpiniDetailPage({ params }) {
  const slug = decodeURIComponent(params.slug);
  return (
    <MainLayout>
      <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mt-5 px-5 lg:px-10 " />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/img/person.png" // Replace this with your image path
              alt="Profile Picture"
              className="rounded-lg w-auto h-auto object-cover"
              width={400}
              height={400}
            />
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-4">KH. Ma’ruf Khozin</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Education and Experience */}
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="bg-orange-500 w-6 h-6 rounded-full mr-2"></span>
                  Pendidikan Formal & Non Formal
                </h2>
                <ul className="list-decimal pl-6">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>

                <h2 className="text-xl font-semibold mt-4 mb-2 flex items-center">
                  <span className="bg-orange-500 w-6 h-6 rounded-full mr-2"></span>
                  Pengalaman & Organisasi
                </h2>
                <ul className="list-decimal pl-6">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>

              {/* Right Column: Published Books */}
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="bg-orange-500 w-6 h-6 rounded-full mr-2"></span>
                  Buku Terbitan
                </h2>
                <ul className="list-decimal pl-6">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Tentang Dewan Pengawas Syariah</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            euismod ligula, at egestas enim. Integer eros ligula, pellentesque
            sed dolor sed, convallis sollicitudin tortor. Duis a luctus lectus.
            Integer sollicitudin vulputate erat a rhoncus. Cras eu elementum
            lectus. Vestibulum id eros lacinia libero dapibus convallis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Suspendisse id placerat metus.
          </p>
          <p className="mt-4 text-gray-600">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Maecenas felis diam, sodales non vestibulum
            eget, maximus at leo. Phasellus id sagittis lectus. Suspendisse
            tempor dolor id libero pharetra, ut aliquam neque viverra. Cras
            semper maximus viverra. Quisque sit amet scelerisque odio. Phasellus
            aliquam aliquam felis nec interdum.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
