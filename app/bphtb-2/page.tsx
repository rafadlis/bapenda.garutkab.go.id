import Link from "next/link";
import data from "@/app/content/BPHTB.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { RequirementSections } from "@/components/service-requirements";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BPHTB",
  description:
    "Layanan BPHTB Badan Pendapatan Daerah Kabupaten Garut untuk pembayaran, validasi berkas, pencarian transaksi, dan kalkulator BPHTB online.",
  path: "/bphtb-2",
  keywords: ["BPHTB Garut", "SIP BPHTB", "kalkulator BPHTB"],
});

export default function Bphtb() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">BPHTB</h1>
        <p className="max-w-prose text-muted-foreground">
          Layanan BPHTB meliputi pembayaran dan validasi berkas BPHTB dengan
          dokumen pendukung atas peralihan hak.
        </p>
        <div className="not-typography mt-6 flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={
              <Link
                href="https://bphtb.bapenda.garutkab.go.id/auth/check"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            Cari Data Transaksi BPHTB
          </Button>
          <Button
            nativeButton={false}
            render={
              <Link
                href="https://bphtb.bapenda.garutkab.go.id/auth/calculator"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
            variant="outline"
          >
            Kalkulator BPHTB
          </Button>
        </div>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Layanan BPHTB online Kabupaten Garut"
          />
        </div>
      </section>
      <RequirementSections sections={Object.values(data)} />
    </article>
  );
}
