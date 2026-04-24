import { ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AspectRatio = "square" | "video" | "portrait" | "wide" | "ultrawide";

const aspectClass: Record<AspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  ultrawide: "aspect-[21/9]",
};

type ImagePlaceholderProps = {
  /** Optional label shown when no `src` is provided. */
  label?: string;
  /** Aspect ratio of the placeholder box. */
  aspect?: AspectRatio;
  /** Optional image source. When provided, renders the image with a soft blur placeholder. */
  src?: string;
  /** Alt text. Required when `src` is provided. */
  alt?: string;
  /** Tailwind classes for the wrapper. */
  className?: string;
  /** Tailwind classes for the inner Image / decoration. */
  imageClassName?: string;
  /** `next/image` sizes attribute. */
  sizes?: ImageProps["sizes"];
  /** Whether to mark the image as priority. */
  priority?: boolean;
  /** Object fit mode when an image is provided. */
  fit?: "cover" | "contain";
};

// Tiny 1x1 transparent PNG used as a soft blur placeholder.
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

export function ImagePlaceholder({
  label,
  aspect = "video",
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 800px, 100vw",
  priority,
  fit = "cover",
}: ImagePlaceholderProps) {
  const wrapper = cn(
    "relative w-full overflow-hidden rounded-md border bg-muted",
    aspectClass[aspect],
    className
  );

  if (src) {
    return (
      <div className={wrapper}>
        <Image
          alt={alt ?? ""}
          blurDataURL={BLUR_DATA_URL}
          className={cn(
            fit === "contain" ? "object-contain" : "object-cover",
            imageClassName
          )}
          fill
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          src={src}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        wrapper,
        "flex flex-col items-center justify-center gap-3 text-muted-foreground"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-60",
          // Subtle diagonal hatch built from the border token.
          "[background-image:repeating-linear-gradient(135deg,var(--color-border)_0,var(--color-border)_1px,transparent_1px,transparent_12px)]"
        )}
      />
      <ImageIcon
        className={cn("relative size-8 opacity-60", imageClassName)}
        weight="thin"
      />
      {label ? (
        <span className="relative max-w-[28ch] px-4 text-center font-mono text-xs uppercase tracking-widest">
          {label}
        </span>
      ) : null}
    </div>
  );
}
