import data from "@/app/content/pajak-lainnya.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Layanan Pajak Lainnya",
  description:
    "Informasi layanan pajak lainnya di BAPENDA Kabupaten Garut, termasuk persyaratan untuk berbagai jenis pajak daerah selain PBB-P2 dan BPHTB.",
  path: "/layanan-pajak/pajak-lainnya",
  keywords: [
    "pajak lainnya Garut",
    "layanan pajak daerah Garut",
    "jenis pajak daerah Garut",
  ],
});

export default function PajakLainnya() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Pajak Lainnya</h1>
        <p className="max-w-prose text-muted-foreground">
          Layanan pajak daerah selain PBB-P2 dan BPHTB yang dikelola Badan
          Pendapatan Daerah Kabupaten Garut beserta persyaratannya.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Ilustrasi ragam pajak daerah Kabupaten Garut"
          />
        </div>
      </section>

      {Object.entries(data).map(([key, layanan]) => (
        <section className="mb-16" key={key}>
          <span className="flex items-center justify-center gap-3">
            <h2 className="border-none text-center">{layanan.title}</h2>
            <Badge className="font-mono">{layanan.requirements.length}</Badge>
          </span>
          <p className="mx-auto max-w-prose text-center text-muted-foreground">
            {layanan.description}
          </p>
          <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2 lg:grid-cols-3">
            {layanan.requirements.map((item, index) => (
              <div className="flex gap-4 p-6" key={item}>
                <span className="font-mono text-muted-foreground text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
