import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import HotelInvoice from "@/components/receipt/HotelInvoice";
import OrderReceipt from "@/components/receipt/OrderReceipt";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Panduan Pajak Hotel dan Restoran",
  description:
    "Panduan pajak hotel dan restoran BAPENDA Kabupaten Garut berisi dasar hukum, contoh perhitungan, serta informasi kepatuhan untuk pelaku usaha.",
  path: "/informasi-publik/panduan-phr",
  keywords: [
    "panduan PHR Garut",
    "pajak hotel restoran Garut",
    "panduan pajak daerah usaha",
  ],
});

export default function PanduanPHR() {
  return (
    <>
      <main className="mx-auto mt-16 min-h-screen max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h1 className="text-center font-bold text-3xl text-gray-900 tracking-tight md:text-left">
            Panduan Pajak Hotel dan Restoran
          </h1>
          <div className="h-1 w-20 rounded-full bg-blue-600" />{" "}
          <p>
            Berdasarkan: Perda Kab. Garut No. 8 Tahun 2023 & Perbup Garut No. 44
            Tahun 2024
          </p>
        </div>

        <section>
          <header>
            <h2 className="font-bold text-gray-900 text-xl tracking-tight md:text-2xl">
              Pajak Hotel
            </h2>
          </header>
          <div className="grid grid-cols-1 items-start items-center gap-6 md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                alt="Ilustrasi Pajak Restoran"
                className="rounded-lg"
                height={320}
                priority
                src="/Hotel.svg"
                width={420}
              />
            </div>

            {/* Content */}
            <div className="space-y-5 text-gray-800">
              <p className="text-base leading-relaxed">
                Pajak Hotel merupakan pajak atas layanan yang disediakan oleh
                hotel berupa akomodasi penginapan dan fasilitas penunjang
                lainnya
              </p>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Dasar Pengenaan Pajak (DPP)
                </h3>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  DPP Pajak Hotel merupakan jumlah yang diterima oleh pihak
                  hotel, meliputi harga sewa kamar,
                  <i>service charge</i> serta fasilitas tambahan seperti laundry
                  dan sarapan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Tarif Pajak</h3>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  Tarif Pajak Jasa Perhotelan ditetapkan sebesar{" "}
                  <span className="font-semibold text-blue-700">
                    10% (sepuluh persen)
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <section className="w-full rounded-xl bg-gray-50 p-6">
            <h2 className="font-bold text-gray-900 text-lg md:text-xl">
              Contoh Perhitungan Pajak Hotel
            </h2>
            <p className="mt-1 text-gray-600 text-sm">
              Simulasi perhitungan pajak terutang berdasarkan transaksi Jasa
              Perhotelan.
            </p>

            <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              {/* ===== STEP BY STEP ===== */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="rounded-lg border bg-white p-4">
                  <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 font-semibold text-blue-700 text-xs">
                    Langkah 1
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    Menentukan Dasar Pengenaan Pajak (DPP)
                  </h3>

                  <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 text-sm">
                    <li>
                      Deluxe Bedroom:{" "}
                      <strong className="text-gray-900">Rp 1.000.000</strong>
                    </li>
                    <li>
                      Presidential Suite:{" "}
                      <strong className="text-gray-900">Rp 40.000.000</strong>
                    </li>
                    <li>
                      Breakfast:{" "}
                      <strong className="text-gray-900">Rp 2.000.000</strong>
                    </li>
                    <li>
                      Room & Special Massage Mud Bath:{" "}
                      <strong className="text-gray-900">Rp 500.000</strong>
                    </li>
                  </ul>

                  <p className="mt-3 text-sm">
                    <strong>DPP:</strong>{" "}
                    <span className="font-semibold text-blue-700">
                      Rp 44.000.000
                    </span>
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-lg border bg-white p-4">
                  <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 font-semibold text-blue-700 text-xs">
                    Langkah 2
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    Menghitung Pajak Jasa Perhotelan (10%)
                  </h3>

                  <p className="mt-2 text-gray-700 text-sm">
                    Pajak Jasa Perhotelan dikenakan sebesar <strong>10%</strong>{" "}
                    dari DPP.
                  </p>

                  <p className="mt-3 text-sm">
                    Pajak Terutang:{" "}
                    <span className="font-semibold text-blue-700">
                      10% × Rp 44.000.000 = Rp 4.400.000
                    </span>
                  </p>
                </div>
              </div>
              {/* ===== RECEIPT (STICKY) ===== */}
              <div className="sticky top-24 hidden md:block">
                <HotelInvoice />
              </div>
              <div className="block md:hidden">
                <Image
                  alt="Contoh Invoice Hotel"
                  className="mx-auto rounded-lg border shadow-sm"
                  height={520}
                  priority
                  src="/HotelInvoiceMobile.png"
                  width={360}
                />
              </div>
            </div>
            <div className="mt-8 rounded-md border-blue-600 border-l-4 bg-blue-50 p-4">
              <p className="text-blue-900 text-sm">
                <strong>Catatan:</strong> Tarif Pajak Barang dan Jasa tertentu
                termasuk Jasa Perhotelan ditetapkan sebesar 10% ditetapkan
                berdasarkan Perda Kab. Garut No. 8 Tahun 2023 Pasal 28 Ayat(1).
              </p>
            </div>
          </section>
        </section>

        <section className="space-y-12">
          <header>
            <h2 className="font-bold text-gray-900 text-xl tracking-tight md:text-2xl">
              Pajak Restoran
            </h2>
          </header>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                alt="Ilustrasi Pajak Restoran"
                className="rounded-lg"
                height={320}
                priority
                src="/CoffeShop.svg"
                width={420}
              />
            </div>

            {/* Content */}
            <div className="space-y-5 text-gray-800">
              <p className="text-base leading-relaxed">
                Pajak Restoran merupakan pajak atas penjualan makanan dan/atau
                minuman yang disediakan oleh restoran, kafe, kantin, warung,
                serta jasa boga atau katering dengan peredaran usaha lebih dari{" "}
                <span className="font-semibold text-gray-900">
                  Rp 5.000.000
                </span>{" "}
                per bulan.
              </p>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Dasar Pengenaan Pajak (DPP)
                </h3>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  DPP merupakan jumlah yang diterima oleh restoran, meliputi
                  harga menu, <span className="italic">service charge</span>,
                  dan <span className="italic">handling fee</span>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Tarif Pajak</h3>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  Tarif PBJT ditetapkan sebesar{" "}
                  <span className="font-semibold text-blue-700">
                    10% (sepuluh persen)
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <section className="rounded-xl bg-gray-50 p-6">
            <h2 className="font-bold text-gray-900 text-lg md:text-xl">
              Contoh Perhitungan Pajak Restoran
            </h2>
            <p className="mt-1 text-gray-600 text-sm">
              Simulasi perhitungan pajak terutang berdasarkan transaksi
              restoran.
            </p>

            <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              {/* ===== STEP BY STEP ===== */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="rounded-lg border bg-white p-4">
                  <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 font-semibold text-blue-700 text-xs">
                    Langkah 1
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    Menentukan Dasar Pengenaan Pajak (DPP)
                  </h3>

                  <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 text-sm">
                    <li>
                      Harga Makanan:{" "}
                      <strong className="text-gray-900">Rp 100.000</strong>
                    </li>
                    <li>
                      Service Charge:{" "}
                      <strong className="text-gray-900">Rp 5.000</strong>
                    </li>
                  </ul>

                  <p className="mt-3 text-sm">
                    <strong>DPP:</strong>{" "}
                    <span className="font-semibold text-blue-700">
                      Rp 105.000
                    </span>
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-lg border bg-white p-4">
                  <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 font-semibold text-blue-700 text-xs">
                    Langkah 2
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    Menghitung Pajak Restoran (10%)
                  </h3>

                  <p className="mt-2 text-gray-700 text-sm">
                    Pajak Restoran dikenakan sebesar <strong>10%</strong> dari
                    DPP.
                  </p>

                  <p className="mt-3 text-sm">
                    Pajak Terutang:{" "}
                    <span className="font-semibold text-blue-700">
                      10% × Rp 105.000 = Rp 10.500
                    </span>
                  </p>
                </div>
              </div>

              {/* ===== RECEIPT (STICKY) ===== */}
              <div className="sticky top-24">
                <OrderReceipt />
              </div>
            </div>

            {/* ================= CATATAN ================= */}
            <div className="mt-8 rounded-md border-blue-600 border-l-4 bg-blue-50 p-4">
              <p className="text-blue-900 text-sm">
                <strong>Catatan:</strong> Tarif Pajak Barang dan Jasa tertentu
                termasuk Restoran ditetapkan sebesar 10% ditetapkan berdasarkan
                Perda Kab. Garut No. 8 Tahun 2023 Pasal 28 Ayat(1).
              </p>
            </div>
          </section>
        </section>

        <div>
          <h2 className="flex items-center justify-center gap-3 font-bold text-gray-900 text-xl tracking-tight md:text-2xl">
            <WarningCircleIcon />
            Informasi Penting <WarningCircleIcon />
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Kotak 1 */}
            <div className="mt-8 rounded-md border-blue-600 border-l-4 bg-blue-50 p-4">
              <p className="mt-1 text-gray-600 text-sm">
                <span className="italic">Service charge</span>
                {""} termasuk{" "}
                <span className="font-bold">DPP (Dasar Pengenaan Pajak)</span>{" "}
                sehingga tetap dikenakan pajak 10% baik pada hotel maupun
                restoran di Kabupaten Garut.
              </p>
            </div>

            {/* Kotak 2 */}
            <div className="mt-8 rounded-md border-blue-600 border-l-4 bg-blue-50 p-4">
              <p className="mt-1 text-gray-600 text-sm">
                Wajib Pajak memungut, menyetor, dan melaporkan sesuai ketentuan
                Bapenda <br />
                <Link
                  className="text-blue-600 underline hover:text-blue-800"
                  href="https://drive.google.com/file/d/117KRaLXqHu3TXiNezV7M-hHv4RsABVWS/preview"
                  target="_blank"
                >
                  (Peraturan Bupati Garut No 44 Tahun 2024 tentang Tata Cara
                  Pemungutan Pajak Daerah)
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
