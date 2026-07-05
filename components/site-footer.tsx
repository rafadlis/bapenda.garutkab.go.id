import {
  CaretRightIcon,
  ChatCircleDotsIcon,
  ChatsCircleIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-semibold text-sm">
              Bapenda Garut
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              Pemerintah Kabupaten Garut
            </p>
            <p className="mt-3 max-w-prose text-muted-foreground text-sm">
              Mengelola Pendapatan Daerah, khususnya Pajak Daerah dan Retribusi
              Daerah, dengan layanan yang transparan, akuntabel, dan efisien.
            </p>
            <div className="mt-5">
              <p className="font-semibold text-sm">Pelayanan Online</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {[
                  ["e-PAD", "https://epad.bapenda.garutkab.go.id"],
                  ["BPHTB Online", "https://bphtb.bapenda.garutkab.go.id"],
                  [
                    "PBB Tracker",
                    "https://pbb-tracker.bapenda.garutkab.go.id",
                  ],
                ].map(([label, href]) => (
                  <Link
                    className="rounded-md border px-2 py-1 text-muted-foreground transition-colors hover:text-primary"
                    href={href}
                    key={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">Tautan Cepat</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="/tentang"
                >
                  <CaretRightIcon
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="/pajak-daerah-lainnya"
                >
                  <CaretRightIcon
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Layanan Pajak
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="/berita-pengumuman"
                >
                  <CaretRightIcon
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="/panduan"
                >
                  <CaretRightIcon
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Panduan
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="/kontak"
                >
                  <CaretRightIcon
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Kontak & Pengaduan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm">Hubungi Kami</p>
            <address className="mt-3 text-muted-foreground text-sm not-italic">
              <span className="inline-flex items-start gap-2">
                <MapPinIcon
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                Jl. Otista No.278, Sukagalih, Kec. Tarogong Kidul, Kabupaten
                Garut, Jawa Barat 44151
              </span>
            </address>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm">
              <li className="inline-flex items-center gap-2">
                <ChatsCircleIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />{" "}
                <Link href="https://wa.me/6282315519900" target="_blank">
                  <span className="rounded-sm border px-1 text-xs">WA</span>{" "}
                  0823 1551 9900
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <EnvelopeSimpleIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <Link
                  className="hover:underline"
                  href="mailto:bapenda@garutkab.go.id"
                >
                  bapenda@garutkab.go.id
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <EnvelopeSimpleIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <Link
                  className="hover:underline"
                  href="mailto:info@bapenda.garutkab.go.id"
                >
                  info@bapenda.garutkab.go.id
                </Link>
              </li>
              <li className="mt-2 inline-flex items-center gap-2">
                <ClockIcon aria-hidden="true" className="size-4 text-primary" />{" "}
                Senin - Jumat: 08.00 - 16.00 WIB
              </li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              <Button
                nativeButton={false}
                render={<Link href="/kontak" />}
                size="sm"
                variant="outline"
              >
                <ChatCircleDotsIcon
                  aria-hidden="true"
                  className="size-4 shrink-0"
                />
                Kontak Bapenda
              </Button>
              <Button
                nativeButton={false}
                render={
                  <Link
                    href="https://www.lapor.go.id/"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                }
                size="sm"
                variant="outline"
              >
                <ChatCircleDotsIcon
                  aria-hidden="true"
                  className="size-4 shrink-0"
                />
                SP4N Lapor
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-start justify-between gap-2 text-muted-foreground text-xs sm:flex-row">
            <p className="inline-flex items-center gap-1">
              © 2025 Bapenda Garutkab - Managed by. MWP Network
            </p>
            <div className="flex gap-3">
              <Link
                className="inline-flex items-center gap-1 hover:underline"
                href="/kebijakan-privasi"
              >
                Kebijakan Privasi
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                className="inline-flex items-center gap-1 hover:underline"
                href="/regulasi-peraturan-2"
              >
                Informasi Publik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
