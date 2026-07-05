import {
  ArrowCircleRightIcon,
  BookOpenTextIcon,
  BuildingsIcon,
  FileArrowDownIcon,
  MegaphoneSimpleIcon,
  QuestionIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bapenda Garut",
  description:
    "Portal resmi Badan Pendapatan Daerah Kabupaten Garut untuk layanan pajak daerah, informasi publik, dokumen, dan pengaduan masyarakat.",
  path: "/",
  keywords: [
    "Bapenda Garut",
    "BAPENDA Kabupaten Garut",
    "SAPADA Garut",
  ],
});

const onlineServices = [
  {
    title: "e-SPTPD Online",
    description: "Pelaporan pajak daerah lebih praktis dengan e-SPTPD Online.",
    href: "https://esptpd.bapenda.garutkab.go.id",
  },
  {
    title: "SIP-BPHTB",
    description: "Pembayaran BPHTB lebih mudah dengan SIP-BPHTB Online.",
    href: "https://bphtb.bapenda.garutkab.go.id",
  },
];

const quickLinks = [
  {
    title: "Pajak Daerah Lainnya",
    description: "Pendaftaran Wajib Pajak, pendaftaran objek, dan pelaporan.",
    href: "/pajak-daerah-lainnya",
    icon: BuildingsIcon,
  },
  {
    title: "PBB-P2",
    description:
      "Layanan PBB-P2 untuk objek baru, mutasi, keberatan, dan pembetulan.",
    href: "/pbb-p2",
    icon: FileArrowDownIcon,
  },
  {
    title: "Berita & Pengumuman",
    description:
      "Informasi terbaru dari Badan Pendapatan Daerah Kabupaten Garut.",
    href: "/berita-pengumuman",
    icon: MegaphoneSimpleIcon,
  },
  {
    title: "Panduan",
    description: "Panduan BPHTB Online dan E-SPTPD untuk wajib pajak.",
    href: "/panduan",
    icon: BookOpenTextIcon,
  },
];

export default function Home() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="flex min-h-[calc(100svh-(var(--spacing)*16))] flex-col justify-center">
        <h1 className="max-w-prose text-center">Bapenda Garut</h1>
        <p className="mx-auto max-w-prose text-center">
          Badan Pendapatan Daerah Kabupaten Garut mengelola Pendapatan Daerah,
          khususnya Pajak Daerah dan Retribusi Daerah, untuk mendukung
          pembangunan Kabupaten Garut yang transparan, akuntabel, dan efisien.
        </p>
        <ButtonGroup className="mx-auto mt-6 flex-wrap justify-center">
          <ButtonGroup>
            <Button nativeButton={false} render={<Link href="/kontak" />}>
              Kontak & Pengaduan
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              nativeButton={false}
              render={
                <Link
                  href="https://esptpd.bapenda.garutkab.go.id"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
              variant="secondary"
            >
              e-SPTPD Online
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/pajak-daerah-lainnya" />}
              variant="outline"
            >
              <QuestionIcon />
              Layanan Pajak
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </section>

      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Pelayanan Online</h2>
          <Badge className="font-mono">{onlineServices.length}</Badge>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          {onlineServices.map((service) => (
            <a
              className="group relative space-y-2 p-6 transition duration-300 hover:z-10 hover:shadow-lg"
              href={service.href}
              key={service.title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm">
                Klik
                <ArrowCircleRightIcon className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Akses Cepat</h2>
          <Badge className="font-mono">{quickLinks.length}</Badge>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className="group space-y-3 p-6 transition duration-300 hover:z-10 hover:shadow-lg"
                href={item.href}
                key={item.title}
              >
                <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
                <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Kabar Terbaru</h2>
          <Badge variant="secondary">24 Juni 2026</Badge>
        </span>
        <div className="not-typography mt-8 overflow-clip rounded-md border">
          <div className="group relative space-y-3 p-6 transition duration-300 hover:bg-muted/40">
            <h3 className="inline-flex items-center gap-2 font-bold text-xl transition-colors duration-300 group-hover:text-primary">
              Bapenda Garut Gelar Rapat Daring Bersama BRIN
              <ArrowCircleRightIcon className="size-6 text-muted-foreground" />
            </h3>
            <p className="max-w-prose text-muted-foreground">
              Bapenda Kabupaten Garut membahas dukungan data pemetaan bersama
              BRIN untuk pengembangan SAPADA.
            </p>
            <Link
              className="absolute inset-0"
              href="/bapenda-garut-gelar-rapat-daring-bersama-brin-bahas-dukungan-data-pemetaan-untuk-pengembangan-sapada"
            >
              <span className="sr-only">Baca berita selengkapnya</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
