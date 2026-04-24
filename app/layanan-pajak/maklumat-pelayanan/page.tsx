import { ImagePlaceholder } from "@/components/image-placeholder";
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
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 mb-16 flex flex-col">
        <h1 className="max-w-prose">Maklumat Pelayanan</h1>
        <p className="max-w-prose text-muted-foreground">
          Komitmen Badan Pendapatan Daerah Kabupaten Garut dalam memberikan
          pelayanan publik yang transparan, akuntabel, dan sesuai standar.
        </p>
        <div className="not-typography mt-10 mx-auto w-full max-w-3xl">
          <ImagePlaceholder
            alt="Maklumat Pelayanan BAPENDA Kabupaten Garut"
            aspect="portrait"
            fit="contain"
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            src="/maklumat-pelayanan.png"
          />
        </div>
      </section>
    </article>
  );
}
