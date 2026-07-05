import data from "@/app/content/panduan.json";
import { DocumentSection, type DocumentListItem } from "@/components/document-list";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Panduan",
  description:
    "Panduan layanan digital BAPENDA Kabupaten Garut, termasuk Panduan BPHTB Online dan Panduan E-SPTPD.",
  path: "/panduan",
  keywords: ["panduan BPHTB Online", "panduan E-SPTPD", "BAPENDA Garut"],
});

const documents: DocumentListItem[] = data.map((item) => ({
  file: item.file,
  id: item.id,
  title: item.title,
}));

export default function Panduan() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Panduan</h1>
        <p className="max-w-prose text-muted-foreground">
          Panduan penggunaan layanan online BAPENDA Kabupaten Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Panduan layanan online BAPENDA"
          />
        </div>
      </section>
      <DocumentSection items={documents} title="Panduan" />
    </article>
  );
}
