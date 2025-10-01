import { BookOpen, CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <article className="typography container mx-auto flex flex-col">
      <section className="flex min-h-[calc(100svh-(var(--spacing)*16))] flex-col justify-center">
        <h1 className="max-w-prose text-center">
          Pengurus Utama Pajak Daerah <br /> Kabupaten Garut
        </h1>
        <p className="mx-auto max-w-prose text-center">
          Badan Pendapatan Daerah (BAPENDA) Kabupaten Garut merupakan salah satu
          instansi pemerintah daerah tingkat kabupaten yang bertugas untuk
          mengelola Pajak Daerah tertentu dan koordinator Retribusi Daerah.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button>Tanya Kami</Button>
          <Button variant="outline">
            Pelajari <BookOpen />
          </Button>
        </div>
      </section>
      <section>
        <h2 className="border-none text-center">Pajak yang dikelola</h2>
        <div className="not-typography mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(() => {
            const pajak: { name: string; description: string }[] = [
              {
                name: "PBB-P2",
                description:
                  "Pajak Bumi dan Bangunan Perkotaan dan Perdesaan, contoh seperti Rumah Pribadi, Rumah Susun, Apartemen, dan lainnya.",
              },
              {
                name: "BPHTB",
                description:
                  "Bea Perolehan Hak atas Tanah dan Bangunan, Biaya yang dikeluarkan saat pembelian tanah dan bangunan.",
              },
              {
                name: "PBJT atas Makanan dan/atau Minuman",
                description:
                  "Pajak Barang Jasa Tertentu atas Makanan dan/atau Minuman, pajak yang dikenakan pada transaksi jual beli makanan dan/atau minuman dengan kategori tertentu.",
              },
              {
                name: "PBJT atas Tenaga Listrik",
                description:
                  "Pajak Barang Jasa Tertentu atas Jasa Perhotelan, pajak yang dikenakan pada transaksi jual beli jasa perhotelan dengan kategori tertentu.",
              },
              {
                name: "PBJT atas Jasa Perhotelan",
                description:
                  "Pajak Barang Jasa Tertentu atas Jasa Perhotelan, pajak yang dikenakan pada transaksi jual beli jasa perhotelan dengan kategori tertentu.",
              },
              {
                name: "PBJT atas Jasa Parkir",
                description:
                  "Pajak Barang Jasa Tertentu atas Jasa Parkir, pajak yang dikenakan pada transaksi jual beli jasa parkir dengan kategori tertentu.",
              },
              {
                name: "PBJT atas Jasa Kesenian dan Hiburan",
                description:
                  "Pajak Barang Jasa Tertentu atas Jasa Kesenian dan Hiburan, pajak yang dikenakan pada transaksi jual beli jasa kesenian dan hiburan dengan kategori tertentu.",
              },
              {
                name: "Pajak MBLB",
                description:
                  "Pajak Mineral Bukan Logam dan Batuan, pajak yang dikenakan pada pengambilan mineral bukan logam dan batuan.",
              },
              {
                name: "Pajak Sarang Burung Walet",
                description:
                  "Pajak Sarang Burung Walet, pajak yang dikenakan pada jual beli sarang burung walet.",
              },
              {
                name: "Pajak Reklame",
                description:
                  "Pajak Reklamasi, pajak yang dikenakan pada penyelenggaraan reklame.",
              },
              {
                name: "PAT",
                description:
                  "Pajak Air Tanah, pajak yang dikenakan pada pengambilan air tanah.",
              },
            ];
            return pajak.map((item) => (
              <div
                className="group cursor-pointer space-y-2 rounded-lg border p-6 transition-colors duration-300 hover:border-primary hover:bg-muted"
                key={item.name}
              >
                <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-primary">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ));
          })()}
          <div className="group relative cursor-pointer space-y-2 rounded-lg bg-primary p-6 text-primary-foreground transition-colors duration-300 hover:border-primary hover:bg-primary/90">
            <h3 className="inline-flex items-center gap-2 font-bold text-xl transition-colors duration-300 group-hover:text-primary-foreground">
              Ingin bertanya?
              <CircleArrowRight className="size-6 text-primary-foreground/30" />
            </h3>
            <p className="text-primary-foreground/70">
              Pajak yang tidak termasuk dalam kategori lainnya dapat ditanyakan
              melalui halaman ini.
            </p>
            <Link className="absolute inset-0" href="/contact" />
          </div>
        </div>
      </section>
    </article>
  );
}
