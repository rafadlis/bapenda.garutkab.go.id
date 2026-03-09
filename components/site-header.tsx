import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

export function SiteHeader() {
    const links = [
        {
            label: "Profil",
            href: "/profil",
            children: [
                {
                    label: "Tentang Kami",
                    href: "/profil",
                },
                {
                    label: "Struktur Organisasi",
                    href: "/profil/struktur-organisasi",
                },
                {
                    label: "Tugas dan Fungsi",
                    href: "/profil/tugas-fungsi",
                },
            ],
        },
        {
            label: "Layanan Pajak",
            href: "/",
            children: [
                {
                    label: "Maklumat Pelayanan",
                    href: "/layanan-pajak/maklumat-pelayanan",
                },
                {
                    label: "Pajak Daerah Lainnya",
                    href: "/layanan-pajak/pajak-lainnya",
                },
                { label: "PBB-P2", href: "/layanan-pajak/PBB-P2" },
                { label: "BPHTB", href: "/layanan-pajak/BPHTB" },
            ],
        },
        {
            label: "Informasi Publik",
            href: "/informasi-publik",
            children: [
                { label: "Berita & Pengumuman", href: "/informasi-publik/pengumuman-berita" },
                {
                    label: "Regulasi & Peraturan",
                    href: "/informasi-publik/regulasi-peraturan",
                },
                {
                    label: "Rencana Kerja",
                    href: "/informasi-publik/rencana-kerja",
                },
                {
                    label: "Laporan Kinerja",
                    href: "/informasi-publik/laporan-kinerja",
                },
                {
                    label: "Panduan Pajak Hotel & Restoran",
                    href: "/informasi-publik/panduan-phr",
                },
                {
                    label: "Kebijakan Privasi",
                    href: "informasi-publik/kebijakan-privasi",
                },
                { label: "Download", href: "informasi-publik/download" },
            ],
        },
        { label: "Tugas", href: "/tugas" },
        { label: "Perubahan", href: "/perubahan" },
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
                            src="/LogoBappenda.png"
                            alt="Logo BAPENDA Garut"
                            fill
                            priority
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col justify-center leading-none">
                        <span className="font-black text-lg tracking-tighter sm:text-xl">
                            BAPENDA
                        </span>
                        <span className="hidden text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] sm:inline">
                            Kabupaten Garut
                        </span>
                    </div>
                </Link>
                <nav className="flex items-center justify-end gap-6 text-sm [&_li]:list-none">
                    {links.map((item) =>
                        item.children ? (
                            <DropdownMenu key={item.label}>
                                <DropdownMenuTrigger className="cursor-pointer outline-none hover:text-primary flex items-center gap-1">
                                    {item.label}
                                    <CaretDownIcon className="h-4 w-4" />
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-48">
                                    {item.children.map((sub) => (
                                        <DropdownMenuItem
                                            key={sub.label}
                                            render={<Link href={sub.href} />}
                                        >
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
                        ),
                    )}
                    <li>
                        <Button>Tanya Kami</Button>
                    </li>
                </nav>
            </div>
        </header>
    );
}
