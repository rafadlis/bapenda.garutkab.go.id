import BlogCard, { type BlogPost } from "@/components/blog/BlogCardComponent";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Berita & Pengumuman",
  description:
    "Berita dan pengumuman terbaru Badan Pendapatan Daerah Kabupaten Garut.",
  path: "/berita-pengumuman",
  keywords: ["berita BAPENDA Garut", "pengumuman BAPENDA Garut"],
});

const posts: BlogPost[] = [
  {
    id: "brin-sapada-2026",
    title:
      "Bapenda Garut Gelar Rapat Daring Bersama BRIN Bahas Dukungan Data Pemetaan untuk Pengembangan SAPADA",
    excerpt:
      "Rapat koordinasi daring bersama BRIN membahas kebutuhan data pemetaan untuk mendukung pengembangan Sistem Aplikasi Pajak Daerah Kabupaten Garut.",
    category: "Berita",
    date: "24 Juni 2026",
    slug: "bapenda-garut-gelar-rapat-daring-bersama-brin-bahas-dukungan-data-pemetaan-untuk-pengembangan-sapada",
  },
];

export default function BeritaPengumuman() {
  return (
    <article className="typography container mx-auto flex flex-col px-6">
      <section className="mt-16 flex flex-col">
        <h1 className="max-w-prose">Berita & Pengumuman</h1>
        <p className="max-w-prose text-muted-foreground">
          Berita, pengumuman, dan artikel terbaru dari Badan Pendapatan Daerah
          Kabupaten Garut.
        </p>
      </section>

      <section className="mb-16">
        <span className="flex items-center justify-center gap-3">
          <h2 className="border-none text-center">Terbaru</h2>
          <Badge className="font-mono">{posts.length}</Badge>
        </span>
        <div className="not-typography mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </article>
  );
}
