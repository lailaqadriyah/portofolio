import { useEffect, useRef } from "react";
import ProjectVisual from "./ProjectVisual";

export default function CaseStudyDrawer({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full max-w-2xl overflow-y-auto border-l border-[var(--border)] bg-[var(--bg)] p-6 sm:p-10"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            ARSIP PROYEK // {project.index} — {project.type}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] border border-[var(--border)] px-3 font-mono text-xs uppercase tracking-wider text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Tutup [ESC]
          </button>
        </div>

        {/* Header */}
        <div className="mt-7">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--ink-muted)]">
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.role}</span>
          </div>

          <h2
            id="drawer-title"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl"
          >
            {project.title}
          </h2>
          <p className="mt-1 text-base text-[var(--ink-muted)]">{project.subtitle}</p>

          {project.award && (
            <p className="mt-3 inline-block border border-[var(--accent)] px-3 py-1 font-mono text-xs text-[var(--accent)]">
              {project.award}
            </p>
          )}
        </div>

        {/* Visual */}
        <div className="mt-7">
          <ProjectVisual project={project} className="aspect-[16/10] w-full" />
        </div>

        {/* Case Study Content */}
        <div className="mt-8 space-y-6 border-t border-[var(--border)] pt-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              01. Konteks Masalah
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)] sm:text-base">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              02. Pendekatan & Implementasi
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)] sm:text-base">
              {project.caseStudy.approach}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              03. Hasil & Dampak
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)] sm:text-base">
              {project.caseStudy.outcome}
            </p>
          </div>

          {/* Contextual Skills */}
          <div className="border-t border-[var(--border)] pt-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
              Keahlian yang Diterapkan di Proyek Ini
            </h3>
            <ul className="mt-3 space-y-1.5">
              {project.skillsContext.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2.5 text-sm text-[var(--ink)]"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">—</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.url && (
            <div className="border-t border-[var(--border)] pt-5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 bg-[var(--accent)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-[var(--accent-ink)] transition-opacity hover:opacity-90"
              >
                Buka Tautan Proyek ({project.urlLabel}) ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
