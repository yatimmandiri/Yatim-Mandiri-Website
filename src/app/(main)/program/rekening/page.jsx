"use client";

import { useState } from "react";
import { BreadcrumbComponent } from "@/components/partials/BreadcrumbComponent";
import { MainLayout } from "@/layouts/MainLayout";

export default function RekeningPage() {
  const [activeTab, setActiveTab] = useState("Infak");

  const bankDetails = {
    Zakat: [
      { bank: "BCA", account: "0101358363", holder: "Yayasan Yatim Mandiri" },
      { bank: "BNI", account: "7001010778", holder: "Yayasan Yatim Mandiri" },
    ],
    Infak: [
      { bank: "BCA", account: "0101358363", holder: "Yayasan Yatim Mandiri" },
      { bank: "BNI", account: "7001010778", holder: "Yayasan Yatim Mandiri" },
      {
        bank: "Bank BRI",
        account: "009601001969301",
        holder: "Yayasan Yatim Mandiri",
      },
      {
        bank: "Bank Syariah Indonesia",
        account: "7001201454",
        holder: "Yayasan Yatim Mandiri",
      },
      {
        bank: "CIMB Niaga Syariah",
        account: "860000976500",
        holder: "Yayasan Yatim Mandiri",
      },
      {
        bank: "Bank Mandiri",
        account: "1400003117703",
        holder: "Yayasan Yatim Mandiri",
      },
      {
        bank: "Permata Bank Syariah",
        account: "275800005959",
        holder: "Yayasan Yatim Mandiri",
      },
    ],
    Wakaf: [
      { bank: "BNI", account: "7001010778", holder: "Yayasan Yatim Mandiri" },
      {
        bank: "Bank Mandiri",
        account: "1400003117703",
        holder: "Yayasan Yatim Mandiri",
      },
    ],
    Kemanusiaan: [
      {
        bank: "CIMB Niaga Syariah",
        account: "860000976500",
        holder: "Yayasan Yatim Mandiri",
      },
    ],
  };

  return (
    <MainLayout>
      <BreadcrumbComponent className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse sm:hidden " />

      <section>
        <div className="container mx-auto py-12 px-4">
          {/* Tab Bar */}
          <div className="flex justify-center space-x-4 mb-6">
            {Object.keys(bankDetails).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bank Details Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Bank</th>
                  <th className="px-6 py-3 text-left">No. Rekening</th>
                </tr>
              </thead>
              <tbody>
                {bankDetails[activeTab].map((bank, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4">{bank.bank}</td>
                    <td className="px-6 py-4">
                      <div>{bank.account}</div>
                      <div className="text-gray-500">a/n {bank.holder}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
