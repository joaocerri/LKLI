const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const statementsEl = $("#statements");
const pillarsEl = $("#pillars");
const quickLinksEl = $("#quickLinks");
const teamGrid = $("#teamGrid");
const timelineEl = $("#timeline");
const processEl = $("#processStepper");
const faqEl = $("#faqList");
const teamModal = $("#teamModal");
const heroVideo = $("#heroVideo");
const siteHeader = $(".site-header");

siteData.teamMembers = siteData.teamMembers.map(({ area, ...member }) => member);

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const resolveProjectAsset = (path) => {
  if (!path || /^https?:\/\//i.test(path)) return path;

  const projectBase = new URL("./", document.baseURI);
  return new URL(path.replace(/^\.?\//, ""), projectBase).href;
};

const avatarMarkup = (name, photo = "") => photo
  ? `<div class="avatar"><img src="${resolveProjectAsset(photo)}" alt="Foto de ${name}" loading="lazy" /></div>`
  : `<div class="avatar" aria-hidden="true">${initials(name)}</div>`;

function renderStatements() {
  const aboutSection = $("#sobre");
  aboutSection?.querySelector(".section-heading span")?.replaceChildren("SOBRE A ÁREA");
  aboutSection?.querySelector(".section-heading h2")?.replaceChildren("Desenvolvimento e Inovação: transformando oportunidades em valor.");
  aboutSection?.querySelector(".section-copy")?.replaceChildren("Atuamos em diferentes frentes para impulsionar inovação, digitalização e decisões orientadas por dados na LPC, conectando pessoas, tecnologia e necessidades do negócio.");
  aboutSection?.querySelector(".section-heading span")?.replaceChildren("SOBRE A ÁREA");
  aboutSection?.querySelector(".section-heading h2")?.replaceChildren("Desenvolvimento e Inovação: transformando oportunidades em valor.");
  aboutSection?.querySelector(".section-copy")?.replaceChildren("Transformamos oportunidades em soluções que geram valor para a LPC, conectando pessoas, processos, tecnologia e dados para impulsionar inovação, digitalização e melhoria contínua.");
  const icons = [
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5v38M10 17l14-12 14 12M10 31l14 12 14-12"/><circle cx="24" cy="24" r="5"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><path d="M24 7v10M24 31v10M7 24h10M31 24h10"/><circle cx="24" cy="24" r="4"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5l16 7v11c0 10-6.5 16-16 20C14.5 39 8 33 8 23V12l16-7Z"/><path d="m16 24 5 5 11-12"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16"/><path d="M24 14v11l8 5"/><circle cx="24" cy="24" r="20"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 10h32v28H8z"/><path d="M15 30v-8M24 30V14M33 30v-12"/></svg>',
  ];
  const aboutPillars = [
    { title: "Cultura, Capacitação e Educação", text: "Fortalecer a cultura de inovação na LPC, promovendo conhecimento e capacitação em novas ferramentas e metodologias aplicadas à automação, digitalização e tomada de decisão orientada por dados." },
    { title: "Pesquisa e Desenvolvimento", text: "Explorar novas tecnologias, ferramentas e soluções, desenvolvendo novas competências e realizando provas de conceito para avaliar possibilidades e aplicações para o negócio." },
    { title: "Desenvolvimento de Soluções", text: "Desenvolver e implementar soluções de digitalização e automação de processos, utilizando prototipação quando necessário para transformar oportunidades em soluções aplicáveis ao negócio." },
    { title: "Interação com o Ecossistema", text: "Conectar a LPC ao ecossistema de inovação por meio de parcerias, benchmarking e colaboração com empresas, universidades e startups, ampliando o acesso a conhecimento, tecnologias e novas soluções." },
    { title: "Data Management", text: "Gerenciar e disponibilizar dados de forma estruturada, apoiando sua utilização como base para análises, decisões e desenvolvimento de soluções orientadas por dados." },
  ];
  statementsEl.innerHTML = aboutPillars
    .map(
      (item, index) => `
      <article class="statement-card fade-in">
        <div class="statement-icon">${icons[index]}</div>
        <span class="pillar-index">0${index + 1}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`
    )
    .join("");
}

function renderPillars() {
  const hub = `<div class="pillar-hub"><svg style="width: 1000px; height: auto;" viewBox="0 0 408 563" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lâmpada de inovação"><g fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g opacity="0.95"><path d="M84 123 132 84 215 67 293 100 339 151 337 233 312 300 277 352 247 379 203 420M84 123 59 186 78 278 120 368 135 420M132 84 127 180 78 278M215 67 183 145 199 202M293 100 236 140 302 181 337 151M337 233 302 181 312 300M247 379 277 352 312 300M84 123 127 180 183 145 236 140 215 67M59 186 127 180 199 202 302 181M59 186 100 221 199 202 264 212 302 181M78 278 100 221 144 246 199 202 264 212 238 276M78 278 144 246 153 310 203 326 238 276M120 368 153 310 203 326 247 379M135 420 171 376 203 420 247 379M171 376 203 326 238 276 277 352M203 326 199 202 236 140 302 181M236 140 264 212 277 352M264 212 238 276 312 300M199 202 144 246 153 310M127 180 100 221 144 246M183 145 199 202 127 180M183 145 236 140M84 123 183 145M215 67 236 140 293 100M293 100 302 181M339 151 302 181 337 233M337 233 277 352M312 300 247 379M120 368 171 376M153 310 171 376M203 420 247 379M84 123 59 186 100 221M127 180 144 246M144 246 199 202M153 310 203 326M171 376 203 326M238 276 247 379M264 212 238 276M277 352 247 379"/></g><g fill="#FFFFFF" stroke="none"><circle cx="132" cy="84" r="14"/><circle cx="215" cy="67" r="8"/><circle cx="293" cy="100" r="7"/><circle cx="339" cy="151" r="10"/><circle cx="337" cy="233" r="14"/><circle cx="312" cy="300" r="8"/><circle cx="277" cy="352" r="10"/><circle cx="247" cy="379" r="10"/><circle cx="203" cy="420" r="13"/><circle cx="84" cy="123" r="10"/><circle cx="59" cy="186" r="11"/><circle cx="78" cy="278" r="13"/><circle cx="120" cy="368" r="10"/><circle cx="135" cy="420" r="7"/><circle cx="127" cy="180" r="10"/><circle cx="183" cy="145" r="8"/><circle cx="236" cy="140" r="10"/><circle cx="302" cy="181" r="10"/><circle cx="199" cy="202" r="14"/><circle cx="100" cy="221" r="7"/><circle cx="144" cy="246" r="10"/><circle cx="264" cy="212" r="7"/><circle cx="238" cy="276" r="8"/><circle cx="153" cy="310" r="10"/><circle cx="203" cy="326" r="6"/><circle cx="171" cy="376" r="10"/></g><g fill="#FFFFFF" stroke="none"><path d="M137 437h132l-4 14H143l-6-14ZM143 451h122l5 14H138l5-14ZM138 465h132l-4 7H142l-4-7ZM141 476h126l-3 7H144l-3-7ZM144 487h120l-3 7H147l-3-7ZM148 498h112l-3 7H151l-3-7ZM151 509h106l-3 7H154l-3-7Z"/><path d="M154 516h100l-3 8c-3 9-12 15-22 16h-50c-11-1-20-7-23-16l-2-8Z"/><ellipse cx="204" cy="540" rx="17" ry="7"/></g></g></svg></div>`;
  const connections = `<svg class="pillar-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50 L16 18 M50 50 L84 18 M50 50 L16 82 M50 50 L84 82 M50 50 L50 8"/></svg>`;
  pillarsEl.innerHTML = `${connections}${hub}<div class="pillar-ecosystem-grid">${siteData.pillars
    .map(
      (item, index) => `
      <article class="pillar-card fade-in">
        <span class="pillar-index">0${index + 1}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`
    )
    .join("")}</div>`;
}

function renderQuickLinks() {
  const icons = {
    education: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 22l24-12 24 12-24 12L8 22Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M18 28v12c0 4 6 8 14 8s14-4 14-8V28" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M56 22v16" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M56 38l-4 4" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
      </svg>`,
    settings: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M26 12h12l2 7a18 18 0 0 1 6 3l7-2 6 10-5 5a18 18 0 0 1 0 6l5 5-6 10-7-2a18 18 0 0 1-6 3l-2 7H26l-2-7a18 18 0 0 1-6-3l-7 2-6-10 5-5a18 18 0 0 1 0-6l-5-5 6-10 7 2a18 18 0 0 1 6-3l2-7Z" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/>
        <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3.2"/>
      </svg>`,
  };

  quickLinksEl.innerHTML = siteData.quickLinks
    .map(
      (item) => `
      <article class="quick-link ${item.highlight ? "is-primary" : ""} fade-in">
        <div class="quick-link-glow" aria-hidden="true"></div>
        <div class="quick-link-icon" aria-hidden="true">${icons[item.icon]}</div>
        <div class="quick-link-main">
          <div class="quick-link-top">
            <span class="pill ${item.highlight ? "high" : "medium"}">${item.category}</span>
            <span class="quick-link-chevron" aria-hidden="true">›</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="quick-link-chips">
            <span class="quick-chip">${item.chip}</span>
            <span class="quick-chip">${item.eta}</span>
          </div>
        </div>
        <div class="quick-link-actions">
          <button class="quick-link-cta" type="button" data-url="${item.url}" aria-label="${item.cta} - ${item.title}">
            <span class="quick-link-cta-icon" aria-hidden="true">${item.highlight ? "⌁" : "↗"}</span>
            <span>${item.cta}</span>
          </button>
        </div>
      </article>`
    )
    .join("");
}

quickLinksEl?.addEventListener("click", (event) => {
  const button = event.target.closest(".quick-link-cta[data-url]");
  if (!button) return;
  window.open(button.dataset.url, "_blank", "noopener,noreferrer");
});

function teamDescription(member) {
  const responsibilities = member.responsibilities.slice(0, 2).join(" e ");
  const tools = member.tools.slice(0, 2).join(" e ");
  return `Atua com foco em ${responsibilities.toLowerCase()}. Utiliza ${tools} para apoiar entregas, melhorias e resultados para a área.`;
}

function teamCard(member) {
  const el = document.createElement("article");
  el.className = "team-card fade-in";
  const group = member.name === "Gabriela Tartare"
    ? "Leadership"
    : /Innovation|LPC Lab/i.test(member.role)
        ? "Business / Innovation"
        : "SAP";
  const groupLabel = group === "Leadership" ? "Liderança" : group;
  el.innerHTML = `
    <div class="team-card-inner">
      <div class="team-face team-front">
        ${avatarMarkup(member.name, member.photo)}
        <div>
          <span class="team-group-badge ${group === "SAP" ? "is-sap" : group === "Leadership" ? "is-leadership" : ""}">${groupLabel}</span>
          <h3 class="team-name">${member.name}</h3>
          <p class="team-role">${member.role}</p>
        </div>
        <button class="button button-secondary" type="button" data-open-modal>Ver perfil</button>
      </div>
      <div class="team-face team-back">
        <p>${teamDescription(member)}</p>
      </div>
    </div>`;
  el.dataset.name = member.name.toLowerCase();
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `Abrir perfil de ${member.name}`);
  el.addEventListener("click", (event) => {
    openModal(member);
  });
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(member);
    }
  });
  return el;
}

function renderTeam(list = siteData.teamMembers) {
  teamGrid.innerHTML = "";
  const groups = [
    { key: "Leadership", title: "Liderança", description: "Direção e integração das frentes LKLI.", className: "is-leadership" },
    { key: "SAP", title: "SAP", description: "Especialistas que sustentam processos e soluções SAP.", className: "is-sap" },
    { key: "Business / Innovation", title: "Business / Innovation", description: "Inovação, suporte e experimentação conectados ao negócio.", className: "is-business" },
  ];
  const getGroup = (member) => member.name === "Gabriela Tartare"
    ? "Leadership"
    : /Innovation|LPC Lab/i.test(member.role)
        ? "Business / Innovation"
        : "SAP";

  groups.forEach((group) => {
    const members = list.filter((member) => getGroup(member) === group.key);
    if (!members.length) return;
    const section = document.createElement("section");
    section.className = `team-organogram-group ${group.className}`;
    section.innerHTML = `<div class="team-group-heading"><span>${group.key === "Leadership" ? "01" : ""}</span><div><h3>${group.title}</h3><p>${group.description}</p></div></div><div class="team-group-grid"></div>`;
    const grid = section.querySelector(".team-group-grid");
    members.forEach((member) => grid.appendChild(teamCard(member)));
    teamGrid.appendChild(section);
  });
}

function renderTimeline() {
  timelineEl.innerHTML = `
    <div class="roadmap-shell">
      <div class="roadmap-sticky">
        <div class="roadmap-track-wrap">
          <div class="history-roadmap-viewport" id="roadmapViewport">
            <div class="history-roadmap-track" id="roadmapTrack">
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const viewport = $("#roadmapViewport");
  const track = $("#roadmapTrack");
  const sticky = $(".roadmap-sticky", timelineEl);
  let detail = $("#roadmapDetail");
  if (!detail) {
    detail = document.createElement("dialog");
    detail.className = "roadmap-detail";
    detail.id = "roadmapDetail";
    detail.setAttribute("aria-live", "polite");
    document.body.appendChild(detail);
  }
  const timelineIcons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16 7-7 4 4 5-5M16 8h4v4"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v5l-4 8a3 3 0 0 0 3 5h6a3 3 0 0 0 3-5l-4-8V3M8 15h8"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM8 9h8M8 13h3M15 13h1M8 17h8"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v12H5zM8 3v3M16 3v3M8 10h8M8 14h5"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"/><circle cx="12" cy="12" r="4"/></svg>',
  ];
  track.innerHTML = siteData.timeline
    .map((item, index) => {
      const alignTop = index % 2 === 0;
      const leftPositions = ["2%", "15%", "28%", "43%", "58%", "74%", "88%"];
      return `
      <div
        class="history-roadmap-item ${alignTop ? "is-top" : "is-bottom"}"
        data-timeline-index="${index}"
        role="button"
        tabindex="0"
        aria-label="Ver detalhes de ${item.year}"
        style="left: ${leftPositions[index]}; top: 0;"
      >
        <div class="history-roadmap-content">
          <span class="history-roadmap-icon">${timelineIcons[index]}</span>
          <span class="history-roadmap-year">${item.year}</span>
          <p class="history-roadmap-title">${item.title}</p>
        </div>
        <div class="history-roadmap-dot" aria-hidden="true"></div>
      </div>`;
    })
    .join("");
  track.insertAdjacentHTML(
    "afterbegin",
    `<div class="history-roadmap-line" aria-hidden="true">
      <div class="history-roadmap-line-progress" id="roadmapLineProgress"></div>
    </div>`
  );
  const lineProgress = $("#roadmapLineProgress");
  let activeIndex = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let measures = { maxTranslate: 0 };
  let wheelAccumulator = 0;
  let wheelResetTimer;
  let transitionLocked = false;

  function renderDetail(index) {
    const item = siteData.timeline[index];
    detail.innerHTML = `
      <button class="modal-close" type="button" data-close-roadmap aria-label="Fechar detalhes">×</button>
      <div class="roadmap-detail-card">
        <div class="roadmap-detail-head">
          <span class="pill">Ano ativo</span>
          <h3 id="roadmapDetailTitle">${item.year}</h3>
          <p>${item.title}</p>
        </div>
        <p class="roadmap-detail-description">${item.description}</p>
        <div>
          <h4>Principais entregas</h4>
          <ul>${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Impacto / aprendizado</h4>
          <p>${item.impact}</p>
        </div>
        <div>
          <h4>Aprendizado</h4>
          <p>${item.learning || item.impact}</p>
        </div>
        <a class="button button-primary" href="#links">Ver detalhes</a>
      </div>`;
  }

  function openDetail() {
    if (!detail.open) detail.showModal();
    detail.setAttribute("role", "dialog");
    detail.setAttribute("aria-modal", "true");
    detail.setAttribute("aria-labelledby", "roadmapDetailTitle");
    const focusTarget = $('[data-close-roadmap]', detail) || detail;
    focusTarget.focus?.();
  }

  function closeDetail() {
    if (detail.open) detail.close();
  }

  function setActiveIndex(index, fromScroll = false, shouldOpenDetail = true) {
    const nextIndex = Math.max(0, Math.min(siteData.timeline.length - 1, index));
    activeIndex = nextIndex;
    $$(".history-roadmap-item", track).forEach((node, nodeIndex) => {
      const active = nodeIndex === nextIndex;
      node.classList.toggle("is-active", active);
      if (active) node.setAttribute("aria-current", "step");
      else node.removeAttribute("aria-current");
    });
    renderDetail(nextIndex);
    const progress = nextIndex / Math.max(1, siteData.timeline.length - 1);
    lineProgress.style.width = `${Math.max(8, progress * 100)}%`;
    track.style.transform = `translate3d(${-measures.maxTranslate * progress}px, 0, 0)`;
    if (shouldOpenDetail && !fromScroll) openDetail();
  }

  function measure() {
    measures.maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
  }

  function roadmapIsPinned() {
    const rect = sticky.getBoundingClientRect();
    const activationLine = window.innerHeight * 0.5;
    return rect.top <= activationLine && rect.bottom >= activationLine;
  }

  function canReleaseScroll(deltaY) {
    return (activeIndex === 0 && deltaY < 0) || (activeIndex === siteData.timeline.length - 1 && deltaY > 0);
  }

  track.addEventListener("click", (event) => {
    const node = event.target.closest(".history-roadmap-item");
    if (!node) return;
    setActiveIndex(Number(node.dataset.timelineIndex));
  });

  track.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") return setActiveIndex(0);
    if (event.key === "End") return setActiveIndex(siteData.timeline.length - 1);
    const dir = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    setActiveIndex(activeIndex + dir);
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (!roadmapIsPinned()) return;
      if (canReleaseScroll(event.deltaY)) {
        wheelAccumulator = 0;
        return;
      }
      event.preventDefault();
      if (transitionLocked) return;

      const normalizedDelta = event.deltaMode === 1
        ? event.deltaY * 16
        : event.deltaMode === 2
          ? event.deltaY * window.innerHeight
          : event.deltaY;
      wheelAccumulator += normalizedDelta;
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => { wheelAccumulator = 0; }, 140);

      const stepThreshold = 100;
      if (Math.abs(wheelAccumulator) < stepThreshold) return;

      const direction = Math.sign(wheelAccumulator);
      wheelAccumulator = 0;
      transitionLocked = true;
      setActiveIndex(activeIndex + direction, false, false);
      setTimeout(() => { transitionLocked = false; }, prefersReducedMotion ? 80 : 420);
    },
    { passive: false }
  );

  renderDetail(0);
  measure();
  setActiveIndex(0, true);
  closeDetail();
  detail.addEventListener("click", (event) => {
    if (event.target === detail) closeDetail();
    if (event.target.closest("[data-close-roadmap]")) closeDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && detail.open) closeDetail();
  });
  detail.addEventListener("close", () => {
    const activeButton = $(`.history-roadmap-item[data-timeline-index="${activeIndex}"]`, track);
    activeButton?.focus();
  });
  window.addEventListener("resize", () => requestAnimationFrame(measure));
  measure();
}

function renderProcess() {
  processEl.innerHTML = siteData.process
    .map(
      (item, index) => `
      <article class="step-card fade-in">
        <span class="step-index">${index + 1}</span>
        <span class="pill ${item.badge.toLowerCase().includes("high") ? "high" : item.badge.toLowerCase().includes("medium") ? "medium" : "low"}">${item.badge}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`
    )
    .join("");
}

function renderFaq() {
  faqEl.innerHTML = siteData.faq
    .map(
      (item, index) => `
      <article class="faq-item">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-${index}">
          <span>${item.q}</span>
          <strong>+</strong>
        </button>
        <div class="faq-answer" id="faq-${index}">
          <p>${item.a}</p>
          ${item.buttons ? `
            <div class="hero-actions">
              <a class="button button-primary" href="#links">Ir para links rapidos</a>
              <a class="button button-secondary" href="#links">Abrir formulario</a>
            </div>` : ""}
        </div>
      </article>`
    )
    .join("");

  $$(".faq-question", faqEl).forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function openModal(member) {
  $("#modalArea").textContent = "Desenvolvimento e Inovação";
  $("#teamModalTitle").textContent = member.name;
  $("#modalRole").textContent = member.role;
  $("#modalBio").textContent = member.fullBio;
  $("#modalContact").textContent = member.contact;
  $("#modalResponsibilities").innerHTML = member.responsibilities.map((item) => `<li>${item}</li>`).join("");
  $("#modalTools").innerHTML = member.tools.map((item) => `<li>${item}</li>`).join("");
  $("#modalPhoto").innerHTML = avatarMarkup(member.name, member.photo);
  teamModal.showModal();
}

function setupModal() {
  $("[data-close-modal]").addEventListener("click", () => teamModal.close());
  teamModal.addEventListener("click", (event) => {
    if (event.target === teamModal) teamModal.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && teamModal.open) teamModal.close();
  });
}

function setupVideoFallback() {
  const fallback = $(".hero-fallback");
  heroVideo.addEventListener("loadeddata", () => fallback?.style.setProperty("opacity", "0"));
  heroVideo.addEventListener("error", () => {
    heroVideo.style.display = "none";
    fallback?.style.setProperty("opacity", "1");
  });
}

function setupHeader() {
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 8 || currentScrollY < lastScrollY) siteHeader?.classList.remove("is-hidden");
    else if (currentScrollY > lastScrollY + 4) siteHeader?.classList.add("is-hidden");
    lastScrollY = currentScrollY;
  }, { passive: true });
}

renderStatements();
renderPillars();
renderQuickLinks();
renderTeam();
renderTimeline();
renderProcess();
renderFaq();
setupModal();
setupVideoFallback();
setupHeader();
