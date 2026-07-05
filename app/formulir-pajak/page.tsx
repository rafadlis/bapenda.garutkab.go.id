import Link from "next/link";
import forms from "@/app/content/formulir-pajak.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Formulir Pajak",
  description:
    "Daftar formulir pajak yang tercantum dalam Lampiran Peraturan Bupati Garut Nomor 44 Tahun 2024.",
  path: "/formulir-pajak",
  keywords: ["formulir pajak Garut", "download formulir pajak daerah"],
});

export default function FormulirPajak() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Formulir Pajak</h1>
        <p className="max-w-prose text-muted-foreground">
          Formulir Pajak tercantum dalam Lampiran Peraturan Bupati Garut Nomor
          44 Tahun 2024 tentang Tata Cara Pemungutan Pajak Daerah.
        </p>
        <div className="not-typography mt-6">
          <Button
            nativeButton={false}
            render={
              <Link
                href="https://drive.google.com/file/d/117KRaLXqHu3TXiNezV7M-hHv4RsABVWS/preview"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            Unduh Lampiran Perbup 44 Tahun 2024
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Daftar Formulir</h2>
          <Badge className="font-mono">{forms.length}</Badge>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2 lg:grid-cols-3">
          {forms.map((form, index) => (
            <div className="flex gap-4 p-6" key={form}>
              <span className="font-mono text-muted-foreground text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground leading-relaxed">{form}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
