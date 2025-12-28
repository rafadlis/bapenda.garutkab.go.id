import data from "@/app/content/rencana-kerja.json";
import { Download, Eye } from "lucide-react";

export const RENCANA_KERJA = data;
export default function RencanaKerja() {
    return (
        <>
            <main className="min-h-screen flex flex-col max-w-7xl mx-auto mt-20 px-6 space-y-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-start">
                    Rencana Kerja
                </h1>
                <p className="text-lg text-gray-600">
                    Rencana Strategis dan Rencana Kerja Badan Pendapatan Daerah
                </p>
                <section>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {RENCANA_KERJA.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[4fr_1fr] items-center justify-between rounded-lg border border-border p-4 transition-colors duration-200 hover:border-primary/50 hover:bg-muted"
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
                                            <Eye className="h-4 w-4" />
                                            Preview
                                        </a>
                                        <a
                                            href={item.file.downloadUrl}
                                            className=" flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Download className="h-4 w-4" />
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
