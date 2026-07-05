import { Badge } from "@/components/ui/badge";

export type RequirementSectionItem = {
  description?: string;
  requirements: string[];
  title: string;
};

type RequirementSectionsProps = {
  sections: RequirementSectionItem[];
};

export function RequirementSections({ sections }: RequirementSectionsProps) {
  return (
    <>
      {sections.map((section) => (
        <section className="mb-16" key={section.title}>
          <span className="flex items-center justify-center gap-3">
            <h2 className="border-none text-center">{section.title}</h2>
            <Badge className="font-mono">{section.requirements.length}</Badge>
          </span>
          {section.description ? (
            <p className="mx-auto max-w-prose text-center text-muted-foreground">
              {section.description}
            </p>
          ) : null}
          <div className="not-typography divide mt-8 grid grid-cols-1 divide-x divide-y overflow-clip rounded-md border md:grid-cols-2 lg:grid-cols-3">
            {section.requirements.map((item, index) => (
              <div className="flex gap-4 p-6" key={item}>
                <span className="font-mono text-muted-foreground text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
