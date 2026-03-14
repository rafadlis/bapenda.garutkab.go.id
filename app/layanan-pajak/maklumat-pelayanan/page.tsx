import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Maklumat Pelayanan",
  description:
    "Maklumat pelayanan BAPENDA Kabupaten Garut yang menegaskan komitmen pelayanan publik, standar layanan, dan transparansi kepada masyarakat.",
  path: "/layanan-pajak/maklumat-pelayanan",
  keywords: ["maklumat pelayanan BAPENDA", "standar layanan pajak Garut"],
});

export default function Maklumat() {
  return (
    <>
      <main className="mx-auto mt-20 flex min-h-screen max-w-5xl flex-col items-center gap-6 px-6">
        <h1 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl">
          Maklumat Pelayanan
        </h1>
        <div className="h-1 w-24 rounded-full bg-blue-600" />
        <div className="relative h-[320px] w-full sm:h-[440px] md:h-[600px]">
          <Image
            alt="Maklumat Pelayanan"
            className="object-contain"
            fill
            sizes="100vw"
            src="/maklumat-pelayanan.png"
          />
        </div>
      </main>
    </>
  );
}
