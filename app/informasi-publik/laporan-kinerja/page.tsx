import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/laporan-kinerja.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Laporan Kinerja",
  description:
    "Akses laporan kinerja dan dokumen LKIP BAPENDA Kabupaten Garut sebagai bentuk akuntabilitas serta transparansi kinerja instansi pemerintah daerah.",
  path: "/informasi-publik/laporan-kinerja",
  keywords: [
    "laporan kinerja BAPENDA",
    "LKIP Garut",
    "informasi publik BAPENDA",
  ],
});

export const LAPORAN_KINERJA = data;
export default function laporanKinerja() {
  return (
    <>
      <main className="mx-auto mt-20 flex min-h-screen max-w-7xl flex-col space-y-10 px-6">
        <div className="space-y-3">
          <h1 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl">
            Laporan Kinerja
          </h1>
          <div className="h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <p className="text-gray-600 text-lg">
          Laporan Kinerja Instansi Pemerintah (LKIP) Badan Pendapatan Daerah.
        </p>
        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {LAPORAN_KINERJA.map((item) => (
              <div
                className="grid grid-cols-[4fr_1fr] items-center justify-between rounded-lg border-blue-600 border-l-4 bg-blue-50 p-4 transition-colors duration-200 hover:border-l-primary hover:bg-muted"
                key={item.id}
              >
                {/* {Left Konten} */}
                <div>
                  <h2 className="font-semibold text-lg">{item.dokumen}</h2>
                  <p className="text-muted-foreground text-sm">
                    Publish : {item.publish}
                  </p>
                </div>

                {item.file ? (
                  <div className="flex flex-col items-center gap-3">
                    <a
                      className="flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-primary"
                      href={item.file.previewUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <EyeIcon className="h-4 w-4" />
                      Preview
                    </a>
                    <a
                      className="flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-primary"
                      href={item.file.downloadUrl}
                    >
                      <DownloadIcon className="h-4 w-4" />
                      <span>Unduh</span>
                    </a>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm italic">
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
