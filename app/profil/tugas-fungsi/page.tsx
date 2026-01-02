import data from "@/app/content/tugas-fungsi.json";
import {
    Briefcase,
    Building2,
    DollarSign,
    FileText,
    List,
    LucideIcon,
    Search,
    Server,
    Shield,
    Users,
} from "lucide-react";

const departmentIcons: Record<string, LucideIcon> = {
    "Kepala Badan Pendapatan Daerah": Building2,
    "Sekretariat Badan Pendapatan Daerah": FileText,
    "Bidang Pendataan": Search,
    "Bidang Penagihan": DollarSign,
    "Bidang Pengawasan dan Pemeriksaan": Shield,
    "Bidang Teknologi dan Informasi": Server,
    "Kelompok Jabatan": Users,
};

export default function TugasFungsi() {
    const merged = data.tugas.map((tugas) => {
        const fungsiItem = data.fungsi.find(
            (f) => f.department === tugas.department
        );
        return {
            department: tugas.department,
            duty: tugas.duty,
            description: fungsiItem?.description || null,
            functions: fungsiItem?.function || [],
        };
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-3">
                        Tugas dan Fungsi
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Badan Pendapatan Daerah Kabupaten Garut
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {merged.map((item, index) => {
                        const IconComponent =
                            departmentIcons[item.department] || Building2;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
                            >
                                {/* Department Header */}
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                            <IconComponent className="w-5 h-5 text-white" />
                                        </div>
                                        <h2 className="text-lg font-semibold text-white leading-tight">
                                            {item.department}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Department Duties */}
                                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Briefcase className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-slate-800 mb-2">
                                                    Tugas Utama
                                                </h3>
                                                <p className="text-slate-700 leading-relaxed text-sm">
                                                    {item.duty}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Department Functions */}
                                    {item.functions.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <List className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <h3 className="font-semibold text-slate-800">
                                                    Fungsi
                                                </h3>
                                            </div>

                                            {item.description && (
                                                <p className="text-slate-600 mb-4 pl-11 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}

                                            <ul className="space-y-3 pl-11">
                                                {item.functions.map((fn, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-slate-700"
                                                    >
                                                        <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5">
                                                            {i + 1}
                                                        </span>
                                                        <span className="leading-relaxed text-sm">
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
