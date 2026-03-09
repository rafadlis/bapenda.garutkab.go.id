import data from "@/app/content/about.json";
import NilaiData from "@/app/content/nilai-organisasi.json";
import tupoksiBapenda from "@/app/content/tupoksi-bapenda.json";
import { icons } from "@/lib/icons";
import { QuotesIcon } from "@phosphor-icons/react";

export default function Profil() {
    return (
        <>
            <main className="min-h-screen flex flex-col gap-10">
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10" />
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-2xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
                            Membangun Garut Melalui <br />
                            <span className="text-blue-600">
                                Kemandirian Fiskal
                            </span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                            {data.opening.content}
                        </p>
                    </div>
                </section>

                {/* Visi Section */}
                <section className="py-24 bg-slate-900 text-white relative">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-8 block">
                            Visi Utama
                        </span>
                        <div className="relative">
                            <QuotesIcon className="absolute -top-10 -left-4 w-16 h-16 text-white/10 rotate-180" />
                            <h2 className="text-3xl md:text-4xl font-light italic leading-tight mb-12">
                                "{data.Visi.content}"
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20 text-center border-t border-white/10 pt-16">
                            {data.Visi.list.map((item) => {
                                const Icon =
                                    icons[item.icons as keyof typeof icons];
                                return (
                                    <div
                                        key={item.id}
                                        className="flex flex-col items-center group"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-6 shadow-xl shadow-blue-900/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                            {Icon && (
                                                <Icon
                                                    size={32}
                                                    strokeWidth={1.5}
                                                />
                                            )}
                                        </div>

                                        <div className="space-y-3 max-w-[280px]">
                                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 w-8 h-1 bg-blue-600/30 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Misi Section */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                {data.Misi.heading}
                            </h2>
                            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                                {data.Misi.content}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                            {data.Misi.list.map((item, index) => {
                                const Icon =
                                    icons[item.icons as keyof typeof icons];
                                return (
                                    <div
                                        key={item.id}
                                        className="group relative flex flex-col items-center md:items-start text-center md:text-left"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative">
                                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm border border-blue-100">
                                                {Icon && (
                                                    <Icon
                                                        size={30}
                                                        strokeWidth={1.5}
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-3">
                                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 justify-center md:justify-start">
                                                    <span className="text-blue-600 font-black text-sm tracking-widest uppercase">
                                                        Misi 0{index + 1}
                                                    </span>
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
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

                <section className="min-h-screen py-32 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                {tupoksiBapenda.title}
                            </h2>
                            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                                {tupoksiBapenda.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                            {tupoksiBapenda.Tupoksi.map((item, index) => {
                                const Icon =
                                    icons[item.icons as keyof typeof icons];

                                return (
                                    <div
                                        key={item.id}
                                        className="group relative flex flex-col items-center md:items-start text-center md:text-left"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative w-full">
                                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm border border-blue-100">
                                                {Icon && (
                                                    <Icon
                                                        size={30}
                                                        strokeWidth={1.5}
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-3 flex-1">
                                                <p className="text-slate-600 leading-relaxed text-base md:text-lg  transition-colors duration-500 group-hover:text-slate-900">
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
                <section className="py-32 bg-slate-50/30 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 mb-24 items-end">
                            <div className="md:col-span-2 space-y-4">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                    {NilaiData.Nilai.title}
                                </h2>
                                <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                            {NilaiData.Nilai["nilai-nilai"].map(
                                (item, index) => {
                                    const Icon =
                                        icons[
                                            item.nilai as keyof typeof icons
                                        ] || icons["ShieldCheck"];

                                    return (
                                        <div
                                            key={index}
                                            className="group relative flex flex-col items-start text-left"
                                        >
                                            <div className="flex flex-col md:flex-row gap-6 items-start relative w-full">
                                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                                                    {Icon && (
                                                        <Icon
                                                            size={30}
                                                            strokeWidth={1.5}
                                                        />
                                                    )}
                                                </div>

                                                <div className="space-y-3 flex-1">
                                                    <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                                                        {item.nilai}
                                                    </h3>

                                                    <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium group-hover:text-slate-900 transition-colors duration-500">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
