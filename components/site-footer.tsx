import {
  Bug,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquareMore,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-semibold text-sm">
              Badan Pendapatan Daerah
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              Pemerintah Kabupaten Garut
            </p>
            <p className="mt-3 max-w-prose text-muted-foreground text-sm">
              Melayani masyarakat dalam pengelolaan pendapatan daerah untuk
              pembangunan Kabupaten Garut yang lebih baik.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm">Tautan Cepat</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Layanan Pajak
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Panduan
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 text-muted-foreground transition group-hover:text-foreground"
                  />
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm">Hubungi Kami</p>
            <address className="mt-3 text-muted-foreground text-sm not-italic">
              <span className="inline-flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                Jl. Otista No.278, Sukagalih, Kec. Tarogong Kidul, Kabupaten
                Garut, Jawa Barat 44151
              </span>
            </address>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm">
              <li className="inline-flex items-center gap-2">
                <MessagesSquare
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />{" "}
                <Link href="https://wa.me/6281315265538" target="_blank">
                  <span className="rounded-sm border px-1 text-xs">WA</span>{" "}
                  (0813) 1526 5538
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <Link
                  className="hover:underline"
                  href="mailto:admin@bapenda.garutkab.go.id"
                >
                  admin@bapenda.garutkab.go.id
                </Link>
              </li>
              <li className="mt-2 inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="size-4 text-primary" />{" "}
                Senin - Jumat: 08.00 - 16.00 WIB
              </li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              <Button asChild size="sm" variant="outline">
                <Link href="#">
                  <MessageSquareMore
                    aria-hidden="true"
                    className="size-4 shrink-0"
                  />
                  Kritik & Saran
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="#">
                  <Bug aria-hidden="true" className="size-4 shrink-0" />
                  Lapor Bug
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-start justify-between gap-2 text-muted-foreground text-xs sm:flex-row">
            <p className="inline-flex items-center gap-1">
              ©2025 Badan Pendapatan Daerah Kabupaten Garut. Open Source
            </p>
            <div className="flex gap-3">
              <Link
                className="inline-flex items-center gap-1 hover:underline"
                href="#"
              >
                Kebijakan Privasi
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                className="inline-flex items-center gap-1 hover:underline"
                href="#"
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
