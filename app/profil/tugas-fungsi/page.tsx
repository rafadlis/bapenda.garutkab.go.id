import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  DesktopTowerIcon,
  FileTextIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType, SVGProps } from "react";
import data from "@/app/content/tugas-fungsi.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
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

const departmentIcons: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  "Kepala Badan Pendapatan Daerah": BuildingOfficeIcon,
  "Sekretariat Badan Pendapatan Daerah": FileTextIcon,
  "Bidang Pendataan": MagnifyingGlassIcon,
  "Bidang Penagihan": CurrencyDollarIcon,
  "Bidang Pengawasan dan Pemeriksaan": ShieldCheckIcon,
  "Bidang Teknologi dan Informasi": DesktopTowerIcon,
  "Kelompok Jabatan": UsersIcon,
};

type MergedDepartment = {
  department: string;
  duty: string;
  description: string | null;
  functions: string[];
};

function buildMergedData(): MergedDepartment[] {
  return data.tugas.map((tugas) => {
    const fungsiItem = data.fungsi.find(
      (f) => f.department === tugas.department
    );
    return {
      department: tugas.department,
      duty: tugas.duty,
      description: fungsiItem?.description ?? null,
      functions: fungsiItem?.function ?? [],
    };
  });
}

export default function TugasFungsi() {
  const mergedData = buildMergedData();

  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Tugas dan Fungsi</h1>
        <p className="max-w-prose text-muted-foreground">
          Struktur operasional Badan Pendapatan Daerah Kabupaten Garut dalam
          menjalankan amanat pelayanan publik dan pengelolaan pendapatan daerah.
        </p>
        <div className="not-typography mt-10">
          <ImagePlaceholder
            aspect="wide"
            label="Ilustrasi alur tugas dan fungsi BAPENDA"
          />
        </div>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Bidang Kerja</h2>
          <Badge className="font-mono">{mergedData.length}</Badge>
        </span>

        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          {mergedData.map((item) => {
            const IconComponent =
              departmentIcons[item.department] ?? BuildingOfficeIcon;

            return (
              <section className="space-y-5 p-6" key={item.department}>
                <header className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
                    <IconComponent aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-snug">
                    {item.department}
                  </h3>
                </header>

                <div>
                  <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                    Tugas Utama
                  </span>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.duty}
                  </p>
                </div>

                {item.functions.length > 0 ? (
                  <div>
                    <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                      Fungsi Organisasi
                    </span>
                    {item.description ? (
                      <p className="mt-2 text-muted-foreground italic">
                        {item.description}
                      </p>
                    ) : null}
                    <ul className="mt-3 space-y-2">
                      {item.functions.map((fn) => (
                        <li
                          className="flex gap-3 text-foreground text-sm leading-relaxed"
                          key={fn}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block size-1 shrink-0 rounded-full bg-foreground"
                          />
                          {fn}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </section>
    </article>
  );
}
