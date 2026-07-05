import { CalendarIcon, TagIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";

export type BlogPost = {
  category: string;
  date: string;
  excerpt: string;
  id: string;
  imageUrl?: string;
  slug: string;
  title: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-clip rounded-md border bg-card transition-shadow duration-300 hover:shadow-lg">
      {post.imageUrl ? (
        <ImagePlaceholder
          alt={post.title}
          aspect="video"
          className="rounded-none border-0 border-b"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={post.imageUrl}
        />
      ) : (
        <ImagePlaceholder
          aspect="video"
          className="rounded-none border-0 border-b"
          label={post.title}
        />
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <Badge variant="secondary">
            <TagIcon className="size-3" />
            <span className="ml-1">{post.category}</span>
          </Badge>
          <span className="inline-flex items-center gap-1 font-mono">
            <CalendarIcon className="size-3" />
            {post.date}
          </span>
        </div>
        <h3 className="line-clamp-2 font-bold text-lg leading-snug transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-2">
          <Link
            className="inline-flex items-center gap-1 font-medium text-primary text-sm underline-offset-4 hover:underline"
            href={`/informasi-publik/pengumuman-berita/${post.slug}`}
          >
            Baca selengkapnya →
          </Link>
        </div>
      </div>
    </article>
  );
}
