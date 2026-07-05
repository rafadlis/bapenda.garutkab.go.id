import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/rencana-kerja.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rencana Kerja",
  description:
    "Akses rencana kerja dan rencana strategis BAPENDA Kabupaten Garut untuk melihat arah kebijakan, program prioritas, dan target pendapatan daerah.",
  path: "/informasi-publik/rencana-kerja",
  keywords: [
    "rencana kerja BAPENDA",
    "renstra BAPENDA Garut",
    "program pajak daerah Garut",
  ],
});

export default function RencanaKerja() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Rencana Kerja</h1>
        <p className="max-w-prose text-muted-foreground">
          Rencana Strategis dan Rencana Kerja Badan Pendapatan Daerah Kabupaten
          Garut sebagai arah kebijakan pengelolaan pendapatan daerah.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="ultrawide"
            label="Sampul dokumen Renstra & Renja BAPENDA"
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
                <h3 className="font-semibold text-lg leading-snug">
                  {item.dokumen}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  Publish: <span className="font-mono">{item.publish}</span>
                </p>
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
                  File tidak tersedia
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
