import React, { useMemo } from "react";
import data from "@/app/content/tugas-fungsi.json";
import {
    Briefcase,
    Building2,
    DollarSign,
    FileText,
    List,
    Search,
    Server,
    Shield,
    Users,
    ChevronRight,
} from "lucide-react";

const departmentIcons: Record<string, any> = {
    "Kepala Badan Pendapatan Daerah": Building2,
    "Sekretariat Badan Pendapatan Daerah": FileText,
    "Bidang Pendataan": Search,
    "Bidang Penagihan": DollarSign,
    "Bidang Pengawasan dan Pemeriksaan": Shield,
    "Bidang Teknologi dan Informasi": Server,
    "Kelompok Jabatan": Users,
};

export default function TugasFungsi() {
    const mergedData = useMemo(() => {
        return data.tugas.map((tugas) => {
            const fungsiItem = data.fungsi.find(
                (f) => f.department === tugas.department,
            );
            return {
                department: tugas.department,
                duty: tugas.duty,
                description: fungsiItem?.description || null,
                functions: fungsiItem?.function || [],
            };
        });
    }, []);

    return (
        <div className="min-h-screen bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-4">
                        Tugas dan Fungsi
                    </h1>
                    <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6" />
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Struktur operasional Badan Pendapatan Daerah Kabupaten
                        Garut dalam menjalankan amanat pelayanan publik dan
                        pengelolaan pendapatan daerah.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {mergedData.map((item, index) => {
                        const IconComponent =
                            departmentIcons[item.department] || Building2;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800 leading-tight">
                                        {item.department}
                                    </h2>
                                </div>

                                <div className="space-y-8 flex-1">
                                    <div className="relative pl-6 border-l-2 border-blue-100 group-hover:border-blue-500 transition-colors">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                                Tugas Utama
                                            </span>
                                        </div>
                                        <p className="text-slate-600 text-[15px] leading-relaxed">
                                            {item.duty}
                                        </p>
                                    </div>

                                    {item.functions.length > 0 && (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <List className="w-4 h-4 text-slate-400" />
                                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                                                    Fungsi Organisasi
                                                </h3>
                                            </div>

                                            {item.description && (
                                                <p className="text-sm text-slate-500 italic">
                                                    {item.description}
                                                </p>
                                            )}

                                            <ul className="grid gap-3">
                                                {item.functions.map((fn, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors text-slate-600 border border-transparent hover:border-slate-100"
                                                    >
                                                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                                        <span className="text-sm leading-relaxed">
                                                            {fn}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
