import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import HotelInvoice from "@/components/receipt/HotelInvoice";
import OrderReceipt from "@/components/receipt/OrderReceipt";
import { Badge } from "@/components/ui/badge";
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
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Panduan Pajak Hotel dan Restoran</h1>
        <p className="max-w-prose text-muted-foreground">
          Berdasarkan Perda Kabupaten Garut No. 8 Tahun 2023 dan Perbup Garut
          No. 44 Tahun 2024.
        </p>
      </section>

      {/* Pajak Hotel */}
      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Pajak Hotel</h2>
          <Badge className="font-mono">10%</Badge>
        </span>

        <div className="not-typography mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-md border bg-muted">
            <Image
              alt="Ilustrasi Pajak Hotel"
              className="object-contain p-6"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              src="/Hotel.svg"
            />
          </div>
          <div className="space-y-4 text-foreground">
            <p className="leading-relaxed">
              Pajak Hotel merupakan pajak atas layanan yang disediakan oleh
              hotel berupa akomodasi penginapan dan fasilitas penunjang
              lainnya.
            </p>
            <div>
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                Dasar Pengenaan Pajak (DPP)
              </span>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                DPP Pajak Hotel merupakan jumlah yang diterima oleh pihak hotel,
                meliputi harga sewa kamar, <i>service charge</i>, serta
                fasilitas tambahan seperti laundry dan sarapan.
              </p>
            </div>
            <div>
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                Tarif
              </span>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Tarif Pajak Jasa Perhotelan ditetapkan sebesar{" "}
                <span className="font-semibold text-foreground">10%</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="not-typography mt-10 rounded-md border bg-muted/40 p-6">
          <h3 className="font-bold text-lg">Contoh Perhitungan Pajak Hotel</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Simulasi perhitungan pajak terutang berdasarkan transaksi Jasa
            Perhotelan.
          </p>

          <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-md border bg-card p-4">
                <Badge variant="secondary">Langkah 1</Badge>
                <h4 className="mt-2 font-semibold">
                  Menentukan Dasar Pengenaan Pajak (DPP)
                </h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground text-sm">
                  <li>
                    Deluxe Bedroom:{" "}
                    <strong className="text-foreground">Rp 1.000.000</strong>
                  </li>
                  <li>
                    Presidential Suite:{" "}
                    <strong className="text-foreground">Rp 40.000.000</strong>
                  </li>
                  <li>
                    Breakfast:{" "}
                    <strong className="text-foreground">Rp 2.000.000</strong>
                  </li>
                  <li>
                    Room & Special Massage Mud Bath:{" "}
                    <strong className="text-foreground">Rp 500.000</strong>
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  <strong>DPP:</strong>{" "}
                  <span className="font-mono font-semibold text-foreground">
                    Rp 44.000.000
                  </span>
                </p>
              </div>

              <div className="rounded-md border bg-card p-4">
                <Badge variant="secondary">Langkah 2</Badge>
                <h4 className="mt-2 font-semibold">
                  Menghitung Pajak Jasa Perhotelan (10%)
                </h4>
                <p className="mt-2 text-muted-foreground text-sm">
                  Pajak Jasa Perhotelan dikenakan sebesar <strong>10%</strong>{" "}
                  dari DPP.
                </p>
                <p className="mt-3 text-sm">
                  Pajak Terutang:{" "}
                  <span className="font-mono font-semibold text-foreground">
                    10% × Rp 44.000.000 = Rp 4.400.000
                  </span>
                </p>
              </div>
            </div>

            <div className="sticky top-24 hidden md:block">
              <HotelInvoice />
            </div>
            <div className="block md:hidden">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-md border">
                <Image
                  alt="Contoh Invoice Hotel"
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  src="/HotelInvoiceMobile.png"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 border-l-2 border-border pl-4 text-muted-foreground text-sm">
            <strong className="text-foreground">Catatan:</strong> Tarif Pajak
            Barang dan Jasa tertentu termasuk Jasa Perhotelan ditetapkan sebesar
            10% berdasarkan Perda Kab. Garut No. 8 Tahun 2023 Pasal 28 Ayat (1).
          </p>
        </div>
      </section>

      {/* Pajak Restoran */}
      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Pajak Restoran</h2>
          <Badge className="font-mono">10%</Badge>
        </span>

        <div className="not-typography mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-md border bg-muted">
            <Image
              alt="Ilustrasi Pajak Restoran"
              className="object-contain p-6"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src="/CoffeShop.svg"
            />
          </div>
          <div className="space-y-4 text-foreground">
            <p className="leading-relaxed">
              Pajak Restoran merupakan pajak atas penjualan makanan dan/atau
              minuman yang disediakan oleh restoran, kafe, kantin, warung,
              serta jasa boga atau katering dengan peredaran usaha lebih dari{" "}
              <span className="font-semibold">Rp 5.000.000</span> per bulan.
            </p>
            <div>
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                Dasar Pengenaan Pajak (DPP)
              </span>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                DPP merupakan jumlah yang diterima oleh restoran, meliputi harga
                menu, <span className="italic">service charge</span>, dan{" "}
                <span className="italic">handling fee</span>.
              </p>
            </div>
            <div>
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                Tarif
              </span>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Tarif PBJT ditetapkan sebesar{" "}
                <span className="font-semibold text-foreground">10%</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="not-typography mt-10 rounded-md border bg-muted/40 p-6">
          <h3 className="font-bold text-lg">
            Contoh Perhitungan Pajak Restoran
          </h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Simulasi perhitungan pajak terutang berdasarkan transaksi restoran.
          </p>

          <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-md border bg-card p-4">
                <Badge variant="secondary">Langkah 1</Badge>
                <h4 className="mt-2 font-semibold">
                  Menentukan Dasar Pengenaan Pajak (DPP)
                </h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground text-sm">
                  <li>
                    Harga Makanan:{" "}
                    <strong className="text-foreground">Rp 100.000</strong>
                  </li>
                  <li>
                    Service Charge:{" "}
                    <strong className="text-foreground">Rp 5.000</strong>
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  <strong>DPP:</strong>{" "}
                  <span className="font-mono font-semibold text-foreground">
                    Rp 105.000
                  </span>
                </p>
              </div>

              <div className="rounded-md border bg-card p-4">
                <Badge variant="secondary">Langkah 2</Badge>
                <h4 className="mt-2 font-semibold">
                  Menghitung Pajak Restoran (10%)
                </h4>
                <p className="mt-2 text-muted-foreground text-sm">
                  Pajak Restoran dikenakan sebesar <strong>10%</strong> dari
                  DPP.
                </p>
                <p className="mt-3 text-sm">
                  Pajak Terutang:{" "}
                  <span className="font-mono font-semibold text-foreground">
                    10% × Rp 105.000 = Rp 10.500
                  </span>
                </p>
              </div>
            </div>

            <div className="sticky top-24">
              <OrderReceipt />
            </div>
          </div>

          <p className="mt-6 border-l-2 border-border pl-4 text-muted-foreground text-sm">
            <strong className="text-foreground">Catatan:</strong> Tarif Pajak
            Barang dan Jasa tertentu termasuk Restoran ditetapkan sebesar 10%
            berdasarkan Perda Kab. Garut No. 8 Tahun 2023 Pasal 28 Ayat (1).
          </p>
        </div>
      </section>

      {/* Informasi Penting */}
      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">
            <WarningCircleIcon
              aria-hidden="true"
              className="-mt-1 mr-2 inline size-5 text-muted-foreground"
            />
            Informasi Penting
          </h2>
        </span>

        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          <div className="space-y-2 p-6 text-muted-foreground text-sm leading-relaxed">
            <span className="italic">Service charge</span> termasuk{" "}
            <span className="font-semibold text-foreground">
              DPP (Dasar Pengenaan Pajak)
            </span>{" "}
            sehingga tetap dikenakan pajak 10% baik pada hotel maupun restoran
            di Kabupaten Garut.
          </div>
          <div className="space-y-2 p-6 text-muted-foreground text-sm leading-relaxed">
            Wajib Pajak memungut, menyetor, dan melaporkan sesuai ketentuan
            BAPENDA.{" "}
            <Link
              className="text-primary underline underline-offset-4 hover:no-underline"
              href="https://drive.google.com/file/d/117KRaLXqHu3TXiNezV7M-hHv4RsABVWS/preview"
              rel="noopener noreferrer"
              target="_blank"
            >
              Peraturan Bupati Garut No. 44 Tahun 2024
            </Link>
            .
          </div>
        </div>
      </section>
    </article>
  );
}
