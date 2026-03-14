import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/pajak-lainnya.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Layanan Pajak Lainnya",
  description:
    "Informasi layanan pajak lainnya di BAPENDA Kabupaten Garut, termasuk persyaratan untuk berbagai jenis pajak daerah selain PBB-P2 dan BPHTB.",
  path: "/layanan-pajak/pajak-lainnya",
  keywords: [
    "pajak lainnya Garut",
    "layanan pajak daerah Garut",
    "jenis pajak daerah Garut",
  ],
});

export default function PajakLainnya() {
  return (
    <main className="mx-auto mt-20 flex min-h-screen max-w-7xl flex-col items-center space-y-10 px-6">
      <h1 className="text-center font-bold text-3xl text-gray-900 md:text-4xl">
        Pajak Lainnya
      </h1>
      <div className="h-1 w-24 rounded-full bg-blue-600" />

      {Object.entries(data).map(([key, layanan]) => (
        <section key={key}>
          <div className="mb-6 h-px w-full bg-gray-200" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_3fr]">
            {/* KIRI */}
            <div className="flex flex-col gap-5 rounded-xl p-6">
              <h2 className="mb-2 font-semibold text-2xl">{layanan.title}</h2>
              <p className="text-gray-600 text-lg">{layanan.description}</p>
            </div>

            {/* KANAN */}
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
              {layanan.requirements.map((item, index) => (
                <li className="flex items-start gap-3" key={index}>
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 h-px w-full bg-gray-200" />
        </section>
      ))}
    </main>
  );
}
