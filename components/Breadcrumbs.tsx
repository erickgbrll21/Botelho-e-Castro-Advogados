import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="transition-colors hover:text-black">Home</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight size={11} className="text-black/25" />
            {it.href ? (
              <Link href={it.href} className="transition-colors hover:text-black">{it.label}</Link>
            ) : (
              <span className="text-black">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
