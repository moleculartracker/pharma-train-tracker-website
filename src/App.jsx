import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Cloud,
  Database,
  Download,
  FileCheck2,
  GraduationCap,
  Languages,
  Mail,
  MessageSquareText,
  MonitorCheck,
  Phone,
  Pill,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Upload,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { translations } from "./data/translations.js";

const pageIconMap = {
  home: Stethoscope,
  features: ClipboardCheck,
  download: Download,
  activation: BadgeCheck,
  payment: ReceiptText,
  contact: Mail,
  privacy: ShieldCheck,
  terms: FileCheck2,
};

const featureIcons = [
  CalendarCheck,
  Pill,
  Activity,
  ClipboardCheck,
  MonitorCheck,
  Languages,
];

const workflowIcons = [CalendarCheck, Pill, ClipboardCheck, Building2];

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return translations.en.nav.some((item) => item.id === hash) ? hash : "home";
}

function Button({ children, variant = "primary", onClick, type = "button", icon: Icon }) {
  const variants = {
    primary: "bg-emerald-600 text-white shadow-soft hover:bg-emerald-700",
    dark: "bg-navy-900 text-white shadow-soft hover:bg-navy-800",
    secondary:
      "border border-clinical-200 bg-white text-navy-800 hover:border-emerald-600 hover:text-emerald-700",
    light: "border border-white/20 bg-white text-navy-900 hover:bg-clinical-50",
    ghost: "text-navy-800 hover:bg-navy-50",
    ghostLight: "text-white hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold transition ${variants[variant]}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
    </button>
  );
}

function IconBadge({ icon: Icon, tone = "blue" }) {
  const tones = {
    blue: "bg-navy-50 text-navy-800 ring-navy-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    white: "bg-white text-emerald-700 ring-white/40",
  };

  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${tones[tone]}`}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-normal text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-black leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle ? <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function Card({ icon: Icon, title, body, children, className = "" }) {
  return (
    <article
      className={`rounded-lg border border-clinical-200 bg-white p-6 shadow-sm transition hover:border-emerald-600/40 hover:shadow-soft ${className}`}
    >
      {Icon ? <IconBadge icon={Icon} tone="green" /> : null}
      <h2 className="mt-5 text-xl font-black text-navy-900">{title}</h2>
      {body ? <p className="mt-3 leading-7 text-slate-600">{body}</p> : null}
      {children}
    </article>
  );
}

function ScreenshotPlaceholder({ item, index }) {
  const icons = [MonitorCheck, Smartphone, Database];
  const Icon = icons[index % icons.length];

  return (
    <article className="overflow-hidden rounded-lg border border-clinical-200 bg-white shadow-sm">
      <div className="border-b border-clinical-200 bg-clinical-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <IconBadge icon={Icon} tone="blue" />
            <div>
              <h3 className="text-lg font-black text-navy-900">{item.title}</h3>
              <p className="mt-1 text-sm font-bold text-slate-500">{item.caption}</p>
            </div>
          </div>
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-black text-emerald-700 ring-1 ring-clinical-200">
            UI
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="rounded-lg border border-clinical-200 bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-3 w-28 rounded-full bg-navy-100" />
            <span className="h-8 w-8 rounded-lg bg-emerald-100" />
          </div>
          <div className="grid gap-3">
            {item.lines.map((line, lineIndex) => (
              <div
                key={line}
                className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg bg-clinical-50 p-3"
              >
                <div>
                  <div className="h-3 w-3/4 rounded-full bg-slate-300" />
                  <p className="mt-2 text-sm font-bold text-slate-600">{line}</p>
                </div>
                <span
                  className={`h-8 w-16 rounded-lg ${
                    lineIndex === 0
                      ? "bg-emerald-600/20"
                      : lineIndex === 1
                        ? "bg-navy-800/15"
                        : "bg-slate-200"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function FAQSection({ t }) {
  return (
    <section className="border-t border-clinical-200 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <SectionHeader title={t.faq.title} subtitle={t.faq.subtitle} />
        <div className="grid gap-3">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-clinical-200 bg-clinical-50 p-5 open:bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-navy-900">
                <span>{item.question}</span>
                <ChevronDown
                  className="h-5 w-5 flex-none text-emerald-700 transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ t, setPage }) {
  return (
    <section className="bg-navy-900 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-normal text-emerald-300">
            {t.cta.eyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/76">{t.cta.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="light" icon={BadgeCheck} onClick={() => setPage("activation")}>
            {t.actions.requestActivation}
          </Button>
          <Button variant="ghostLight" icon={Download} onClick={() => setPage("download")}>
            {t.actions.downloadApk}
          </Button>
        </div>
      </div>
    </section>
  );
}

function TextField({ label, placeholder, type = "text", name, multiline = false }) {
  const Input = multiline ? "textarea" : "input";
  const inputProps = multiline ? { rows: 5 } : { type };

  return (
    <label className={multiline ? "grid gap-2 md:col-span-2" : "grid gap-2"}>
      <span className="text-sm font-extrabold text-navy-900">{label}</span>
      <Input
        name={name}
        placeholder={placeholder}
        className="min-h-12 rounded-lg border border-clinical-200 bg-white px-4 py-3 text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
        {...inputProps}
      />
    </label>
  );
}

function SelectField({ label, name, options }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-extrabold text-navy-900">{label}</span>
      <select
        name={name}
        className="min-h-12 rounded-lg border border-clinical-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function FileField({ label, buttonText }) {
  return (
    <label className="grid gap-2 md:col-span-2">
      <span className="text-sm font-extrabold text-navy-900">{label}</span>
      <span className="flex min-h-16 items-center justify-between gap-3 rounded-lg border border-dashed border-emerald-600/50 bg-emerald-50 px-4 py-3 text-sm font-bold text-navy-800">
        <span>{buttonText}</span>
        <Upload className="h-5 w-5 text-emerald-700" aria-hidden="true" />
      </span>
      <input className="sr-only" type="file" accept="image/*" name="receipt" />
    </label>
  );
}

function Header({ t, language, setLanguage, currentPage, setPage }) {
  return (
    <header className="sticky top-0 z-30 border-b border-clinical-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="inline-flex items-center gap-3 text-start"
        >
          <img className="h-11 w-11 rounded-lg" src="/assets/app-icon.png" alt="" />
          <span>
            <span className="block text-base font-black text-navy-900">{t.meta.appName}</span>
            <span className="block text-xs font-bold text-emerald-700">{t.meta.appShortName}</span>
          </span>
        </button>

        <nav className="flex flex-wrap items-center gap-2" aria-label={t.meta.navLabel}>
          {t.nav.map((item) => {
            const Icon = pageIconMap[item.id];
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-extrabold transition ${
                  isActive
                    ? "bg-navy-800 text-white"
                    : "text-slate-600 hover:bg-navy-50 hover:text-navy-900"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <Button
            variant="secondary"
            icon={Languages}
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          >
            {t.meta.toggleLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ t, setPage }) {
  return (
    <footer className="border-t border-clinical-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-black text-navy-900">{t.footer.product}</p>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">{t.footer.note}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {t.nav.slice(5).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPage(item.id)}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 hover:bg-clinical-50 hover:text-navy-900"
            >
              {item.label}
            </button>
          ))}
          <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-extrabold text-emerald-700">
            <Cloud className="h-4 w-4" aria-hidden="true" />
            {t.footer.cloudflare}
          </span>
        </div>
      </div>
    </footer>
  );
}

function Hero({ t, setPage }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="medical-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-12">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-3 py-2 text-sm font-black uppercase tracking-normal text-emerald-200">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {t.hero.body}
          </p>
          <p className="mt-4 max-w-2xl font-bold leading-7 text-emerald-100">{t.hero.trust}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="light" icon={BadgeCheck} onClick={() => setPage("activation")}>
              {t.actions.requestActivation}
            </Button>
            <Button variant="ghostLight" icon={Download} onClick={() => setPage("download")}>
              {t.actions.downloadApk}
            </Button>
            <Button variant="ghostLight" icon={ClipboardCheck} onClick={() => setPage("features")}>
              {t.actions.viewFeatures}
            </Button>
          </div>
          <div className="mt-8 hidden max-w-3xl gap-3 lg:grid lg:grid-cols-3">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/8 p-4 backdrop-blur">
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-white/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center sm:flex lg:justify-end">
          <div className="w-full max-w-[600px] rounded-lg border border-white/12 bg-white p-3 text-navy-900 shadow-soft">
            <div className="mb-3 flex items-center justify-between gap-4 border-b border-clinical-200 pb-3">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-emerald-700">
                  {t.hero.previewTitle}
                </p>
                <h2 className="mt-1 text-xl font-black">{t.hero.consoleTitle}</h2>
              </div>
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                {t.hero.status}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_140px] lg:grid-cols-[1fr_160px]">
              <div className="grid gap-3">
                {t.hero.previewItems.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg bg-clinical-50 p-3">
                    <div>
                      <p className="text-sm font-black text-navy-900">{label}</p>
                      <div className="mt-3 h-2 rounded-full bg-clinical-200">
                        <div className="h-2 rounded-full bg-emerald-600" style={{ width: value.includes("%") ? value : "64%" }} />
                      </div>
                    </div>
                    <strong className="text-2xl font-black text-navy-900">{value}</strong>
                  </div>
                ))}
                <div className="hidden rounded-lg border border-clinical-200 p-4 sm:block">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-500">{t.hero.reviewQueue}</span>
                    <UsersRound className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {t.hero.queueItems.map((item) => (
                      <div key={item} className="rounded-lg bg-navy-50 p-3 text-center text-xs font-black text-navy-800">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden rounded-[2rem] bg-navy-900 p-2 sm:block">
                <video
                  className="aspect-[9/16] w-full rounded-[1.5rem] object-cover"
                  src="/assets/intro.mp4"
                  poster="/assets/app-icon.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
            <div className="hidden">
              {t.hero.previewItems.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-clinical-200 bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-black text-navy-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ t, setPage }) {
  return (
    <>
      <Hero t={t} setPage={setPage} />
      <section className="mx-auto -mt-8 grid max-w-7xl gap-4 px-4 pb-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        {t.home.platform.map((section, index) => {
          const icons = [GraduationCap, ShieldCheck, BarChart3];
          return (
            <article key={section.title} className="rounded-lg border border-clinical-200 bg-white p-6 shadow-soft">
              <IconBadge icon={icons[index]} tone={index === 1 ? "green" : "blue"} />
              <h2 className="mt-5 text-xl font-black leading-tight text-navy-900">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
            </article>
          );
        })}
      </section>

      <section className="bg-clinical-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t.home.workflowTitle} subtitle={t.home.workflowSubtitle} center />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.home.workflow.map((item, index) => (
              <Card key={item.title} icon={workflowIcons[index]} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t.features.eyebrow}
            title={t.features.title}
            subtitle={t.features.subtitle}
            center
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.features.cards.map((card, index) => (
              <Card key={card.title} icon={featureIcons[index]} title={card.title} body={card.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clinical-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t.screenshots.eyebrow}
            title={t.screenshots.title}
            subtitle={t.screenshots.subtitle}
            center
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {t.screenshots.items.map((item, index) => (
              <ScreenshotPlaceholder key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection t={t} />
      <CTASection t={t} setPage={setPage} />
    </>
  );
}

function FeaturesPage({ t }) {
  return (
    <PageFrame>
      <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} subtitle={t.features.subtitle} center />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.features.cards.map((card, index) => (
          <Card key={card.title} icon={featureIcons[index]} title={card.title} body={card.body} />
        ))}
      </div>
      <div className="mt-12 rounded-lg bg-navy-900 p-8 text-white">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-emerald-300">
              {t.screenshots.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight">{t.screenshots.title}</h2>
            <p className="mt-4 leading-8 text-white/76">{t.screenshots.subtitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.screenshots.items.map((item, index) => {
              const icons = [MonitorCheck, Smartphone, UserCheck];
              const Icon = icons[index];
              return (
                <div key={item.title} className="rounded-lg bg-white/8 p-4 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-black">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function DownloadPage({ t }) {
  const releaseItems = [
    [t.download.release.versionLabel, t.download.release.version],
    [t.download.release.dateLabel, t.download.release.date],
    [t.download.release.sizeLabel, t.download.release.size],
  ];

  return (
    <PageFrame>
      <SectionHeader title={t.download.title} subtitle={t.download.subtitle} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-clinical-200 bg-white p-8 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <IconBadge icon={Smartphone} tone="green" />
              <h2 className="mt-5 text-2xl font-black text-navy-900">{t.download.cardTitle}</h2>
              <p className="mt-3 inline-flex rounded-lg bg-navy-50 px-3 py-2 text-sm font-black text-navy-800">
                {t.download.status}
              </p>
            </div>
            <span className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-700 ring-1 ring-emerald-600/15">
              {t.download.release.version}
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">{t.download.body}</p>

          <dl className="mt-7 grid gap-3 sm:grid-cols-3">
            {releaseItems.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-clinical-200 bg-clinical-50 p-4">
                <dt className="text-xs font-black uppercase tracking-normal text-slate-500">{label}</dt>
                <dd className="mt-2 text-lg font-black text-navy-900">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 rounded-lg border border-dashed border-emerald-600/40 bg-emerald-50 p-4">
            <p className="text-sm font-black text-navy-900">{t.download.release.linkLabel}</p>
            <p className="mt-2 break-all text-sm font-bold text-emerald-700">
              {t.download.release.href}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-extrabold text-white shadow-soft transition hover:bg-emerald-700"
              href={t.download.release.href}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{t.download.release.button}</span>
            </a>
          </div>
          <p className="mt-4 text-sm font-bold leading-6 text-slate-500">{t.download.release.note}</p>
        </article>
        <article className="rounded-lg bg-navy-900 p-8 text-white">
          <h2 className="text-2xl font-black">{t.download.installTitle}</h2>
          <ul className="mt-6 grid gap-4">
            {t.download.installSteps.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                <span className="leading-7 text-white/82">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg bg-white/8 p-4 ring-1 ring-white/10">
            <h3 className="font-black text-white">{t.download.requirementsTitle}</h3>
            <ul className="mt-4 grid gap-3">
              {t.download.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/76">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-emerald-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </PageFrame>
  );
}

function ActivationPage({ t }) {
  return (
    <PageFrame>
      <SectionHeader title={t.activation.title} subtitle={t.activation.subtitle} />
      <form className="mt-10 grid gap-4 rounded-lg border border-clinical-200 bg-white p-6 shadow-soft md:grid-cols-2">
        <h2 className="text-2xl font-black text-navy-900 md:col-span-2">{t.activation.formTitle}</h2>
        <TextField
          name="fullName"
          label={t.activation.fields.fullName}
          placeholder={t.activation.placeholders.fullName}
        />
        <TextField
          name="email"
          type="email"
          label={t.activation.fields.email}
          placeholder={t.activation.placeholders.email}
        />
        <TextField
          name="phone"
          type="tel"
          label={t.activation.fields.phone}
          placeholder={t.activation.placeholders.phone}
        />
        <TextField
          name="university"
          label={t.activation.fields.university}
          placeholder={t.activation.placeholders.university}
        />
        <SelectField name="role" label={t.activation.fields.role} options={t.activation.roleOptions} />
        <TextField name="paymentDate" type="date" label={t.activation.fields.paymentDate} />
        <TextField
          name="paymentAmount"
          label={t.activation.fields.paymentAmount}
          placeholder={t.activation.placeholders.paymentAmount}
        />
        <TextField
          name="qiSender"
          label={t.activation.fields.qiSender}
          placeholder={t.activation.placeholders.qiSender}
        />
        <FileField label={t.activation.fields.receipt} buttonText={t.activation.placeholders.receipt} />
        <TextField
          name="notes"
          multiline
          label={t.activation.fields.notes}
          placeholder={t.activation.placeholders.notes}
        />
        <p className="rounded-lg bg-navy-50 p-4 text-sm font-bold leading-7 text-navy-800 md:col-span-2">
          {t.activation.notice}
        </p>
        <div className="md:col-span-2">
          <Button type="submit" icon={BadgeCheck}>
            {t.actions.submit}
          </Button>
        </div>
      </form>
    </PageFrame>
  );
}

function PaymentPage({ t }) {
  return (
    <PageFrame>
      <SectionHeader title={t.payment.title} subtitle={t.payment.subtitle} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="rounded-lg border border-emerald-600/30 bg-emerald-50 p-8">
          <IconBadge icon={Banknote} tone="green" />
          <p className="mt-6 text-xl font-black leading-9 text-navy-900">{t.payment.warning}</p>
        </article>
        <article className="rounded-lg border border-clinical-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-navy-900">{t.payment.stepsTitle}</h2>
          <ol className="mt-6 grid gap-4">
            {t.payment.steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-lg bg-clinical-50 p-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-navy-800 text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="leading-7 text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </PageFrame>
  );
}

function ContactPage({ t }) {
  return (
    <PageFrame>
      <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          {t.contact.cards.map((card, index) => {
            const icons = [Mail, Phone, MonitorCheck];
            return <Card key={card.title} icon={icons[index]} title={card.title} body={card.body} />;
          })}
        </div>
        <form className="grid gap-4 rounded-lg border border-clinical-200 bg-white p-6 shadow-soft md:grid-cols-2">
          <h2 className="text-2xl font-black text-navy-900 md:col-span-2">{t.contact.formTitle}</h2>
          <TextField
            name="name"
            label={t.contact.fields.name}
            placeholder={t.contact.placeholders.name}
          />
          <TextField
            name="email"
            type="email"
            label={t.contact.fields.email}
            placeholder={t.contact.placeholders.email}
          />
          <TextField
            name="message"
            multiline
            label={t.contact.fields.message}
            placeholder={t.contact.placeholders.message}
          />
          <div className="md:col-span-2">
            <Button type="submit" icon={MessageSquareText}>
              {t.contact.send}
            </Button>
          </div>
        </form>
      </div>
    </PageFrame>
  );
}

function PolicyPage({ content }) {
  return (
    <PageFrame>
      <SectionHeader title={content.title} subtitle={content.updated} />
      <div className="mt-10 grid gap-4">
        {content.sections.map((section) => (
          <article key={section.title} className="rounded-lg border border-clinical-200 bg-white p-6">
            <h2 className="text-xl font-black text-navy-900">{section.title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function PageFrame({ children }) {
  return (
    <main className="mx-auto min-h-[72vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {children}
    </main>
  );
}

export function App() {
  const [language, setLanguage] = useState("en");
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const t = translations[language];

  const pages = useMemo(
    () => ({
      home: <HomePage t={t} setPage={setCurrentPage} />,
      features: <FeaturesPage t={t} />,
      download: <DownloadPage t={t} />,
      activation: <ActivationPage t={t} />,
      payment: <PaymentPage t={t} />,
      contact: <ContactPage t={t} />,
      privacy: <PolicyPage content={t.privacy} />,
      terms: <PolicyPage content={t.terms} />,
    }),
    [t],
  );

  useEffect(() => {
    document.documentElement.lang = t.meta.lang;
    document.documentElement.dir = t.meta.dir;
  }, [t]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${currentPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="page-shell">
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
      {pages[currentPage]}
      <Footer t={t} setPage={setCurrentPage} />
    </div>
  );
}
