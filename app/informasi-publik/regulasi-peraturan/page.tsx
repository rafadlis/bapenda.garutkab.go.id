import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/regulasi-peraturan.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Regulasi dan Peraturan Pajak Daerah",
  description:
    "Kumpulan regulasi dan peraturan perpajakan daerah di BAPENDA Kabupaten Garut untuk mendukung kepatuhan, pemahaman hukum, dan keterbukaan informasi publik.",
  path: "/informasi-publik/regulasi-peraturan",
  keywords: [
    "regulasi pajak Garut",
    "peraturan pajak daerah",
    "dokumen hukum BAPENDA",
  ],
});

export default function RegulasiPeraturan() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Regulasi dan Peraturan</h1>
        <p className="max-w-prose text-muted-foreground">
          Peraturan perundang-undangan dalam pemungutan dan pengelolaan Pajak
          Daerah dan Retribusi Daerah Kabupaten Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Dokumen peraturan perundang-undangan"
          />
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Dokumen</h2>
          <Badge className="font-mono">{data.length}</Badge>
        </span>
        <ul className="not-typography divide mt-8 grid grid-cols-1 list-none divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          {data.map((item) => (
            <li className="flex flex-col gap-3 p-6" key={item.id}>
              <div>
                <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                  {item.jenis} · {item.nomor}
                </span>
                <h3 className="mt-1 font-semibold text-base leading-snug">
                  {item.tentang}
                </h3>
              </div>
              {item.file ? (
                <div className="flex flex-wrap gap-4 pt-2 text-sm">
                  <a
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                    href={item.file.previewUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <EyeIcon className="size-4" />
                    Preview
                  </a>
                  <a
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                    href={item.file.downloadUrl}
                  >
                    <DownloadIcon className="size-4" />
                    Unduh
                  </a>
                </div>
              ) : (
                <span className="text-muted-foreground text-sm italic">
                  Tidak ada file
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
