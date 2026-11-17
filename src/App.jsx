import {
  ArrowRight,
  Award,
  Check,
  Copy,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProjectModal from "./components/ProjectModal";
import {
  AWARDS,
  COMMITTEES,
  EDUCATION,
  ORGANIZATIONS,
  PROFILE,
  PROJECT_TYPES,
  PROJECTS,
} from "./data/portfolioData";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [expTab, setExpTab] = useState("org");
  const [projectFilter, setProjectFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "Semua") return PROJECTS;
    return PROJECTS.filter((p) => p.type === projectFilter);
  }, [projectFilter]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      {/* ─── NAVBAR ────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200/80 bg-white/85 py-3 backdrop-blur-md shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-tight text-gray-900 sm:text-base"
          >
            Laila<span className="font-light text-gray-500"> Qadriyah</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? "font-medium text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-2 shadow-lg md:hidden">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="flex w-full items-center px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-screen sm:px-6 sm:pt-32"
      >
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-75" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-gray-50" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Photo */}
          <div className="flex justify-center">
            <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[310px] lg:max-w-[340px]">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                {!imgError ? (
                  <img
                    src="/img/profile.jpg"
                    alt={PROFILE.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200/70 p-6 text-center">
                    <span className="text-5xl font-light tracking-tight text-gray-800">
                      LQ
                    </span>
                    <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      Laila Qadriyah
                    </span>
                    <span className="mt-6 rounded-full border border-gray-300 bg-white/80 px-3 py-1 text-[11px] text-gray-500">
                      Foto: public/img/profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right — Intro */}
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
              Laila
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text font-semibold text-transparent">
                Qadriyah
              </span>
            </h1>

            <p className="mb-5 text-base font-light text-gray-600 sm:text-xl md:text-2xl">
              Mahasiswa Sistem Informasi • Universitas Andalas
            </p>

            <p className="mb-8 text-sm leading-relaxed text-gray-500 sm:mb-10 sm:text-base">
              Berfokus pada pengelolaan website, pembaruan informasi, pemeliharaan sistem,
              serta pengembangan aplikasi web yang terstruktur dan mudah digunakan.
            </p>

            <div className="flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="group inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                Tentang Saya
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-gray-900 hover:text-gray-900"
              >
                Lihat Proyek
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────── */}
      <section
        id="about"
        className="bg-gradient-to-b from-gray-50 via-white to-white px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="reveal mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-light text-gray-900 md:text-4xl">
            About Me
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            <p>
              Saya adalah mahasiswa Program Studi Sistem Informasi di{" "}
              <strong className="font-medium text-gray-900">Universitas Andalas</strong>{" "}
              yang berminat pada pengelolaan website—mencakup pembaruan
              informasi, pengelolaan konten, dan pemeliharaan website secara berkala.
            </p>
            <p>
              Berpengalaman mengerjakan berbagai proyek berbasis web selama perkuliahan,
              mulai dari portal kemahasiswaan, sistem inventaris, aplikasi GIS, hingga
              dashboard analitik, serta aktif mengoordinasi tim dalam organisasi dan
              kepanitiaan kampus.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Pendidikan
              </p>
              <div className="mt-4 space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.institution}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-medium text-gray-900">{edu.institution}</h3>
                      <span className="text-xs text-gray-400">{edu.period}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {edu.program} • {edu.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Penghargaan
              </p>
              {AWARDS.map((award) => (
                <div key={award.title} className="mt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                    <Award className="h-4 w-4 text-gray-800" />
                    <span>{award.year}</span>
                  </div>
                  <h3 className="mt-1.5 font-medium text-gray-900">{award.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {award.detail} — {award.organizer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ────────────────── */}
      <section
        id="experience"
        className="bg-gradient-to-b from-white via-gray-50/70 to-gray-50/70 px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="reveal mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Career & Campus
              </p>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">
                Experience
              </h2>
            </div>

            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setExpTab("org")}
                className={`rounded-md px-4 py-1.5 text-xs font-medium transition ${
                  expTab === "org"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Organisasi ({ORGANIZATIONS.length})
              </button>
              <button
                type="button"
                onClick={() => setExpTab("committee")}
                className={`rounded-md px-4 py-1.5 text-xs font-medium transition ${
                  expTab === "committee"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Kepanitiaan ({COMMITTEES.length})
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {(expTab === "org" ? ORGANIZATIONS : COMMITTEES).map((item, idx) => (
              <div
                key={`${item.role}-${idx}`}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-gray-400">{item.year}</span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600">
                    {expTab === "org" ? "Organisasi" : item.event}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{item.role}</h3>
                {item.org && (
                  <p className="mt-0.5 text-sm font-medium text-gray-500">{item.org}</p>
                )}
                <p className="mt-2 text-sm text-gray-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────── */}
      <section
        id="projects"
        className="bg-gradient-to-b from-gray-50/70 via-gray-50 to-white px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="reveal mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Work
              </p>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">
                Recent Projects
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectFilter(type)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    projectFilter === type
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-100 bg-gray-50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-5 text-center">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                        {project.type}
                      </span>
                      <p className="mt-1.5 font-semibold text-gray-800">{project.title}</p>
                      <span className="mt-1 text-xs text-gray-400">
                        {project.urlLabel || project.placeholderFile}
                      </span>
                    </div>
                  )}

                  {project.award && (
                    <span className="absolute left-3 top-3 rounded-full bg-gray-900/90 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-xs">
                      Juara 3 IST.CO 2026
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-gray-400">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs font-medium text-gray-500">
                    <span className="group-hover:text-gray-900">Lihat Detail</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 px-4 py-20 text-white sm:px-6 md:py-28"
      >
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-gray-400">
            Get in Touch
          </p>
          <h2 className="mb-5 text-3xl font-light md:text-4xl">
            Mari Terhubung & Berkolaborasi
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
            Terbuka untuk peluang pengelolaan website, pengembangan sistem informasi, maupun
            kerja sama proyek.
          </p>

          <div className="flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <button
              type="button"
              onClick={() => handleCopy(PROFILE.phone, "phone")}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
            >
              {copied === "phone" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Phone className="h-4 w-4" />
              )}
              {copied === "phone" ? "Nomor Disalin!" : PROFILE.phoneDisplay}
            </button>

            <button
              type="button"
              onClick={() => handleCopy(PROFILE.email, "email")}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-3 text-sm text-gray-300 transition hover:border-white/40 hover:text-white"
            >
              {copied === "email" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied === "email" ? "Email Disalin!" : PROFILE.email}
            </button>
          </div>

          <div className="mt-12 flex items-center gap-2 text-xs text-gray-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>{PROFILE.location}</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-gray-900 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
