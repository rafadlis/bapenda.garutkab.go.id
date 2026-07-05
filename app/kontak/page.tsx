import {
  ChatCircleDotsIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kontak & Pengaduan",
  description:
    "Kontak konsultasi, pelayanan, dan pengaduan Badan Pendapatan Daerah Kabupaten Garut.",
  path: "/kontak",
  keywords: ["kontak BAPENDA Garut", "pengaduan pajak Garut", "SP4N Lapor"],
});

const contacts = [
  {
    title: "WhatsApp",
    value: "0823 1551 9900",
    href: "https://wa.me/6282315519900",
    icon: ChatCircleDotsIcon,
  },
  {
    title: "Email",
    value: "bapenda@garutkab.go.id",
    href: "mailto:bapenda@garutkab.go.id",
    icon: EnvelopeSimpleIcon,
  },
  {
    title: "SP4N Lapor",
    value: "lapor.go.id",
    href: "https://www.lapor.go.id/",
    icon: ChatCircleDotsIcon,
  },
];

export default function Kontak() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Kontak & Pengaduan</h1>
        <p className="max-w-prose text-muted-foreground">
          Layanan konsultasi, pelayanan, dan pengaduan dapat dilakukan melalui
          kanal online dan kantor pelayanan BAPENDA Kabupaten Garut.
        </p>
      </section>

      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Online</h2>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                className="group flex gap-4 p-6 transition-colors hover:bg-muted/50"
                href={contact.href}
                key={contact.title}
                rel="noopener noreferrer"
                target={contact.href.startsWith("http") ? "_blank" : undefined}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Offline</h2>
        </span>
        <div className="not-typography rounded-md border p-6">
          <div className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
              <MapPinIcon aria-hidden="true" className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Kantor Pelayanan Badan Pendapatan Daerah
              </h3>
              <p className="mt-2 text-muted-foreground">
                Jl. Otista No.278, Sukagalih, Kec. Tarogong Kidul, Kabupaten
                Garut, Jawa Barat 44151
              </p>
              <div className="mt-4">
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href="https://maps.google.com/?q=Jl.%20Otista%20No.278%2C%20Sukagalih%2C%20Tarogong%20Kidul%2C%20Garut"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  }
                  variant="outline"
                >
                  Buka Peta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
