import { CalendarIcon, TagIcon, UserCircleIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Bapenda Garut Gelar Rapat Daring Bersama BRIN Bahas Dukungan Data Pemetaan untuk Pengembangan SAPADA",
  description:
    "Bapenda Kabupaten Garut menggelar rapat koordinasi daring bersama BRIN membahas kebutuhan data pemetaan untuk pengembangan SAPADA.",
  path: "/bapenda-garut-gelar-rapat-daring-bersama-brin-bahas-dukungan-data-pemetaan-untuk-pengembangan-sapada",
  keywords: ["Bapenda Garut", "BRIN", "SAPADA", "data pemetaan pajak"],
});

export default function ArticleBrinSapada() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <Link
          className="not-typography mb-6 text-muted-foreground text-sm hover:text-primary"
          href="/berita-pengumuman"
        >
          Kembali ke Berita & Pengumuman
        </Link>
        <h1 className="max-w-4xl">
          Bapenda Garut Gelar Rapat Daring Bersama BRIN Bahas Dukungan Data
          Pemetaan untuk Pengembangan SAPADA
        </h1>
        <div className="not-typography mt-4 flex flex-wrap gap-3 text-muted-foreground text-sm">
          <Badge variant="secondary">
            <TagIcon className="size-3" />
            <span className="ml-1">Berita</span>
          </Badge>
          <span className="inline-flex items-center gap-1 font-mono">
            <CalendarIcon className="size-3" />
            24 Juni 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <UserCircleIcon className="size-4" />
            Bapenda
          </span>
        </div>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Rapat daring BAPENDA Garut bersama BRIN"
          />
        </div>
      </section>

      <section className="mb-16 max-w-prose">
        <p>
          Garut, 24 Juni 2026 - Badan Pendapatan Daerah (Bapenda) Kabupaten
          Garut menggelar rapat koordinasi secara daring bersama Badan Riset dan
          Inovasi Nasional (BRIN) pada Rabu (24/6/2026). Pertemuan tersebut
          membahas permintaan dan kebutuhan data pemetaan yang akan digunakan
          dalam pengembangan Sistem Aplikasi Pajak Daerah (SAPADA) Kabupaten
          Garut.
        </p>
        <p>
          Rapat ini menjadi bagian dari upaya Bapenda dalam memperkuat
          transformasi digital pelayanan dan pengelolaan pajak daerah melalui
          pemanfaatan teknologi informasi berbasis data spasial. Bapenda dan
          BRIN mendiskusikan aspek teknis terkait ketersediaan, validasi, serta
          integrasi data pemetaan yang dibutuhkan untuk mendukung optimalisasi
          SAPADA.
        </p>
        <p>
          Kolaborasi dengan BRIN menjadi langkah strategis untuk meningkatkan
          kualitas data dan sistem informasi perpajakan daerah. Dengan dukungan
          data pemetaan yang akurat dan terintegrasi, SAPADA diharapkan dapat
          memberikan kemudahan dalam proses pendataan, pemantauan, analisis
          potensi, hingga pelayanan kepada wajib pajak.
        </p>
        <p>
          Melalui sinergi antara pemerintah daerah dan lembaga riset nasional,
          pengembangan SAPADA diharapkan mampu menjadi instrumen yang efektif
          dalam mendukung tata kelola pendapatan daerah yang lebih modern,
          transparan, dan akuntabel.
        </p>
        <p>
          Bapenda Kabupaten Garut terus berkomitmen melakukan inovasi dalam
          pengelolaan pajak daerah guna meningkatkan kualitas pelayanan publik
          serta mengoptimalkan penerimaan daerah demi mendukung pembangunan
          Kabupaten Garut yang berkelanjutan.
        </p>
      </section>
    </article>
  );
}
