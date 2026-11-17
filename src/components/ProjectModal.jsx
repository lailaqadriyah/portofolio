import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400">
            <span className="uppercase tracking-wider">{project.type}</span>
            <span>•</span>
            <span>{project.year}</span>
            {project.award && (
              <>
                <span>•</span>
                <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[11px] text-white">
                  Juara 3 IST.CO 2026
                </span>
              </>
            )}
          </div>
          <h3 id="modal-title" className="mt-2 text-2xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.subtitle}</p>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/10] w-full object-cover object-top"
            />
          ) : (
            <div className="flex aspect-[16/10] flex-col items-center justify-center p-6 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Preview Belum Tersedia
              </span>
              <p className="mt-2 font-semibold text-gray-700">{project.title}</p>
              <p className="mt-1 text-xs text-gray-400">
                Simpan screenshot di {project.placeholderFile}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
          <p>{project.summary}</p>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Ringkasan Implementasi
            </p>
            <p className="mt-1.5 text-gray-700">{project.caseStudy.approach}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Konteks Keahlian
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.skillsContext.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.url && (
          <div className="mt-6 border-t border-gray-100 pt-5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Kunjungi {project.urlLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
