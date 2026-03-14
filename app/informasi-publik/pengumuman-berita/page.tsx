import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import BlogCard, { type BlogPost } from "@/components/blog/BlogCardComponent";
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

const DUMMY_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Panduan Penginputan DPA Murni Tahun Anggaran 2026",
    excerpt:
      "Langkah-langkah teknis penginputan dokumen pelaksanaan anggaran...",
    category: "Tutorial",
    date: "10 Februari 2026",
    imageUrl: "/vercel.svg",
    slug: "panduan-dpa-2026",
  },
];

export default function BlogSection() {
  return (
    <section className="space-y-10 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {DUMMY_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
