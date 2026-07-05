import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import data from "@/app/content/about.json";
import NilaiData from "@/app/content/nilai-organisasi.json";
import tupoksiBapenda from "@/app/content/tupoksi-bapenda.json";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
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
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="flex min-h-[calc(100svh-(var(--spacing)*16))] flex-col justify-center">
        <h1 className="max-w-prose text-center">
          Membangun Garut melalui <br />
          Kemandirian Fiskal
        </h1>
        <p className="mx-auto max-w-prose text-center">
          {data.opening.content}
        </p>
        <div className="not-typography mx-auto mt-10 w-full max-w-3xl">
          <ImagePlaceholder
            aspect="wide"
            label="Foto kantor BAPENDA Kabupaten Garut"
          />
        </div>
      </section>

      {/* Visi */}
      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Visi</h2>
          <Badge variant="secondary">2019</Badge>
        </span>
        <figure className="not-typography mx-auto mt-6 max-w-prose">
          <QuotesIcon
            aria-hidden="true"
            className="mx-auto size-6 text-muted-foreground"
            weight="fill"
          />
          <blockquote className="mt-4 text-center font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
            {data.Visi.content}
          </blockquote>
        </figure>
        <div className="not-typography divide mt-10 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-3">
          {data.Visi.list.map((item) => {
            const Icon = icons[item.icons as keyof typeof icons];
            return (
              <div className="space-y-2 p-6" key={item.id}>
                <div className="flex items-center gap-2">
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-muted-foreground"
                    />
                  ) : null}
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Misi */}
      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">{data.Misi.heading}</h2>
          <Badge className="font-mono">{data.Misi.list.length}</Badge>
        </span>
        <p className="mx-auto max-w-prose text-center text-muted-foreground">
          {data.Misi.content}
        </p>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          {data.Misi.list.map((item, index) => {
            const Icon = icons[item.icons as keyof typeof icons];
            return (
              <div className="flex gap-4 p-6" key={item.id}>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
                  {Icon ? (
                    <Icon aria-hidden="true" className="size-5" />
                  ) : null}
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                    Misi {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tugas dan Fungsi */}
      <section>
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">{tupoksiBapenda.title}</h2>
          <Badge className="font-mono">{tupoksiBapenda.Tupoksi.length}</Badge>
        </span>
        <p className="mx-auto max-w-prose text-center text-muted-foreground">
          {tupoksiBapenda.description}
        </p>
        <div className="not-typography mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_3fr]">
          <ImagePlaceholder
            aspect="portrait"
            label="Diagram tugas pokok dan fungsi"
          />
          <div className="divide grid grid-cols-1 divide-y overflow-clip rounded-md border">
            {tupoksiBapenda.Tupoksi.map((item) => {
              const Icon = icons[item.icons as keyof typeof icons];
              return (
                <div className="flex gap-4 p-6" key={item.id}>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
                    {Icon ? (
                      <Icon aria-hidden="true" className="size-5" />
                    ) : null}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nilai Organisasi */}
      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">{NilaiData.Nilai.title}</h2>
          <Badge className="font-mono">
            {NilaiData.Nilai["nilai-nilai"].length}
          </Badge>
        </span>
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
          {NilaiData.Nilai["nilai-nilai"].map((item) => (
            <div className="space-y-2 p-6" key={item.nilai}>
              <h3 className="font-bold text-xl">{item.nilai}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
