import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  CaretRightIcon,
  CurrencyDollarIcon,
  DesktopTowerIcon,
  FileTextIcon,
  ListBulletsIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import React, { useMemo } from "react";
import data from "@/app/content/tugas-fungsi.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tugas dan Fungsi",
  description:
    "Ketahui tugas dan fungsi setiap bidang di BAPENDA Kabupaten Garut, mulai dari pendataan, penagihan, pengawasan, teknologi informasi, hingga sekretariat.",
  path: "/profil/tugas-fungsi",
  keywords: [
    "tugas fungsi BAPENDA",
    "bidang BAPENDA Garut",
    "struktur tugas pajak daerah",
  ],
});

const departmentIcons: Record<string, any> = {
  "Kepala Badan Pendapatan Daerah": BuildingOfficeIcon,
  "Sekretariat Badan Pendapatan Daerah": FileTextIcon,
  "Bidang Pendataan": MagnifyingGlassIcon,
  "Bidang Penagihan": CurrencyDollarIcon,
  "Bidang Pengawasan dan Pemeriksaan": ShieldCheckIcon,
  "Bidang Teknologi dan Informasi": DesktopTowerIcon,
  "Kelompok Jabatan": UsersIcon,
};

export default function TugasFungsi() {
  const mergedData = useMemo(() => {
    return data.tugas.map((tugas) => {
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
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-4 font-extrabold text-3xl text-slate-900 tracking-tight sm:text-4xl">
            Tugas dan Fungsi
          </h1>
          <div className="mb-6 h-1.5 w-20 rounded-full bg-blue-600" />
          <p className="text-lg text-slate-600 leading-relaxed">
            Struktur operasional Badan Pendapatan Daerah Kabupaten Garut dalam
            menjalankan amanat pelayanan publik dan pengelolaan pendapatan
            daerah.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {mergedData.map((item, index) => {
            const IconComponent =
              departmentIcons[item.department] || BuildingOfficeIcon;

            return (
              <div
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-blue-500/5 hover:shadow-xl"
                key={index}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className="font-bold text-slate-800 text-xl leading-tight">
                    {item.department}
                  </h2>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="relative border-blue-100 border-l-2 pl-6 transition-colors group-hover:border-blue-500">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-blue-50 px-2 py-0.5 font-bold text-[10px] text-blue-600 uppercase tracking-widest">
                        Tugas Utama
                      </span>
                    </div>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      {item.duty}
                    </p>
                  </div>

                  {item.functions.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <ListBulletsIcon className="h-4 w-4 text-slate-400" />
                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                          Fungsi Organisasi
                        </h3>
                      </div>

                      {item.description && (
                        <p className="text-slate-500 text-sm italic">
                          {item.description}
                        </p>
                      )}

                      <ul className="grid gap-3">
                        {item.functions.map((fn, i) => (
                          <li
                            className="flex items-start gap-3 rounded-xl border border-transparent bg-slate-50/50 p-3 text-slate-600 transition-colors hover:border-slate-100 hover:bg-slate-50"
                            key={i}
                          >
                            <CaretRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
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
