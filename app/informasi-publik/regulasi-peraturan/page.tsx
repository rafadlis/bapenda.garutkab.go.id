import data from "@/app/content/regulasi-peraturan.json";
import { DownloadIcon, EyeIcon } from "@phosphor-icons/react";

export const PERATURAN_REGULASI = data;
export default function RegulasiPeraturan() {
    return (
        <>
            <main className="min-h-screen flex flex-col max-w-7xl mx-auto mt-20 px-6 space-y-10">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Regulasi dan Peraturan
                    </h1>
                    <div className="w-20 h-1 rounded-full bg-blue-600"></div>
                </div>
                <p className="text-lg text-gray-600">
                    Peraturan Perundang-undangan dalam pemungutan dan
                    pengelolaan Pajak Daerah dan Retribusi Daerah.
                </p>
                <section>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {PERATURAN_REGULASI.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[4fr_1fr] items-center justify-between rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 transition-colors duration-200 hover:border-l-primary hover:bg-muted"
                            >
                                {/* {Left Konten} */}
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {item.jenis} Nomor {item.nomor}
                                    </h2>
                                    <p className="text-md text-muted-foreground">
                                        {item.tentang}
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
