import OrderReceipt from "@/components/receipt/OrderReceipt";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HotelInvoice from "@/components/receipt/HotelInvoice";

export default function PanduanPHR() {
    return (
        <>
            <main className="min-h-screen max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight text-center md:text-left">
                        Panduan Pajak Hotel dan Restoran
                    </h1>
                    <div className="w-20 h-1 rounded-full bg-blue-600"></div>{" "}
                    <p>
                        Berdasarkan: Perda Kab. Garut No. 8 Tahun 2023 & Perbup
                        Garut No. 44 Tahun 2024
                    </p>
                </div>

                <section>
                    <header>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                            Pajak Hotel
                        </h2>
                    </header>
                    <div className="grid grid-cols-1 gap-6 items-center md:grid-cols-2 items-start">
                        {/* Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/Hotel.svg"
                                alt="Ilustrasi Pajak Restoran"
                                width={420}
                                height={320}
                                className="rounded-lg"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-5 text-gray-800">
                            <p className="text-base leading-relaxed">
                                Pajak Hotel merupakan pajak atas layanan yang
                                disediakan oleh hotel berupa akomodasi
                                penginapan dan fasilitas penunjang lainnya
                            </p>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Dasar Pengenaan Pajak (DPP)
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                                    DPP Pajak Hotel merupakan jumlah yang
                                    diterima oleh pihak hotel, meliputi harga
                                    sewa kamar,
                                    <i>service charge</i> serta fasilitas
                                    tambahan seperti laundry dan sarapan.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Tarif Pajak
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                                    Tarif Pajak Jasa Perhotelan ditetapkan
                                    sebesar{" "}
                                    <span className="font-semibold text-blue-700">
                                        10% (sepuluh persen)
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <section className="rounded-xl bg-gray-50 p-6 w-full">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            Contoh Perhitungan Pajak Hotel
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Simulasi perhitungan pajak terutang berdasarkan
                            transaksi Jasa Perhotelan.
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                            {/* ===== STEP BY STEP ===== */}
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="rounded-lg border bg-white p-4">
                                    <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                                        Langkah 1
                                    </span>
                                    <h3 className="font-semibold text-gray-900">
                                        Menentukan Dasar Pengenaan Pajak (DPP)
                                    </h3>

                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                                        <li>
                                            Deluxe Bedroom:{" "}
                                            <strong className="text-gray-900">
                                                Rp 1.000.000
                                            </strong>
                                        </li>
                                        <li>
                                            Presidential Suite:{" "}
                                            <strong className="text-gray-900">
                                                Rp 40.000.000
                                            </strong>
                                        </li>
                                        <li>
                                            Breakfast:{" "}
                                            <strong className="text-gray-900">
                                                Rp 2.000.000
                                            </strong>
                                        </li>
                                        <li>
                                            Room & Special Massage Mud Bath:{" "}
                                            <strong className="text-gray-900">
                                                Rp 500.000
                                            </strong>
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
                                    <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                                        Langkah 2
                                    </span>
                                    <h3 className="font-semibold text-gray-900">
                                        Menghitung Pajak Jasa Perhotelan (10%)
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-700">
                                        Pajak Jasa Perhotelan dikenakan sebesar{" "}
                                        <strong>10%</strong> dari DPP.
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
                            <div className="hidden md:block sticky top-24">
                                <HotelInvoice />
                            </div>
                            <div className="block md:hidden">
                                <Image
                                    src="/HotelInvoiceMobile.png"
                                    alt="Contoh Invoice Hotel"
                                    width={360}
                                    height={520}
                                    className="mx-auto rounded-lg border shadow-sm"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="mt-8 rounded-md border-l-4 border-blue-600 bg-blue-50 p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Catatan:</strong> Tarif Pajak Barang dan
                                Jasa tertentu termasuk Jasa Perhotelan
                                ditetapkan sebesar 10% ditetapkan berdasarkan
                                Perda Kab. Garut No. 8 Tahun 2023 Pasal 28
                                Ayat(1).
                            </p>
                        </div>
                    </section>
                </section>

                <section className="space-y-12">
                    <header>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                            Pajak Restoran
                        </h2>
                    </header>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-start">
                        {/* Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/CoffeShop.svg"
                                alt="Ilustrasi Pajak Restoran"
                                width={420}
                                height={320}
                                className="rounded-lg"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-5 text-gray-800">
                            <p className="text-base leading-relaxed">
                                Pajak Restoran merupakan pajak atas penjualan
                                makanan dan/atau minuman yang disediakan oleh
                                restoran, kafe, kantin, warung, serta jasa boga
                                atau katering dengan peredaran usaha lebih dari{" "}
                                <span className="font-semibold text-gray-900">
                                    Rp 5.000.000
                                </span>{" "}
                                per bulan.
                            </p>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Dasar Pengenaan Pajak (DPP)
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                                    DPP merupakan jumlah yang diterima oleh
                                    restoran, meliputi harga menu,{" "}
                                    <span className="italic">
                                        service charge
                                    </span>
                                    , dan{" "}
                                    <span className="italic">handling fee</span>
                                    .
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Tarif Pajak
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700">
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
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            Contoh Perhitungan Pajak Restoran
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Simulasi perhitungan pajak terutang berdasarkan
                            transaksi restoran.
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                            {/* ===== STEP BY STEP ===== */}
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="rounded-lg border bg-white p-4">
                                    <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                                        Langkah 1
                                    </span>
                                    <h3 className="font-semibold text-gray-900">
                                        Menentukan Dasar Pengenaan Pajak (DPP)
                                    </h3>

                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                                        <li>
                                            Harga Makanan:{" "}
                                            <strong className="text-gray-900">
                                                Rp 100.000
                                            </strong>
                                        </li>
                                        <li>
                                            Service Charge:{" "}
                                            <strong className="text-gray-900">
                                                Rp 5.000
                                            </strong>
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
                                    <span className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                                        Langkah 2
                                    </span>
                                    <h3 className="font-semibold text-gray-900">
                                        Menghitung Pajak Restoran (10%)
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-700">
                                        Pajak Restoran dikenakan sebesar{" "}
                                        <strong>10%</strong> dari DPP.
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
                        <div className="mt-8 rounded-md border-l-4 border-blue-600 bg-blue-50 p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Catatan:</strong> Tarif Pajak Barang dan
                                Jasa tertentu termasuk Restoran ditetapkan
                                sebesar 10% ditetapkan berdasarkan Perda Kab.
                                Garut No. 8 Tahun 2023 Pasal 28 Ayat(1).
                            </p>
                        </div>
                    </section>
                </section>

                <div>
                    <h2 className="flex justify-center items-center text-xl md:text-2xl font-bold text-gray-900 tracking-tight gap-3">
                        <AlertCircleIcon />
                        Informasi Penting <AlertCircleIcon />
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Kotak 1 */}
                        <div className="mt-8 rounded-md border-l-4 border-blue-600 bg-blue-50 p-4">
                            <p className="text-sm text-gray-600 mt-1">
                                <span className="italic">Service charge</span>
                                {""} termasuk{" "}
                                <span className="font-bold">
                                    DPP (Dasar Pengenaan Pajak)
                                </span>{" "}
                                sehingga tetap dikenakan pajak 10% baik pada
                                hotel maupun restoran di Kabupaten Garut.
                            </p>
                        </div>

                        {/* Kotak 2 */}
                        <div className="mt-8 rounded-md border-l-4 border-blue-600 bg-blue-50 p-4">
                            <p className="text-sm text-gray-600 mt-1">
                                Wajib Pajak memungut, menyetor, dan melaporkan
                                sesuai ketentuan Bapenda <br />
                                <Link
                                    href="https://drive.google.com/file/d/117KRaLXqHu3TXiNezV7M-hHv4RsABVWS/preview"
                                    target="_blank"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    (Peraturan Bupati Garut No 44 Tahun 2024
                                    tentang Tata Cara Pemungutan Pajak Daerah)
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
