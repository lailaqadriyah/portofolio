export default function ProjectVisual({ project, className = "" }) {
  if (project.image) {
    return (
      <div
        className={`overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] ${className}`}
      >
        <img
          src={project.image}
          alt={`Tangkapan layar ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-between border border-dashed border-[var(--accent)]/50 bg-[var(--surface-alt)] p-5 ${className}`}
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)]">
        <span>PLACEHOLDER GAMBAR</span>
        <span>NO. {project.index}</span>
      </div>
      <div className="my-4">
        <p className="font-display text-xl text-[var(--ink)]">{project.title}</p>
        <p className="mt-1 font-mono text-xs text-[var(--accent)]">
          Ganti dengan screenshot: {project.placeholderFile}
        </p>
      </div>
      <div className="border-t border-[var(--border)] pt-2 font-mono text-[11px] text-[var(--ink-muted)]">
        Rasio disarankan 16:10 • PNG / JPG
      </div>
    </div>
  );
}
