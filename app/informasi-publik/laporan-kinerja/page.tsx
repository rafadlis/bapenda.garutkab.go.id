import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/laporan-kinerja.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
	title: "Laporan Kinerja",
	description:
		"Akses laporan kinerja dan dokumen LKIP BAPENDA Kabupaten Garut sebagai bentuk akuntabilitas serta transparansi kinerja instansi pemerintah daerah.",
	path: "/informasi-publik/laporan-kinerja",
	keywords: ["laporan kinerja BAPENDA", "LKIP Garut", "informasi publik BAPENDA"],
});

export const LAPORAN_KINERJA = data;
export default function laporanKinerja() {
    return (
        <>
            <main className="min-h-screen flex flex-col max-w-7xl mx-auto mt-20 px-6 space-y-10">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Laporan Kinerja
                    </h1>
                    <div className="w-20 h-1 rounded-full bg-blue-600"></div>
                </div>

                <p className="text-lg text-gray-600">
                    Laporan Kinerja Instansi Pemerintah (LKIP) Badan Pendapatan
                    Daerah.
                </p>
                <section>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {LAPORAN_KINERJA.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[4fr_1fr] items-center justify-between rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 transition-colors duration-200 hover:border-l-primary hover:bg-muted"
                            >
                                {/* {Left Konten} */}
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {item.dokumen}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Publish : {item.publish}
                                    </p>
                                </div>

                                {item.file ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <a
                                            href={item.file.previewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <EyeIcon className="h-4 w-4" />
                                            Preview
                                        </a>
                                        <a
                                            href={item.file.downloadUrl}
                                            className=" flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <DownloadIcon className="h-4 w-4" />
                                            <span>Unduh</span>
                                        </a>
                                    </div>
                                ) : (
                                    <span className="text-sm text-muted-foreground italic">
                                        Tidak ada file
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
