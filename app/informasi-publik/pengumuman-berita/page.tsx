import BlogCard, { type BlogPost } from "@/components/blog/BlogCardComponent";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pengumuman dan Berita",
  description:
    "Temukan pengumuman, berita, dan artikel terbaru dari BAPENDA Kabupaten Garut mengenai layanan, kebijakan, dan informasi perpajakan daerah.",
  path: "/informasi-publik/pengumuman-berita",
  keywords: [
    "berita BAPENDA Garut",
    "pengumuman pajak Garut",
    "informasi terbaru BAPENDA",
  ],
});

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Panduan Penginputan DPA Murni Tahun Anggaran 2026",
    excerpt:
      "Langkah-langkah teknis penginputan dokumen pelaksanaan anggaran murni tahun 2026 untuk seluruh perangkat daerah.",
    category: "Tutorial",
    date: "10 Februari 2026",
    slug: "panduan-dpa-2026",
  },
];

export default function PengumumanBerita() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Pengumuman & Berita</h1>
        <p className="max-w-prose text-muted-foreground">
          Pengumuman, berita, dan artikel terbaru dari Badan Pendapatan Daerah
          Kabupaten Garut mengenai layanan, kebijakan, dan informasi
          perpajakan.
        </p>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Terbaru</h2>
          <Badge className="font-mono">{POSTS.length}</Badge>
        </span>
        <div className="not-typography mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </article>
  );
}
