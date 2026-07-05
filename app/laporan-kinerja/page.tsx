import data from "@/app/content/laporan-kinerja.json";
import { DocumentSection, type DocumentListItem } from "@/components/document-list";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Laporan Kinerja",
  description:
    "Laporan Kinerja Instansi Pemerintah (LKIP) Badan Pendapatan Daerah Kabupaten Garut.",
  path: "/laporan-kinerja",
  keywords: ["laporan kinerja BAPENDA", "LKIP BAPENDA Garut"],
});

const documents: DocumentListItem[] = data.map((item) => ({
  file: item.file,
  id: item.id,
  meta: `Publish: ${item.publish}`,
  title: item.dokumen,
}));

export default function LaporanKinerja() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Laporan Kinerja</h1>
        <p className="max-w-prose text-muted-foreground">
          Laporan Kinerja Instansi Pemerintah (LKIP) Badan Pendapatan Daerah.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Dokumen LKIP BAPENDA Kabupaten Garut"
          />
        </div>
      </section>
      <DocumentSection items={documents} />
    </article>
  );
}
