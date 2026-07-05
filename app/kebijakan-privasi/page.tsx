import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi situs Badan Pendapatan Daerah Kabupaten Garut.",
  path: "/kebijakan-privasi",
  keywords: ["kebijakan privasi BAPENDA Garut", "privasi website BAPENDA"],
});

const sections = [
  {
    title: "Siapa Kami",
    content:
      "Website ini dikelola oleh Badan Pendapatan Daerah Kabupaten Garut. Alamat situs web kami adalah https://bapenda.garutkab.go.id.",
  },
  {
    title: "Komentar",
    content:
      "Ketika pengunjung meninggalkan komentar di situs ini, data pada formulir komentar, alamat IP, dan user agent browser dapat dikumpulkan untuk membantu pendeteksian spam.",
  },
  {
    title: "Media",
    content:
      "Jika Anda mengunggah gambar ke situs web, hindari mengunggah gambar dengan data lokasi tertanam (GPS EXIF).",
  },
  {
    title: "Cookies",
    content:
      "Beberapa cookie dapat disimpan untuk kenyamanan pengisian formulir, proses login, preferensi tampilan, dan kebutuhan administratif situs.",
  },
  {
    title: "Konten yang Disematkan",
    content:
      "Artikel dalam situs ini mungkin menyertakan konten tertanam dari situs web lain. Konten tersebut dapat mengumpulkan data dan memakai pelacakan pihak ketiga sesuai kebijakan layanan masing-masing.",
  },
  {
    title: "Hak Anda atas Data",
    content:
      "Pengguna dapat meminta ekspor atau penghapusan data pribadi yang tersimpan, kecuali data yang wajib disimpan untuk tujuan administratif, hukum, atau keamanan.",
  },
  {
    title: "Perubahan Kebijakan Privasi",
    content:
      "Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu dan menyarankan pengunjung meninjau halaman ini secara berkala.",
  },
];

export default function KebijakanPrivasi() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Kebijakan Privasi</h1>
        <p className="max-w-prose text-muted-foreground">
          Kebijakan privasi ini menjelaskan cara situs resmi BAPENDA Kabupaten
          Garut melindungi dan mengelola informasi pengunjung.
        </p>
      </section>

      <section className="mb-16">
        <div className="not-typography divide mt-8 grid grid-cols-1 divide-y overflow-clip rounded-md border">
          {sections.map((section, index) => (
            <div className="p-6" key={section.title}>
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 border-none font-bold text-xl">
                {section.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
