import data from "@/app/content/PBB-P2.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { RequirementSections } from "@/components/service-requirements";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "PBB-P2",
  description:
    "Pelayanan PBB-P2 di Badan Pendapatan Daerah Kabupaten Garut, termasuk pendaftaran objek baru, mutasi, pengurangan, keberatan, dan pembetulan.",
  path: "/pbb-p2",
  keywords: ["PBB-P2 Garut", "pajak bumi bangunan", "layanan PBB-P2"],
});

export default function PbbP2() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">PBB-P2</h1>
        <p className="max-w-prose text-muted-foreground">
          Pelayanan Pajak Bumi dan Bangunan Perdesaan dan Perkotaan di Badan
          Pendapatan Daerah Kabupaten Garut.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Pajak bumi dan bangunan perdesaan dan perkotaan"
          />
        </div>
      </section>
      <RequirementSections sections={Object.values(data)} />
    </article>
  );
}
