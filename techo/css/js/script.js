/* =====================================================================
   1. EDIT YOUR CONTENT HERE. Everything marked SAMPLE is placeholder text.
   Leave a value as "" (or an empty array) and that item is hidden.
   Accent colour and fonts live in css/style.css (:root).
   ===================================================================== */
const CONFIG = {
  name: "Rizwin A Rahman",                      // SAMPLE
  brand: "YN",                            // initials shown in the header
  title: "Full Stack Developer",          // SAMPLE
  greeting: "Hi, I'm Rizwin A Rahman.",         // SAMPLE
  headline: "I build fast, reliable web applications.", // SAMPLE
  roles: ["MERN Stack Developer", "Frontend Engineer", "Problem Solver"], // SAMPLE; [] disables the typing effect
  heroText: "Replace this with one or two sentences about what you do and the value you bring to teams and clients.", // SAMPLE
  availability: "Available for new opportunities", // "" hides the badge
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox2EqdbeN-YQrGXD9MHeri4ujHCKTFXm5PWpdHn_TFQ&s=10",                              // e.g. "assets/images/profile.jpg" (blank shows your initials)
  imageAlt: "Portrait of Your Name",
  resume: "",                             // e.g. "assets/resume.pdf" (blank hides the button)
  about: [                                // SAMPLE paragraphs
    "Write a short introduction: who you are, where you studied or worked, and what drew you to development.",
    "Describe your specialisations, how you approach problems, and the kind of work you want to do next."
  ],
  aboutFacts: [                           // only add facts you can verify, e.g. { label: "Focus", value: "Web apps" }
    { label: "Focus", value: "Full stack web development" },
    { label: "Based in", value: "Your City, Country" }
  ],
  skills: {                               // SAMPLE categories
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "REST APIs"],
    "Databases": ["MongoDB", "PostgreSQL"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman"]
  },
  projects: [                             // SAMPLE. category must match one of the filter names
    { title: "Sample Project One", category: "Web Development", image: "", alt: "Screenshot of Sample Project One",
      description: "A short description of the problem this project solves.",
      features: ["Key feature or outcome", "Another key feature"],
      tech: ["React", "Node.js", "MongoDB"], demo: "", code: "", caseStudy: "" },
    { title: "Sample Project Two", category: "Data Analytics", image: "", alt: "Dashboard screenshot",
      description: "A short description of the analysis and the decisions it supported.",
      features: ["Key insight or result"],
      tech: ["Python", "Pandas", "Power BI"], demo: "", code: "", caseStudy: "" },
    { title: "Sample Project Three", category: "Data Science", image: "", alt: "Model results chart",
      description: "A short description of the model and how it was evaluated.",
      features: ["Evaluation approach"],
      tech: ["Python", "scikit-learn"], demo: "", code: "", caseStudy: "" }
  ],
  experience: [                           // SAMPLE; delete if none
    { role: "Job title or degree", org: "Company or institution", start: "Start", end: "End",
      points: ["Responsibility or achievement.", "Another responsibility or achievement."],
      tech: ["Tech", "Stack"] }
  ],
  achievements: [                         // [] hides the whole section
    // { title: "Certification or award", issuer: "Issuer", year: "2025", url: "" }
  ],
  contact: {                              // blank = hidden. SAMPLE values below
    email: "emsnjh@1324",
    phone: "+919846444333",               // international format
    whatsapp: "9846333444",             // digits only, with country code
    whatsappMessage: "Hi, I found your portfolio and would like to connect.",
    linkedin: "https://www.linkedin.com/in/your-username",
    github: "https://github.com/your-username",
    instagram: "",
    location: "Calicut, Kerala,India"
  },
  filters: ["All", "Web Development", "Data Analytics", "Data Science", "Other"]
};

/* =====================================================================
   2. APPLICATION CODE
   ===================================================================== */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const c = CONFIG;
  const icons = () => window.lucide && window.lucide.createIcons();
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const ext = 'target="_blank" rel="noopener noreferrer"';

  const NAV = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"]];
  const SOCIALS = [["github", "GitHub", c.contact.github], ["linkedin", "LinkedIn", c.contact.linkedin], ["instagram", "Instagram", c.contact.instagram]].filter((s) => s[2]);

  function renderStatic() {
    document.title = `${c.name} | ${c.title} Portfolio`;
    $$("[data-text]").forEach((el) => { const v = c[el.dataset.text]; if (v) el.textContent = v; });
    if (!c.availability) $("#availability").remove();

    const link = (id, label, cls) => `<li><a href="#${id}" class="${cls}" data-nav="${id}">${label}</a></li>`;
    $("#nav-links").innerHTML = NAV.map(([id, l]) => link(id, l, "nav-link")).join("");
    $("#mobile-links").innerHTML = NAV.map(([id, l]) => link(id, l, "nav-link")).join("") +
      `<li class="pt-2"><a href="#contact" class="btn btn-primary w-full" data-nav="contact">Let's Connect</a></li>`;
    $("#footer-links").innerHTML = NAV.map(([id, l]) => `<li><a href="#${id}" class="hover:text-[var(--fg)]">${l}</a></li>`).join("");

    const soc = SOCIALS.map(([i, l, u]) => `<li><a class="icon-btn" href="${esc(u)}" ${ext} aria-label="${l}"><i data-lucide="${i}"></i></a></li>`).join("");
    $("#hero-socials").innerHTML = soc;
    $("#footer-socials").innerHTML = soc;

    $("#hero-visual").innerHTML = c.image
      ? `<img src="${esc(c.image)}" alt="${esc(c.imageAlt)}" width="400" height="400" class="aspect-square w-full rounded-[var(--radius)] border border-[var(--border)] object-cover">`
      : `<div class="card grid aspect-square place-items-center font-heading text-7xl font-bold text-[var(--accent)]" role="img" aria-label="${esc(c.imageAlt)}">${esc(c.brand)}</div>`;

    $("#about-text").innerHTML = c.about.map((p) => `<p>${esc(p)}</p>`).join("");
    const facts = c.aboutFacts.map((f) => `<div class="flex justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0"><dt class="text-[var(--muted)]">${esc(f.label)}</dt><dd class="text-right font-medium">${esc(f.value)}</dd></div>`).join("");
    $("#about-side").innerHTML = `<dl class="card space-y-3 p-5 text-sm">${facts}</dl>` +
      (c.resume ? `<a class="btn btn-ghost" href="${esc(c.resume)}" download><i data-lucide="download"></i>Download résumé</a>` : "");

    $("#skills-grid").innerHTML = Object.entries(c.skills).map(([cat, list]) =>
      `<div class="card card-hover reveal p-5"><h3 class="mb-3 text-lg font-semibold">${esc(cat)}</h3><div class="flex flex-wrap gap-2">${list.map((s) => `<span class="badge">${esc(s)}</span>`).join("")}</div></div>`).join("");

    $("#timeline").innerHTML = c.experience.map((e) =>
      `<li class="card reveal p-5"><p class="text-sm text-[var(--muted)]">${esc(e.start)} to ${esc(e.end)}</p><h3 class="text-lg font-semibold">${esc(e.role)}</h3><p class="text-[var(--accent)]">${esc(e.org)}</p>
      <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="mt-3 flex flex-wrap gap-2">${(e.tech || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}</div></li>`).join("");
    if (!c.experience.length) $("#experience").hidden = true;

    if (c.achievements.length) {
      $("#achievements").hidden = false;
      $("#achievements-grid").innerHTML = c.achievements.map((a) => {
        const inner = `<i data-lucide="award" class="mb-3 text-[var(--accent)]"></i><h3 class="font-semibold">${esc(a.title)}</h3><p class="text-sm text-[var(--muted)]">${esc(a.issuer || "")} ${esc(a.year || "")}</p>`;
        return a.url ? `<a href="${esc(a.url)}" ${ext} class="card card-hover reveal block p-5">${inner}</a>` : `<div class="card reveal p-5">${inner}</div>`;
      }).join("");
    }

    const k = c.contact;
    const cards = [
      k.email && ["mail", "Email", k.email, `mailto:${k.email}`, false],
      k.phone && ["phone", "Phone", k.phone, `tel:${k.phone.replace(/[^\d+]/g, "")}`, false],
      k.whatsapp && ["message-circle", "WhatsApp", "Chat on WhatsApp", `https://wa.me/${k.whatsapp.replace(/\D/g, "")}${k.whatsappMessage ? "?text=" + encodeURIComponent(k.whatsappMessage) : ""}`, true],
      k.linkedin && ["linkedin", "LinkedIn", "View my profile", k.linkedin, true],
      k.github && ["github", "GitHub", "Browse my code", k.github, true],
      k.instagram && ["instagram", "Instagram", "Follow along", k.instagram, true],
      k.location && ["map-pin", "Location", k.location, null, false]
    ].filter(Boolean);
    $("#contact-grid").innerHTML = cards.map(([i, label, text, href, external]) => {
      const inner = `<span class="icon-btn shrink-0"><i data-lucide="${i}"></i></span><span class="min-w-0"><span class="block font-semibold">${label}</span><span class="block truncate text-sm text-[var(--muted)]">${esc(text)}</span></span>`;
      return href
        ? `<a href="${esc(href)}" ${external ? ext : ""} class="contact-card card card-hover reveal flex items-center gap-4 p-5">${inner}</a>`
        : `<div class="contact-card card reveal flex items-center gap-4 p-5">${inner}</div>`;
    }).join("");
  }

  /* Projects + filtering */
  function renderProjects(filter = "All") {
    const list = c.projects.filter((p) => filter === "All" || p.category === filter);
    const lnk = (href, icon, label) => href ? `<a href="${esc(href)}" ${ext} class="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)]"><i data-lucide="${icon}"></i>${label}</a>` : "";
    $("#projects-grid").innerHTML = list.length ? list.map((p) => `
      <article class="card card-hover flex flex-col p-4">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" width="640" height="360" loading="lazy" class="project-thumb">` : `<div class="project-thumb" role="img" aria-label="${esc(p.alt || p.title)}"><i data-lucide="layout-dashboard"></i></div>`}
        <div class="flex flex-1 flex-col p-2 pt-4">
          <h3 class="text-lg font-semibold">${esc(p.title)}</h3>
          <p class="mt-1 text-sm text-[var(--muted)]">${esc(p.description)}</p>
          ${(p.features || []).length ? `<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
          <div class="mt-4 flex flex-wrap gap-2">${p.tech.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}</div>
          <div class="mt-auto flex flex-wrap gap-4 pt-5">${lnk(p.demo, "external-link", "Live demo")}${lnk(p.code, "code", "Source code")}${lnk(p.caseStudy, "file-text", "Case study")}</div>
        </div>
      </article>`).join("") : `<p class="text-[var(--muted)]">No projects in this category yet.</p>`;
    icons();
  }

  function setupFilters() {
    const used = new Set(c.projects.map((p) => p.category));
    const names = c.filters.filter((f) => f === "All" || used.has(f));
    const box = $("#filters");
    if (names.length < 3) { box.remove(); return; } // not enough projects to justify filters
    box.innerHTML = names.map((n, i) => `<button type="button" class="filter-btn" data-filter="${esc(n)}" aria-pressed="${i === 0}">${esc(n)}</button>`).join("");
    box.addEventListener("click", (e) => {
      const b = e.target.closest("[data-filter]"); if (!b) return;
      $$("[data-filter]", box).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      renderProjects(b.dataset.filter);
    });
  }

  /* Theme */
  function setupTheme() {
    const root = document.documentElement;
    $("#theme-toggle").addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* Mobile menu */
  function setupMenu() {
    const btn = $("#menu-toggle"), menu = $("#mobile-menu"), header = $("#site-header");
    const set = (open) => {
      menu.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`; icons();
    };
    btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("click", (e) => { if (!header.contains(e.target)) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { set(false); btn.focus(); } });
    matchMedia("(min-width: 768px)").addEventListener("change", (e) => e.matches && set(false));
  }

  /* Active section + reveal */
  function setupObservers() {
    const links = $$("[data-nav]");
    const sections = NAV.map(([id]) => document.getElementById(id)).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => {
          const on = a.dataset.nav === en.target.id;
          a.classList.toggle("active", on);
          on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));

    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => reduceMotion ? el.classList.add("visible") : reveal.observe(el));
  }

  /* Typing role text */
  function setupTyping() {
    const el = $("#typed"); if (!el) return;
    if (!c.roles.length) { el.parentElement.remove(); return; }
    if (reduceMotion) { el.textContent = c.roles[0]; return; }
    let r = 0, i = 0, del = false;
    (function tick() {
      const word = c.roles[r];
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let wait = del ? 40 : 80;
      if (!del && i === word.length) { del = true; wait = 1600; }
      else if (del && i === 0) { del = false; r = (r + 1) % c.roles.length; wait = 350; }
      setTimeout(tick, wait);
    })();
  }

  /* Back to top + year */
  function setupMisc() {
    $("#to-top").addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    $("#year").textContent = new Date().getFullYear();
  }

  function init() {
    renderStatic();
    setupFilters();
    renderProjects();
    setupTheme(); setupMenu(); setupMisc(); setupTyping();
    setupObservers();
    icons();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
  window.addEventListener("load", icons); // in case the icon library finished loading after init
})();