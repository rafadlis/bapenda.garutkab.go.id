import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/about.json";
import NilaiData from "@/app/content/nilai-organisasi.json";
import tupoksiBapenda from "@/app/content/tupoksi-bapenda.json";
import { icons } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Profil",
  description:
    "Pelajari profil BAPENDA Kabupaten Garut, visi dan misi, nilai organisasi, serta peran strategis dalam membangun kemandirian fiskal daerah.",
  path: "/profil",
  keywords: [
    "profil BAPENDA",
    "visi misi BAPENDA Garut",
    "kemandirian fiskal Garut",
  ],
});

export default function Profil() {
  return (
    <>
      <main className="flex min-h-screen flex-col gap-10">
        <section className="relative overflow-hidden px-6 pt-32 pb-20">
          <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 font-black text-2xl text-slate-900 tracking-tighter md:text-5xl">
              Membangun Garut Melalui <br />
              <span className="text-blue-600">Kemandirian Fiskal</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-relaxed md:text-xl">
              {data.opening.content}
            </p>
          </div>
        </section>

        {/* Visi Section */}
        <section className="relative bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="mb-8 block font-bold text-blue-400 text-sm uppercase tracking-[0.2em]">
              Visi Utama
            </span>
            <div className="relative">
              <QuotesIcon className="absolute -top-10 -left-4 h-16 w-16 rotate-180 text-white/10" />
              <h2 className="mb-12 font-light text-3xl italic leading-tight md:text-4xl">
                "{data.Visi.content}"
              </h2>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-16 border-white/10 border-t pt-16 text-center md:grid-cols-3">
              {data.Visi.list.map((item) => {
                const Icon = icons[item.icons as keyof typeof icons];
                return (
                  <div
                    className="group flex flex-col items-center"
                    key={item.id}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-blue-900/20 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      {Icon && <Icon size={32} strokeWidth={1.5} />}
                    </div>

                    <div className="max-w-[280px] space-y-3">
                      <p className="font-medium text-base text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 h-1 w-8 rounded-full bg-blue-600/30 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Misi Section */}
        <section className="relative overflow-hidden bg-white py-32">
          <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-50 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-24 space-y-4 text-center">
              <h2 className="font-black text-3xl text-slate-900 tracking-tight md:text-5xl">
                {data.Misi.heading}
              </h2>
              <div className="mx-auto h-1.5 w-20 rounded-full bg-blue-600" />
              <p className="mx-auto max-w-2xl text-lg text-slate-500">
                {data.Misi.content}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
              {data.Misi.list.map((item, index) => {
                const Icon = icons[item.icons as keyof typeof icons];
                return (
                  <div
                    className="group relative flex flex-col items-center text-center md:items-start md:text-left"
                    key={item.id}
                  >
                    <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                        {Icon && <Icon size={30} strokeWidth={1.5} />}
                      </div>

                      <div className="space-y-3">
                        <h3 className="flex items-center justify-center gap-3 font-bold text-slate-800 text-xl md:justify-start">
                          <span className="font-black text-blue-600 text-sm uppercase tracking-widest">
                            Misi 0{index + 1}
                          </span>
                        </h3>
                        <p className="font-medium text-base text-slate-600 leading-relaxed md:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tugas dan Fungsi */}

        <section className="relative min-h-screen overflow-hidden bg-white py-32">
          <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-50 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-24 space-y-4 text-center">
              <h2 className="font-black text-3xl text-slate-900 tracking-tight md:text-5xl">
                {tupoksiBapenda.title}
              </h2>
              <div className="mx-auto h-1.5 w-20 rounded-full bg-blue-600" />
              <p className="mx-auto max-w-2xl text-lg text-slate-500 leading-relaxed">
                {tupoksiBapenda.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
              {tupoksiBapenda.Tupoksi.map((item, index) => {
                const Icon = icons[item.icons as keyof typeof icons];

                return (
                  <div
                    className="group relative flex flex-col items-center text-center md:items-start md:text-left"
                    key={item.id}
                  >
                    <div className="relative flex w-full flex-col items-center gap-6 md:flex-row md:items-start">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                        {Icon && <Icon size={30} strokeWidth={1.5} />}
                      </div>

                      <div className="flex-1 space-y-3">
                        <p className="text-base text-slate-600 leading-relaxed transition-colors duration-500 group-hover:text-slate-900 md:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nilai Organisasi Section */}
        {/* --- NILAI ORGANISASI SECTION: Style Seragam (Ghost Numbers & Grid) --- */}
        <section className="relative overflow-hidden bg-slate-50/30 py-32">
          <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-100 opacity-30 blur-3xl" />

          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-24 grid items-end gap-8 md:grid-cols-3">
              <div className="space-y-4 md:col-span-2">
                <h2 className="font-black text-3xl text-slate-900 tracking-tight md:text-5xl">
                  {NilaiData.Nilai.title}
                </h2>
                <div className="h-1.5 w-20 rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
              {NilaiData.Nilai["nilai-nilai"].map((item, index) => {
                const Icon =
                  icons[item.nilai as keyof typeof icons] ||
                  icons["ShieldCheck"];

                return (
                  <div
                    className="group relative flex flex-col items-start text-left"
                    key={index}
                  >
                    <div className="relative flex w-full flex-col items-start gap-6 md:flex-row">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                        {Icon && <Icon size={30} strokeWidth={1.5} />}
                      </div>

                      <div className="flex-1 space-y-3">
                        <h3 className="font-black text-slate-800 text-xl transition-colors group-hover:text-blue-600 md:text-2xl">
                          {item.nilai}
                        </h3>

                        <p className="font-medium text-base text-slate-600 leading-relaxed transition-colors duration-500 group-hover:text-slate-900 md:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
