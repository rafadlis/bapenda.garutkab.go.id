import data from "@/app/content/pajak-lainnya.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { RequirementSections } from "@/components/service-requirements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pajak Daerah Lainnya",
  description:
    "Pelayanan Pajak Daerah Lainnya di Badan Pendapatan Daerah Kabupaten Garut, meliputi pendaftaran wajib pajak, pendaftaran objek pajak, dan pelaporan pajak.",
  path: "/pajak-daerah-lainnya",
  keywords: [
    "pajak daerah lainnya Garut",
    "layanan pajak daerah",
    "SAPADA Garut",
  ],
});

export default function PajakDaerahLainnya() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Pajak Daerah Lainnya</h1>
        <p className="max-w-prose text-muted-foreground">
          Pelayanan Pajak Daerah Lainnya di Badan Pendapatan Daerah Kabupaten
          Garut antara lain pendaftaran Wajib Pajak, pendaftaran Objek Pajak,
          dan pelaporan pajak.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Layanan pajak daerah Kabupaten Garut"
          />
        </div>
      </section>
      <RequirementSections sections={Object.values(data)} />
    </article>
  );
}
