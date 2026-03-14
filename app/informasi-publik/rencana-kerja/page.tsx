import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/rencana-kerja.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rencana Kerja",
  description:
    "Akses rencana kerja dan rencana strategis BAPENDA Kabupaten Garut untuk melihat arah kebijakan, program prioritas, dan target pendapatan daerah.",
  path: "/informasi-publik/rencana-kerja",
  keywords: [
    "rencana kerja BAPENDA",
    "renstra BAPENDA Garut",
    "program pajak daerah Garut",
  ],
});

export const RENCANA_KERJA = data;
export default function RencanaKerja() {
  return (
    <>
      <main className="mx-auto mt-20 flex min-h-screen max-w-7xl flex-col space-y-10 px-6">
        <div className="space-y-3">
          <h1 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl">
            Rencana Kerja
          </h1>
          <div className="h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <p className="text-gray-600 text-lg">
          Rencana Strategis dan Rencana Kerja Badan Pendapatan Daerah
        </p>
        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {RENCANA_KERJA.map((item) => (
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
                    File tidak tersedia
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
