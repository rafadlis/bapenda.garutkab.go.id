import {
  ArrowUpRightIcon,
  CalendarIcon,
  TagIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export interface BlogPost {
  category: string;
  date: string;
  excerpt: string;
  id: string;
  imageUrl: string;
  slug: string;
  title: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl">
      {/* Gambar Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          src={post.imageUrl}
        />
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 font-black text-[10px] text-blue-600 uppercase tracking-widest shadow-sm backdrop-blur-md">
            <TagIcon className="shrink-0" size={12} />
            {post.category}
          </span>
        </div>
      </div>

      {/* Konten Teks */}
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-3 flex items-center gap-2 font-medium text-slate-400 text-xs">
          <CalendarIcon size={14} />
          {post.date}
        </div>

        <h3 className="mb-3 line-clamp-2 font-bold text-lg text-slate-800 leading-tight transition-colors group-hover:text-blue-600 md:text-xl">
          {post.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-slate-500 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Action Button */}
        <div className="mt-auto border-slate-50 border-t pt-4">
          <Link
            className="inline-flex items-center gap-2 font-black text-blue-600 text-sm transition-all hover:text-blue-800"
            href={
              "https://klikpajak.id/blog/akuntansi-perpajakan-pengertian-dan-contoh-perhitungan/"
            }
          >
            Baca Selengkapnya
            <ArrowUpRightIcon
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={18}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
