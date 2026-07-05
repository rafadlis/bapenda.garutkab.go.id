import data from "@/app/content/regulasi-peraturan.json";
import { DocumentSection, type DocumentListItem } from "@/components/document-list";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Regulasi & Peraturan",
  description:
    "Peraturan perundang-undangan dalam pemungutan dan pengelolaan Pajak Daerah dan Retribusi Daerah di Kabupaten Garut.",
  path: "/regulasi-peraturan-2",
  keywords: [
    "regulasi pajak Garut",
    "peraturan pajak daerah",
    "peraturan BAPENDA Garut",
  ],
});

const documents: DocumentListItem[] = data.map((item) => ({
  file: item.file,
  id: item.id,
  meta: `${item.jenis} · ${item.nomor}`,
  title: item.tentang,
}));

export default function RegulasiPeraturan() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Regulasi & Peraturan</h1>
        <p className="max-w-prose text-muted-foreground">
          Peraturan Perundang-undangan dalam pemungutan dan pengelolaan Pajak
          Daerah dan Retribusi Daerah.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Dokumen regulasi pajak daerah"
          />
        </div>
      </section>
      <DocumentSection items={documents} />
    </article>
  );
}
