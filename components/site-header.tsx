import Link from "next/link";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Beranda BAPENDA Garut"
          className="flex items-center gap-3"
          href="/"
        >
          <span className="font-black text-xl leading-tight">BAPENDA</span>
          <span className="hidden text-muted-foreground text-xs sm:inline">
            Kabupaten Garut
          </span>
        </Link>
        <nav className="flex items-center justify-end gap-6 text-sm [&_li]:list-none">
          {(() => {
            const links: { label: string; href: string }[] = [
              { label: "Profil", href: "/profil" },
              { label: "Layanan", href: "/layanan" },
              { label: "Tugas", href: "/tugas" },
              { label: "Perubahan", href: "/perubahan" },
            ];
            return links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  className="transition-colors duration-300 hover:text-primary"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ));
          })()}
          <li>
            <Button>Tanya Kami</Button>
          </li>
        </nav>
      </div>
    </header>
  );
}
