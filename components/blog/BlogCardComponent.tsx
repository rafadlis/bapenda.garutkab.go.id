import { ArrowUpRightIcon, CalendarIcon, TagIcon } from "@phosphor-icons/react";
import Link from "next/link";



export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-400/50 transition-all duration-500 h-full">
      {/* Gambar Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-sm">
            <TagIcon size={12} className="shrink-0" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Konten Teks */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-medium">
          <CalendarIcon size={14} />
          {post.date}
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight mb-3">
          {post.title}
        </h3>
        
        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <Link
            href={'https://klikpajak.id/blog/akuntansi-perpajakan-pengertian-dan-contoh-perhitungan/'}
            className="inline-flex items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-800 transition-all"
          >
            Baca Selengkapnya
            <ArrowUpRightIcon size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}