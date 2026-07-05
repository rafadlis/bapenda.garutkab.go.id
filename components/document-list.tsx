import { DownloadIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

export type DocumentFile = {
  downloadUrl?: string;
  previewUrl?: string;
};

export type DocumentListItem = {
  file?: DocumentFile | null;
  id: string;
  meta?: string;
  title: string;
};

type DocumentListProps = {
  emptyLabel?: string;
  items: DocumentListItem[];
};

export function DocumentList({
  emptyLabel = "File tidak tersedia",
  items,
}: DocumentListProps) {
  return (
    <ul className="not-typography divide mt-8 grid grid-cols-1 list-none divide-x divide-y overflow-clip rounded-md border md:grid-cols-2">
      {items.map((item) => (
        <li className="flex flex-col gap-3 p-6" key={item.id}>
          <div>
            {item.meta ? (
              <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                {item.meta}
              </span>
            ) : null}
            <h3 className="mt-1 font-semibold text-base leading-snug">
              {item.title}
            </h3>
          </div>
          {item.file ? (
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              {item.file.previewUrl ? (
                <a
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                  href={item.file.previewUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <EyeIcon className="size-4" />
                  Preview
                </a>
              ) : null}
              {item.file.downloadUrl ? (
                <a
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                  href={item.file.downloadUrl}
                >
                  <DownloadIcon className="size-4" />
                  Unduh
                </a>
              ) : null}
            </div>
          ) : (
            <span className="text-muted-foreground text-sm italic">
              {emptyLabel}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function DocumentSection({
  items,
  title = "Dokumen",
}: {
  items: DocumentListItem[];
  title?: string;
}) {
  return (
    <section className="mb-16">
      <span className="flex items-center justify-center gap-3">
        <h2 className="border-none text-center">{title}</h2>
        <Badge className="font-mono">{items.length}</Badge>
      </span>
      <DocumentList items={items} />
    </section>
  );
}
