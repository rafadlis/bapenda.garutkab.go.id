import data from "@/app/content/regulasi-peraturan.json";
import { DocumentSection, type DocumentListItem } from "@/components/document-list";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Peraturan Pajak",
  description:
    "Kumpulan peraturan pajak daerah yang dapat diunduh melalui situs resmi BAPENDA Kabupaten Garut.",
  path: "/peraturan-pajak",
  keywords: ["peraturan pajak Garut", "download peraturan pajak daerah"],
});

const documents: DocumentListItem[] = data.map((item) => ({
  file: item.file,
  id: item.id,
  meta: `${item.jenis} · ${item.nomor}`,
  title: item.tentang,
}));

export default function PeraturanPajak() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Peraturan Pajak</h1>
        <p className="max-w-prose text-muted-foreground">
          Peraturan Perundang-undangan dalam pemungutan dan pengelolaan Pajak
          Daerah dan Retribusi Daerah.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Arsip peraturan pajak daerah"
          />
        </div>
      </section>
      <DocumentSection items={documents} />
    </article>
  );
}
