import data from "@/app/content/rencana-kerja.json";
import { DocumentSection, type DocumentListItem } from "@/components/document-list";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rencana Kerja",
  description:
    "Rencana Strategis dan Rencana Kerja Badan Pendapatan Daerah Kabupaten Garut.",
  path: "/rencana-kerja",
  keywords: ["rencana kerja BAPENDA", "Renstra BAPENDA Garut"],
});

const documents: DocumentListItem[] = data.map((item) => ({
  file: item.file,
  id: item.id,
  meta: `Publish: ${item.publish}`,
  title: item.dokumen,
}));

export default function RencanaKerja() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Rencana Kerja</h1>
        <p className="max-w-prose text-muted-foreground">
          Rencana Strategis dan Rencana Kerja Badan Pendapatan Daerah Kabupaten
          Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Dokumen Renstra dan Renja BAPENDA"
          />
        </div>
      </section>
      <DocumentSection items={documents} />
    </article>
  );
}
