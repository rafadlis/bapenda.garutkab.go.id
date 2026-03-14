import {
  BookOpenTextIcon,
  BuildingsIcon,
  CaretDownIcon,
  ClipboardTextIcon,
  DownloadSimpleIcon,
  FileArrowDownIcon,
  FileTextIcon,
  FlagBannerIcon,
  HandshakeIcon,
  InfoIcon,
  ListIcon,
  MegaphoneSimpleIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type MenuIcon = ComponentType<{ className?: string }>;

type MenuChild = {
  label: string;
  href: string;
  icon: MenuIcon;
};

type MenuItem = {
  label: string;
  href: string;
  icon: MenuIcon;
  children?: MenuChild[];
};

function AskUsButton({ className }: { className?: string }) {
  return <Button className={className}>Tanya Kami</Button>;
}

export function SiteHeader() {
  const links: MenuItem[] = [
    {
      label: "Profil",
      href: "/profil",
      icon: UserCircleIcon,
      children: [
        {
          label: "Tentang Kami",
          href: "/profil",
          icon: InfoIcon,
        },
        {
          label: "Struktur Organisasi",
          href: "/profil/struktur-organisasi",
          icon: UsersThreeIcon,
        },
        {
          label: "Tugas dan Fungsi",
          href: "/profil/tugas-fungsi",
          icon: ClipboardTextIcon,
        },
      ],
    },
    {
      label: "Layanan Pajak",
      href: "/",
      icon: BuildingsIcon,
      children: [
        {
          label: "Maklumat Pelayanan",
          href: "/layanan-pajak/maklumat-pelayanan",
          icon: HandshakeIcon,
        },
        {
          label: "Pajak Daerah Lainnya",
          href: "/layanan-pajak/pajak-lainnya",
          icon: FileTextIcon,
        },
        {
          label: "PBB-P2",
          href: "/layanan-pajak/PBB-P2",
          icon: FileArrowDownIcon,
        },
        {
          label: "BPHTB",
          href: "/layanan-pajak/BPHTB",
          icon: ShieldCheckIcon,
        },
      ],
    },
    {
      label: "Informasi Publik",
      href: "/informasi-publik",
      icon: BookOpenTextIcon,
      children: [
        {
          label: "Berita & Pengumuman",
          href: "/informasi-publik/pengumuman-berita",
          icon: MegaphoneSimpleIcon,
        },
        {
          label: "Regulasi & Peraturan",
          href: "/informasi-publik/regulasi-peraturan",
          icon: FileTextIcon,
        },
        {
          label: "Rencana Kerja",
          href: "/informasi-publik/rencana-kerja",
          icon: ClipboardTextIcon,
        },
        {
          label: "Laporan Kinerja",
          href: "/informasi-publik/laporan-kinerja",
          icon: FileArrowDownIcon,
        },
        {
          label: "Panduan Pajak Hotel & Restoran",
          href: "/informasi-publik/panduan-phr",
          icon: BookOpenTextIcon,
        },
        {
          label: "Kebijakan Privasi",
          href: "/informasi-publik/kebijakan-privasi",
          icon: ShieldCheckIcon,
        },
        {
          label: "Download",
          href: "/informasi-publik/download",
          icon: DownloadSimpleIcon,
        },
      ],
    },
    { label: "Tugas", href: "/tugas", icon: ClipboardTextIcon },
    { label: "Perubahan", href: "/perubahan", icon: FlagBannerIcon },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Beranda BAPENDA Garut"
          className="flex items-center gap-3"
          href="/"
        >
          <div className="relative h-10 w-10 overflow-hidden sm:h-11 sm:w-11">
            <Image
              alt="Logo BAPENDA Garut"
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              fill
              priority
              src="/LogoBappenda.png"
            />
          </div>
        </Link>
        <nav className="hidden items-center justify-end gap-6 text-sm md:flex [&_li]:list-none">
          {links.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1.5 outline-none hover:text-primary">
                  {item.label}
                  <CaretDownIcon className="size-3 text-muted-foreground" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56">
                  {item.children.map((sub) => (
                    <DropdownMenuItem
                      className="gap-2"
                      key={sub.label}
                      render={<Link href={sub.href} />}
                    >
                      <sub.icon className="size-4 text-muted-foreground" />
                      {sub.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <li key={item.label}>
                <Link
                  className="transition-colors duration-300 hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li>
            <AskUsButton />
          </li>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Buka menu navigasi"
            className="flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          >
            <ListIcon className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-72 max-w-[calc(100vw-2rem)] md:hidden"
          >
            {links.map((item, index) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
                    {item.label}
                  </p>
                  {item.children.map((sub) => (
                    <DropdownMenuItem
                      className="gap-2 pl-4"
                      key={sub.label}
                      render={<Link href={sub.href} />}
                    >
                      <sub.icon className="size-4 text-muted-foreground" />
                      {sub.label}
                    </DropdownMenuItem>
                  ))}
                  {index < links.length - 1 ? <DropdownMenuSeparator /> : null}
                </div>
              ) : (
                <DropdownMenuItem
                  className="gap-2"
                  key={item.label}
                  render={<Link href={item.href} />}
                >
                  <item.icon className="size-4 text-muted-foreground" />
                  {item.label}
                </DropdownMenuItem>
              )
            )}
            <DropdownMenuSeparator />
            <div className="p-1 pt-2">
              <AskUsButton className="w-full" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
