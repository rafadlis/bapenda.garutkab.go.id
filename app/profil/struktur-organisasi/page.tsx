import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Struktur Organisasi",
  description:
    "Informasi halaman struktur organisasi BAPENDA Kabupaten Garut untuk memahami susunan kelembagaan dan unit kerja pengelola pendapatan daerah.",
  path: "/profil/struktur-organisasi",
  keywords: ["struktur organisasi BAPENDA", "organisasi BAPENDA Garut"],
});

const units: { name: string; description: string }[] = [
  {
    name: "Kepala Badan",
    description:
      "Memimpin penyelenggaraan tugas dan fungsi Badan Pendapatan Daerah Kabupaten Garut.",
  },
  {
    name: "Sekretariat",
    description:
      "Mengoordinasikan perencanaan, keuangan, kepegawaian, serta dukungan administrasi.",
  },
  {
    name: "Bidang Pendataan",
    description:
      "Melaksanakan pendataan, pendaftaran, dan penilaian objek pajak daerah.",
  },
  {
    name: "Bidang Penagihan",
    description:
      "Mengelola penetapan, penagihan, dan pelaporan penerimaan pajak daerah.",
  },
  {
    name: "Bidang Pengawasan dan Pemeriksaan",
    description:
      "Melakukan pengawasan, pemeriksaan, serta penyelesaian sengketa pajak daerah.",
  },
  {
    name: "Bidang Teknologi dan Informasi",
    description:
      "Membangun, memelihara, dan mengintegrasikan sistem informasi pendapatan daerah.",
  },
];

export default function StrukturOrganisasi() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Struktur Organisasi</h1>
        <p className="max-w-prose text-muted-foreground">
          Susunan kelembagaan Badan Pendapatan Daerah Kabupaten Garut yang
          menjalankan amanat pengelolaan pendapatan daerah secara terintegrasi.
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
            <div className="space-y-2 p-6" key={unit.name}>
              <h3 className="font-bold text-xl">{unit.name}</h3>
              <p className="text-muted-foreground">{unit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
