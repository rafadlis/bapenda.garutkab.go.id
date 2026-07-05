import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Panduan Pajak Hotel & Restoran",
  description:
    "Panduan Pajak Hotel dan Restoran berdasarkan Perda Kabupaten Garut Nomor 8 Tahun 2023 dan Perbup Garut Nomor 44 Tahun 2024.",
  path: "/panduan-pajak-hotel-restoran",
  keywords: [
    "panduan pajak hotel Garut",
    "pajak restoran Garut",
    "PBJT makanan minuman",
  ],
});

const hotelCalculation = [
  ["Tarif kamar", "Rp 500.000"],
  ["Service charge 5%", "Rp 25.000"],
  ["Dasar Pengenaan Pajak", "Rp 525.000"],
  ["Pajak Hotel 10%", "Rp 52.500"],
  ["Total Bayar Tamu", "Rp 577.500"],
];

const restoranCalculation = [
  ["Harga makanan", "Rp 100.000"],
  ["Service charge 5%", "Rp 5.000"],
  ["Dasar Pengenaan Pajak", "Rp 105.000"],
  ["Pajak Restoran 10%", "Rp 10.500"],
  ["Total Bayar Pelanggan", "Rp 115.500"],
];

function CalculationCard({
  items,
  title,
}: {
  items: string[][];
  title: string;
}) {
  return (
    <div className="rounded-md border bg-muted/40 p-6">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="mt-4 divide-y rounded-md border bg-card">
        {items.map(([label, value], index) => (
          <div
            className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
            key={label}
          >
            <span
              className={
                index >= items.length - 2
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground"
              }
            >
              {label}
            </span>
            <span className="font-mono font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PanduanPajakHotelRestoran() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Panduan Pajak Hotel & Restoran</h1>
        <p className="max-w-prose text-muted-foreground">
          Berdasarkan Perda Kabupaten Garut Nomor 8 Tahun 2023 dan Peraturan
          Bupati Garut Nomor 44 Tahun 2024.
        </p>
      </section>

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
              Pajak Hotel merupakan pajak atas pelayanan yang disediakan hotel,
              termasuk penginapan, akomodasi, dan fasilitas penunjang.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dasar Pengenaan Pajak adalah jumlah pembayaran yang diterima
              hotel, termasuk tarif kamar, service charge, dan fasilitas
              tambahan seperti laundry atau sarapan.
            </p>
            <CalculationCard
              items={hotelCalculation}
              title="Contoh Hitung Pajak Hotel"
            />
          </div>
        </div>
      </section>

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
              Pajak Restoran merupakan pajak atas penjualan makanan dan minuman
              di restoran, kafe, kantin, warung, serta jasa boga atau katering.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dasar Pengenaan Pajak adalah jumlah pembayaran yang diterima
              restoran, termasuk harga menu, service charge, dan biaya kemasan.
            </p>
            <CalculationCard
              items={restoranCalculation}
              title="Contoh Hitung Pajak Restoran"
            />
          </div>
        </div>
      </section>

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
            Service charge termasuk Dasar Pengenaan Pajak sehingga tetap
            dikenakan pajak 10% baik pada hotel maupun restoran di Kabupaten
            Garut.
          </div>
          <div className="space-y-2 p-6 text-muted-foreground text-sm leading-relaxed">
            Wajib Pajak memungut, menyetor, dan melaporkan sesuai ketentuan
            BAPENDA. Rujukan hukum dapat dilihat pada{" "}
            <Link
              className="text-primary underline underline-offset-4 hover:no-underline"
              href="/regulasi-peraturan-2"
            >
              Regulasi & Peraturan
            </Link>
            .
          </div>
        </div>
      </section>
    </article>
  );
}
