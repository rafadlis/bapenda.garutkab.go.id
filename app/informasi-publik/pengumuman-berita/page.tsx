import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import BlogCard, { BlogPost } from "@/components/blog/BlogCardComponent";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {DUMMY_POSTS.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
