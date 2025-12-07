import Link from "next/link";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function SiteHeader() {
    const links = [
        {
            label: "Profil",
            href: "/profil",
            children: [
                { label: "Tentang Kami", href: "/profil/tentang-kami" },
                {
                    label: "Struktur Organisasi",
                    href: "/profil/struktur-organisasi",
                },
                { label: "Tugas dan Fungsi", href: "/profil/tugas-fungsi" },
            ],
        },
        {
            label: "Layanan Pajak",
            href: "/layanan",
            children: [
                {
                    label: "Maklumat Pelayanan",
                    href: "/profil/maklumat-pelayanan",
                },
                {
                    label: "Pajak Daerah Lainnya",
                    href: "/profil/pajak-daerah-lainnya",
                },
                { label: "PBB-P2", href: "/profil/PBB-P2" },
                { label: "BPHTP", href: "/profil/BPHTB" },
            ],
        },
        {
            label: "Informasi Publik",
            href: "/informasi-publik",
            children: [
                { label: "Berita & Pengumuman", href: "/berita" },
                { label: "Regulasi & Peraturan", href: "/regulasi" },
                { label: "Rencana Kerja", href: "/rencana-kerja" },
                { label: "Laporan Kinerja", href: "/laporan-kinerja" },
                {
                    label: "Panduan Pajak Hotel & Restoran",
                    href: "/panduan-phr",
                },
                { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
                { label: "Download", href: "/download" },
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
                    <span className="font-black text-xl leading-tight">
                        BAPENDA
                    </span>
                    <span className="hidden text-muted-foreground text-xs sm:inline">
                        Kabupaten Garut
                    </span>
                </Link>
                <nav className="flex items-center justify-end gap-6 text-sm [&_li]:list-none">
                    {links.map((item) =>
                        item.children ? (
                            <DropdownMenu key={item.label}>
                                <DropdownMenuTrigger className="cursor-pointer outline-none hover:text-primary">
                                    {item.label}
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-48">
                                    {item.children.map((sub) => (
                                        <DropdownMenuItem
                                            key={sub.label}
                                            asChild
                                        >
                                            <Link href={sub.href}>
                                                {sub.label}
                                            </Link>
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
                        <Button>Tanya Kami</Button>
                    </li>
                </nav>
            </div>
        </header>
    );
}
