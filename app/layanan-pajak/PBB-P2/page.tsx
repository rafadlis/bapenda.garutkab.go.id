import data from "@/app/content/PBB-P2.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Layanan PBB-P2",
  description:
    "Informasi layanan PBB-P2 BAPENDA Kabupaten Garut mencakup persyaratan, jenis layanan, dan panduan pajak bumi dan bangunan perdesaan serta perkotaan.",
  path: "/layanan-pajak/PBB-P2",
  keywords: ["PBB-P2 Garut", "pajak bumi bangunan Garut", "layanan PBB-P2"],
});

export default function PBBP2() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">PBB-P2</h1>
        <p className="max-w-prose text-muted-foreground">
          Pajak Bumi dan Bangunan Perkotaan dan Perdesaan — pajak atas bumi
          dan/atau bangunan yang dimiliki, dikuasai, atau dimanfaatkan di
          Kabupaten Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Ilustrasi pajak bumi dan bangunan"
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
