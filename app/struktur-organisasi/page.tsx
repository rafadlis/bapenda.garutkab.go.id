import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Struktur Organisasi",
  description:
    "Struktur organisasi Badan Pendapatan Daerah Kabupaten Garut dan unit kerja yang menjalankan pengelolaan pendapatan daerah.",
  path: "/struktur-organisasi",
  keywords: ["struktur organisasi BAPENDA", "organisasi BAPENDA Garut"],
});

const units = [
  "Kepala Badan",
  "Sekretariat",
  "Bidang Pendataan",
  "Bidang Penagihan",
  "Bidang Pengawasan dan Pemeriksaan",
  "Bidang Teknologi dan Informasi",
];

export default function StrukturOrganisasi() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Struktur Organisasi</h1>
        <p className="max-w-prose text-muted-foreground">
          Struktur Organisasi Badan Pendapatan Daerah Kabupaten Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Bagan struktur organisasi BAPENDA Kabupaten Garut"
          />
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Unit Kerja</h2>
          <Badge className="font-mono">{units.length}</Badge>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <div className="space-y-2 p-6" key={unit}>
              <h3 className="font-bold text-xl">{unit}</h3>
              <p className="text-muted-foreground">
                Bagian dari susunan kelembagaan BAPENDA Kabupaten Garut.
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
