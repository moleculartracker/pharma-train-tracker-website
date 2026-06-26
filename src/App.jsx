import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Database,
  Download,
  FileCheck2,
  GraduationCap,
  KeyRound,
  Languages,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquareText,
  MonitorCheck,
  Phone,
  Pill,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Clock3,
  Upload,
  UserCheck,
  UsersRound,
  WifiOff,
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

const workflowIcons = [CalendarCheck, Pill, ClipboardCheck, Building2];
const homeFeatureIcons = [
  CalendarCheck,
  ClipboardCheck,
  BarChart3,
  MapPin,
  WifiOff,
  Languages,
];
const featureDetailIcons = [
  CalendarCheck,
  FileCheck2,
  Activity,
  ClipboardCheck,
  GraduationCap,
  BarChart3,
  MonitorCheck,
  WifiOff,
  CheckCircle2,
  Building2,
  Languages,
];
const contactFormEndpoint = "https://formspree.io/f/xqeorakd";

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return translations.en.nav.some((item) => item.id === hash) ? hash : "home";
}

function Button({ children, variant = "primary", onClick, type = "button", icon: Icon }) {
  const variants = {
    primary: "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700",
    dark: "bg-navy-900 text-white shadow-sm hover:bg-navy-800",
    secondary:
      "border border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15",
    outline:
      "border border-clinical-200 bg-white text-navy-900 hover:border-emerald-600 hover:text-emerald-700",
    light: "border border-white/20 bg-white text-navy-900 hover:bg-clinical-50",
    ghost: "text-navy-800 hover:bg-navy-50",
    ghostLight: "text-white hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-base font-semibold transition ${variants[variant]}`}
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-[42px]">
        {title}
      </h1>
      {subtitle ? <p className="mt-5 text-lg font-normal leading-8 text-slate-700">{subtitle}</p> : null}
    </div>
  );
}

function Card({ icon: Icon, title, body, children, className = "" }) {
  return (
    <article
      className={`rounded-lg border border-clinical-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-soft ${className}`}
    >
      {Icon ? <IconBadge icon={Icon} tone="green" /> : null}
      <h2 className="mt-5 text-lg font-semibold text-navy-900">{title}</h2>
      {body ? <p className="mt-3 text-[15px] leading-7 text-slate-600">{body}</p> : null}
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
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1 text-sm font-normal text-slate-500">{item.caption}</p>
            </div>
          </div>
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-clinical-200">
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
                  <p className="mt-2 text-sm font-normal text-slate-600">{line}</p>
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy-900">
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-emerald-300">
            {t.cta.eyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
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
      <span className="text-sm font-semibold text-navy-900">{label}</span>
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
      <span className="text-sm font-semibold text-navy-900">{label}</span>
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
      <span className="text-sm font-semibold text-navy-900">{label}</span>
      <span className="flex min-h-16 items-center justify-between gap-3 rounded-lg border border-dashed border-emerald-600/50 bg-emerald-50 px-4 py-3 text-sm font-bold text-navy-800">
        <span>{buttonText}</span>
        <Upload className="h-5 w-5 text-emerald-700" aria-hidden="true" />
      </span>
      <input className="sr-only" type="file" accept="image/*" name="receipt" />
    </label>
  );
}

function BrandMark({ t, light = false }) {
  return (
    <img
      className={`h-[42px] w-auto max-w-[238px] object-contain ${light ? "brightness-0 invert" : ""}`}
      src="/assets/logo-moleculartracker.png"
      alt={t.meta.appName}
    />
  );
}

function Header({ t, language, setLanguage, currentPage, setPage }) {
  const visibleNav = ["home", "features", "activation", "download", "contact"];
  const navItems = t.nav.filter((item) => visibleNav.includes(item.id));

  return (
    <header className="sticky top-0 z-30 border-b border-[#e3e7ec] bg-white">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-8 px-4 py-5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="inline-flex flex-none items-center text-start"
        >
          <BrandMark t={t} />
        </button>

        <nav className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-3 overflow-x-auto" aria-label={t.meta.navLabel}>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={`inline-flex min-h-10 flex-none items-center rounded-md px-3.5 text-[15px] transition sm:text-base ${
                  isActive
                    ? "bg-clinical-50 font-medium text-navy-900"
                    : "font-normal text-slate-700 hover:bg-clinical-50 hover:text-navy-900"
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="inline-flex flex-none overflow-hidden rounded-md border border-clinical-200 bg-white">
            {["en", "ar"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={`min-h-10 px-3.5 text-sm transition ${
                  language === code ? "bg-navy-900 text-white" : "text-slate-600 hover:bg-clinical-50"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage("activation")}
            className="inline-flex min-h-11 flex-none items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            {t.actions.requestActivation}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ t, setPage }) {
  const platformLinks = ["features", "activation", "download", "contact"];
  const legalLinks = ["privacy", "terms", "payment"];
  const getNav = (id) => t.nav.find((item) => item.id === id);

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1220px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-3">
          <div>
            <BrandMark t={t} light />
            <p className="mt-6 max-w-sm text-lg leading-8 text-white/75">{t.footer.note}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-normal text-white/45">{t.footer.platformTitle}</h3>
            <div className="mt-6 grid gap-4">
              {platformLinks.map((id) => {
                const item = getNav(id);
                return item ? (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPage(item.id)}
                    className="w-fit text-lg font-medium text-white/75 hover:text-white"
                  >
                    {item.label}
                  </button>
                ) : null;
              })}
              <button
                type="button"
                onClick={() => setPage("home")}
                className="w-fit text-lg font-medium text-white/75 hover:text-white"
              >
                {t.footer.faq}
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-normal text-white/45">{t.footer.legalTitle}</h3>
            <div className="mt-6 grid gap-4">
              {legalLinks.map((id) => {
                const item = getNav(id);
                return item ? (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPage(item.id)}
                    className="w-fit text-lg font-medium text-white/75 hover:text-white"
                  >
                    {item.label}
                  </button>
                ) : null;
              })}
              <span className="pt-4 text-lg leading-8 text-white/75">
                {t.footer.email}
                {t.footer.phone ? (
                  <>
                    <br />
                    {t.footer.phone}
                  </>
                ) : null}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-white/45">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneMockup({ t }) {
  const labels = t.hero.mockupLabels;

  return (
    <div className="app-phone relative mx-auto w-full max-w-[310px] rounded-[2rem] border border-white/25 bg-[#18346f] p-3">
      <div className="overflow-hidden rounded-[1.5rem] bg-navy-900 shadow-2xl">
        <div className="bg-[#17336c] px-5 py-4">
          <div className="mb-5 flex items-center justify-between text-sm text-white/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-4 rounded-full bg-white/45" />
              <span className="h-2 w-2 rounded-full bg-white/45" />
            </span>
          </div>
          <h2 className="text-base font-semibold text-white">{t.meta.appShortName}</h2>
          <p className="mt-1 text-sm text-white/60">{labels.dashboard}</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 border-t border-white/10 bg-[#11295d] p-3">
          {[
            [labels.students, "142"],
            [labels.active, "38"],
            [labels.records, "1,204"],
            [labels.pending, "7"],
          ].map(([label, value], index) => (
            <div
              key={label}
              className={`rounded-md border p-2.5 ${
                index === 0
                  ? "border-emerald-400/25 bg-emerald-400/10"
                  : index === 1
                    ? "border-emerald-400/30 bg-emerald-500/15"
                    : index === 2
                      ? "border-blue-300/25 bg-blue-300/10"
                      : "border-amber-300/30 bg-amber-300/15"
              }`}
            >
              <p className="text-xs text-white/55">{label}</p>
              <p className="mt-1 text-lg font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2.5 bg-[#0b1f49] p-3">
          <div className="rounded-md border border-white/10 bg-[#071839] p-4">
            <div className="relative h-14 overflow-hidden rounded">
              <div className="absolute inset-x-0 top-3 h-px rotate-[-8deg] bg-emerald-300/10" />
              <div className="absolute inset-x-0 top-7 h-px rotate-[9deg] bg-emerald-300/10" />
              <div className="absolute left-1/4 top-6 h-2 w-2 rounded-full bg-emerald-500/20" />
              <div className="absolute left-1/2 top-8 h-2 w-2 rounded-full bg-emerald-500/20" />
              <div className="absolute right-1/4 top-5 h-2 w-2 rounded-full bg-emerald-500/20" />
              <p className="pt-4 text-center text-xs font-bold text-white/45">{labels.map}</p>
            </div>
          </div>
          {[0, 1, 2].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md bg-white/10 p-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="flex-1">
                <span className="block h-2 w-3/4 rounded-full bg-white/25" />
                <span className="mt-2 block h-2 w-1/2 rounded-full bg-white/15" />
              </span>
              <span className="h-5 w-10 rounded bg-emerald-500/20 ring-1 ring-emerald-400/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero({ t, setPage }) {
  const titleParts = t.hero.title.split("Pharmacy Training");
  const isEnglishHero = t.meta.lang === "en" && titleParts.length > 1;

  return (
    <section className="relative overflow-hidden bg-[#102d68] text-white">
      <div className="medical-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[530px] max-w-[1220px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-normal text-emerald-300">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-[620px] text-[40px] font-bold leading-[1.08] text-white sm:text-[44px] lg:text-[46px]">
            {isEnglishHero ? (
              <>
                {titleParts[0]}
                <br />
                <span className="text-emerald-500">Pharmacy Training</span>
                <br />
                {titleParts.slice(1).join("Pharmacy Training")}
              </>
            ) : titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="text-emerald-500">Pharmacy Training</span>
                {titleParts.slice(1).join("Pharmacy Training")}
              </>
            ) : (
              t.hero.title
            )}
          </h1>
          <p className="mt-7 max-w-[610px] text-lg font-normal leading-8 text-white/82 sm:text-[20px]">
            {t.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button icon={ArrowRight} onClick={() => setPage("activation")}>
              {t.actions.requestActivation}
            </Button>
            <Button variant="secondary" icon={Download} onClick={() => setPage("download")}>
              {t.actions.downloadApk}
            </Button>
            <Button variant="secondary" onClick={() => setPage("contact")}>
              {t.nav.find((item) => item.id === "contact")?.label ?? "Contact"}
            </Button>
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex lg:justify-end">
          <PhoneMockup t={t} />
        </div>
      </div>
    </section>
  );
}

function HomePage({ t, setPage }) {
  const trustIcons = [ShieldCheck, Building2, Languages, WifiOff];
  const primaryFeatures = t.home.featureSummary ?? t.features.cards.slice(0, 6);

  return (
    <>
      <Hero t={t} setPage={setPage} />

      <section className="border-b border-clinical-200 bg-clinical-50">
        <div className="mx-auto flex max-w-[1220px] flex-wrap justify-center gap-x-12 gap-y-4 px-4 py-7 sm:px-6 lg:px-8">
          {t.home.trustItems.map((label, index) => {
            const Icon = trustIcons[index % trustIcons.length];
            return (
            <div key={label} className="inline-flex items-center gap-3 text-base font-normal text-navy-900">
              <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <span>{label}</span>
            </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} subtitle={t.features.subtitle} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryFeatures.map((card, index) => (
              <article
                key={card.title}
                className="grid grid-cols-[3.25rem_1fr] gap-4 rounded-lg border border-clinical-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-soft"
              >
                <IconBadge icon={homeFeatureIcons[index % homeFeatureIcons.length]} tone="blue" />
                <div>
                  <h2 className="text-lg font-semibold leading-tight text-navy-900">{card.title}</h2>
                  <p className="mt-2 text-base font-normal leading-7 text-black">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage("features")}
            className="mt-10 inline-flex items-center gap-3 text-base font-semibold text-emerald-700 hover:text-emerald-800"
          >
            {t.actions.viewFeatures}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="bg-clinical-50 py-20">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">
              {t.home.packagesEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              {t.home.packagesTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-black">
              {t.activation.institutionalBody}
            </p>
            <div className="mt-8 inline-flex rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
              {t.activation.status} - {t.activation.institutionalTitle}
            </div>
            <div className="mt-8">
              <Button variant="dark" icon={ArrowRight} onClick={() => setPage("activation")}>
                {t.activation.contactButton}
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-clinical-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
            <h3 className="text-lg font-semibold text-navy-900">{t.home.requestMustIncludeTitle}</h3>
            <ul className="mt-5 grid gap-4">
              {t.home.requestMustInclude.map((item) => (
                <li key={item} className="flex gap-3 text-lg font-normal text-slate-800">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-clinical-200 pt-6 font-normal leading-7 text-black">
              {t.home.packageNonTransferable}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">{t.home.downloadEyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">{t.download.title}</h2>
          <div className="mt-10 rounded-lg border border-clinical-200 bg-white p-8 text-start shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-navy-900 text-white">
                <Download className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-navy-900">{t.download.cardTitle}</h3>
                <p className="mt-1 text-slate-700">{t.download.androidApplication}</p>
              </div>
            </div>
            <dl className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                [t.download.release.versionLabel, t.download.release.version],
                [t.home.platformLabel, t.download.platform],
                [t.download.release.sizeLabel, t.download.release.size],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-clinical-50 p-4">
                  <dt className="text-sm text-slate-700">{label}</dt>
                  <dd className="mt-2 text-lg font-semibold text-navy-900">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              href={t.download.release.href}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{t.download.release.button}</span>
            </a>
            <p className="mt-5 text-center text-sm font-normal leading-6 text-black">{t.download.release.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureDetailCard({ item, index }) {
  const Icon = featureDetailIcons[index % featureDetailIcons.length];

  return (
    <article className="grid overflow-hidden rounded-lg border border-clinical-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft lg:grid-cols-[245px_1fr]">
      <div className="flex min-h-[210px] flex-col items-center justify-center bg-navy-900 p-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>
        <span className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-white/65">
          {item.label}
        </span>
      </div>
      <div className="p-7 sm:p-9">
        <h2 className="text-2xl font-bold leading-tight text-navy-900">{item.title}</h2>
        <p className="mt-5 text-lg leading-8 text-black">{item.body}</p>
        <ul className="mt-7 grid gap-x-12 gap-y-3 sm:grid-cols-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-lg leading-7 text-slate-800">
              <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FeaturesPage({ t, setPage }) {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1220px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-400">
            {t.features.pageEyebrow}
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-tight sm:text-[36px]">
            {t.features.pageTitle}
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-white/76">
            {t.features.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto flex max-w-[1220px] items-start gap-4 px-4 py-4 text-amber-800 sm:px-6 lg:px-8">
          <LockKeyhole className="mt-1 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
          <p className="text-base leading-7">{t.features.safetyNotice}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:px-8">
          {t.features.details.map((item, index) => (
            <FeatureDetailCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-clinical-200 bg-clinical-50 py-9">
        <div className="mx-auto grid max-w-[900px] gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {t.features.assurances.map((item, index) => {
            const icons = [Smartphone, Building2, ShieldCheck];
            const Icon = icons[index % icons.length];
            return (
              <div key={item.title} className="flex flex-col items-center">
                <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                <h2 className="mt-3 text-sm font-bold text-navy-900">{item.title}</h2>
                <p className="mt-1 text-xs font-semibold text-slate-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[32px]">{t.features.ctaTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-white/76">{t.features.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button icon={ArrowRight} onClick={() => setPage("activation")}>
              {t.actions.requestActivation}
            </Button>
            <Button variant="secondary" onClick={() => setPage("contact")}>
              {t.nav.find((item) => item.id === "contact")?.label ?? "Contact"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function DownloadPage({ t, setPage }) {
  const releaseItems = [
    [t.download.release.versionLabel, t.download.release.version],
    [t.download.platformLabel, t.download.platform],
    [t.download.release.sizeLabel, t.download.release.size],
  ];
  const iphoneItems = t.download.ios.tiles;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1220px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-400">
            {t.download.pageEyebrow}
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-tight sm:text-[36px]">
            {t.download.pageTitle}
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-white/76">
            {t.download.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-clinical-50 py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">
          <div className="grid content-start gap-6">
            <figure className="text-center">
              <figcaption className="mb-4 text-xl font-bold text-navy-900">
                {t.meta.appShortName}
              </figcaption>
              <img
                className="mx-auto aspect-square w-full max-w-[330px] rounded-xl border border-clinical-200 bg-navy-900 object-cover shadow-soft"
                src="/assets/pharmacy-training-tracker-intro.gif"
                alt={t.download.logoAlt}
              />
            </figure>

            <article className="rounded-lg border border-clinical-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-900 text-white">
                  <Smartphone className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-navy-900">{t.download.cardTitle}</h2>
                  <p className="mt-1 text-sm text-black">{t.download.cardSubtitle}</p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {releaseItems.map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-clinical-50 p-4">
                    <dt className="text-sm text-black">{label}</dt>
                    <dd className="mt-2 text-base font-bold text-navy-900">{value}</dd>
                  </div>
                ))}
              </dl>

              <a
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                href={t.download.release.href}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{t.download.release.button}</span>
              </a>

              <p className="mt-5 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
                <span>{t.download.release.note}</span>
              </p>
            </article>
          </div>

          <div className="grid content-start gap-6">
            <article className="rounded-lg border border-clinical-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900">{t.download.installTitle}</h2>
              <ol className="mt-6 grid gap-6">
                {t.download.installStepsDetailed.map((step, index) => (
                  <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="block text-base text-navy-900">{step.title}</strong>
                      <span className="mt-2 block text-sm leading-6 text-black">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-lg border border-navy-800/20 bg-navy-50 p-7">
              <div className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-100 text-navy-800">
                  <KeyRound className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-bold text-navy-900">{t.download.activationTitle}</h2>
                  <p className="mt-4 text-sm leading-6 text-black">{t.download.activationBody}</p>
                  <button
                    type="button"
                    onClick={() => setPage("activation")}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-emerald-700"
                  >
                    {t.download.activationLink}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-clinical-200 bg-white p-7">
              <div className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-bold text-navy-900">{t.download.officialTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-black">{t.download.officialBody}</p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-clinical-200 bg-white p-7">
              <h2 className="font-bold text-navy-900">{t.download.requirementsTitle}</h2>
              <ul className="mt-5 grid gap-2">
                {t.download.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-black">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <article className="rounded-lg border border-clinical-200 bg-white p-6 shadow-soft sm:p-7">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr]">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                  {t.download.ios.eyebrow}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <Smartphone className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900">{t.download.ios.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-black">{t.download.ios.subtitle}</p>
                  </div>
                </div>

                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  {iphoneItems.map((item) => (
                    <div key={item.label} className="rounded-lg bg-clinical-50 p-4">
                      <dt className="text-sm text-black">{item.label}</dt>
                      <dd className="mt-2 text-base font-bold text-navy-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:w-auto"
                  href={t.download.ios.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  <span>{t.download.ios.button}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <p className="mt-5 flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-emerald-700" aria-hidden="true" />
                  <span>{t.download.ios.notice}</span>
                </p>
              </div>

              <div className="grid gap-5">
                <article className="rounded-lg border border-clinical-200 bg-white p-6">
                  <h3 className="font-bold text-navy-900">{t.download.ios.setupTitle}</h3>
                  <ol className="mt-5 grid gap-4">
                    {t.download.ios.setupSteps.map((step, index) => (
                      <li key={step} className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-6 text-black">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </article>

                <article className="rounded-lg border border-clinical-200 bg-white p-6">
                  <h3 className="font-bold text-navy-900">{t.download.ios.prerequisitesTitle}</h3>
                  <ul className="mt-4 grid gap-2">
                    {t.download.ios.prerequisites.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-black">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-navy-800/20 bg-navy-50 p-6">
                  <div className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-100 text-navy-800">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{t.download.ios.infoTitle}</h3>
                      <p className="mt-3 text-sm leading-6 text-black">{t.download.ios.infoBody}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function ActivationPage({ t, setPage }) {
  const tierIcons = [UsersRound, UsersRound, UsersRound, Building2];
  const includedIcons = [CalendarCheck, Building2, GraduationCap, KeyRound];

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1220px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-400">
            {t.activation.pageEyebrow}
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-tight sm:text-[36px]">
            {t.activation.pageTitle}
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-white/76">
            {t.activation.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto flex max-w-[1220px] items-start gap-4 px-4 py-4 text-amber-800 sm:px-6 lg:px-8">
          <ShieldCheck className="mt-1 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
          <p className="text-sm font-semibold leading-7">{t.activation.warning}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-700">
            {t.activation.tiersEyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-navy-900 sm:text-[32px]">
            {t.activation.tiersTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.activation.tiers.map((tier, index) => {
              const Icon = tierIcons[index % tierIcons.length];
              return (
                <article
                  key={tier.title}
                  className="rounded-lg border border-clinical-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-50 text-navy-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy-900">{tier.title}</h3>
                  <p className="mt-1 text-sm font-bold text-emerald-700">{tier.capacity}</p>
                  <p className="mt-4 text-base leading-7 text-black">{tier.body}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-8 text-sm leading-7 text-black">{t.activation.pricingNote}</p>
        </div>
      </section>

      <section className="bg-clinical-50 py-16">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-700">
              {t.activation.includedEyebrow}
            </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-navy-900 sm:text-[32px]">
            {t.activation.includedTitle}
          </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black">{t.activation.includedBody}</p>
            <ul className="mt-8 grid gap-3">
              {t.activation.includedList.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-800">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            {t.activation.rules.map((rule, index) => {
              const Icon = includedIcons[index % includedIcons.length];
              return (
                <article key={rule.title} className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-clinical-200 bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-50 text-navy-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">{rule.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black">{rule.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-700">
            {t.activation.requestEyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-navy-900 sm:text-[32px]">
            {t.activation.requestTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-black">{t.activation.requestBody}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1fr]">
            <article className="rounded-lg border border-clinical-200 bg-clinical-50 p-7">
              <h3 className="font-bold text-navy-900">{t.activation.requiredTitle}</h3>
              <ul className="mt-5 grid gap-3">
                {t.activation.requiredInfo.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-slate-800">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-clinical-200 pt-5 text-sm font-semibold leading-6 text-black">
                {t.activation.personalEmailWarning}
              </p>
            </article>

            <div className="grid gap-5">
              <article className="rounded-lg bg-navy-900 p-7 text-white">
                <div className="flex gap-4">
                  <MessageSquareText className="mt-1 h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold">{t.activation.formCtaTitle}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/74">{t.activation.formCtaBody}</p>
                    <div className="mt-6">
                      <Button icon={ArrowRight} onClick={() => setPage("contact")}>
                        {t.activation.formCtaButton}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-clinical-200 bg-white p-7">
                <h3 className="font-bold text-navy-900">{t.activation.directTitle}</h3>
                <div className="mt-5 grid gap-4 text-base text-slate-800">
                  <a className="inline-flex items-center gap-3" href="mailto:moleculartracker@gmail.com">
                    <Mail className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    {t.footer.email}
                  </a>
                  {t.footer.phone ? (
                    <a className="inline-flex items-center gap-3" href="tel:+9647508226910">
                      <Phone className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                      {t.footer.phone}
                    </a>
                  ) : null}
                </div>
                <p className="mt-5 text-sm font-semibold leading-6 text-black">{t.activation.officialEmailReminder}</p>
              </article>

              <article className="rounded-lg border border-emerald-600/20 bg-emerald-50 p-5">
                <p className="flex gap-3 text-sm font-semibold leading-6 text-navy-900">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  <span>
                    {t.activation.paymentPolicyText}{" "}
                    <button type="button" onClick={() => setPage("payment")} className="font-bold text-emerald-700 hover:text-emerald-800">
                      {t.activation.paymentPolicyLink}
                    </button>
                  </span>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PaymentPage({ t }) {
  return (
    <PageFrame>
      <SectionHeader title={t.payment.title} subtitle={t.payment.subtitle} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="rounded-lg border border-emerald-600/30 bg-emerald-50 p-8">
          <IconBadge icon={Banknote} tone="green" />
          <p className="mt-6 text-xl font-semibold leading-9 text-navy-900">{t.payment.warning}</p>
          {t.payment.institutional ? (
            <p className="mt-5 rounded-lg border border-emerald-600/20 bg-white/70 p-4 text-sm font-bold leading-7 text-navy-800">
              {t.payment.institutional}
            </p>
          ) : null}
        </article>
        <article className="rounded-lg border border-clinical-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-navy-900">{t.payment.stepsTitle}</h2>
          <ol className="mt-6 grid gap-4">
            {t.payment.steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-lg bg-clinical-50 p-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-navy-800 text-sm font-semibold text-white">
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

function ContactPage({ t, setPage }) {
  const [status, setStatus] = useState("idle");
  const [showForm, setShowForm] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const hideDirectContactDetails = true;
  const contactIcons = [Mail, Phone, MapPin, Clock3];
  const contactCards = t.contact.infoCards
    .map((card, index) => ({ card, index, Icon: contactIcons[index % contactIcons.length] }))
    .filter(({ card, index }) => !card.hidden && !(hideDirectContactDetails && (index === 1 || index === 2)));

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-[1220px] px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-400">
            {t.contact.pageEyebrow}
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-tight sm:text-[36px]">
            {t.contact.pageTitle}
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-white/76">
            {t.contact.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto flex max-w-[1220px] items-start gap-3 px-4 py-3 text-amber-800 sm:px-6 lg:px-8">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-amber-600" aria-hidden="true" />
          <p className="text-[13px] font-semibold leading-6">{t.contact.warning}</p>
        </div>
      </section>

      <section className="bg-clinical-50 py-14">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="grid content-start gap-5">
            {contactCards.map(({ card, Icon }) => {
              return (
                <article key={card.title} className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-clinical-200 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-50 text-navy-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-bold text-navy-900">{card.title}</h2>
                    {card.value ? <p className="mt-2 text-[15px] font-semibold text-emerald-700">{card.value}</p> : null}
                    <p className="mt-2 text-[13px] leading-6 text-black">{card.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid content-start gap-5">
            <article className="rounded-lg border border-clinical-200 bg-white p-7 shadow-sm">
              <h2 className="text-[15px] font-bold text-navy-900">{t.contact.helpTitle}</h2>
              <ul className="mt-5 grid gap-5">
                {t.contact.helpItems.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-600" />
                    <span>
                      <strong className="block text-[14px] text-navy-900">{item.title}</strong>
                      <span className="mt-1 block text-[13px] leading-6 text-black">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg bg-navy-900 p-7 text-white">
              <div className="flex gap-4">
                <Building2 className="mt-1 h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-bold">{t.contact.packageTitle}</h2>
                  <p className="mt-4 text-[13px] leading-6 text-white/74">{t.contact.packageBody}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button icon={ArrowRight} onClick={() => setShowForm((value) => !value)}>
                      {t.contact.packageButton}
                    </Button>
                    <Button variant="secondary" onClick={() => setPage("activation")}>
                      {t.contact.viewPackages}
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-emerald-600/20 bg-emerald-50 p-5">
              <p className="flex gap-3 text-[13px] leading-6 text-navy-900">
                <Mail className="mt-0.5 h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                <span>
                  {t.contact.faqHint}{" "}
                  <button type="button" onClick={() => setPage("home")} className="font-bold text-emerald-700 hover:text-emerald-800">
                    {t.contact.faqLink}
                  </button>
                </span>
              </p>
            </article>
          </div>
        </div>

        {showForm ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 grid max-w-[1220px] gap-4 rounded-lg border border-clinical-200 bg-white p-6 shadow-sm md:grid-cols-2"
          >
            <h2 className="text-2xl font-bold text-navy-900 md:col-span-2">{t.contact.formTitle}</h2>
            <input type="hidden" name="_subject" value="Pharmacy Training Tracker institutional request" />
            <TextField name="name" label={t.contact.fields.name} placeholder={t.contact.placeholders.name} />
            <TextField name="email" type="email" label={t.contact.fields.email} placeholder={t.contact.placeholders.email} />
            <TextField name="institution" label={t.contact.fields.institution} placeholder={t.contact.placeholders.institution} />
            <TextField name="message" multiline label={t.contact.fields.message} placeholder={t.contact.placeholders.message} />
            {status === "success" ? (
              <p className="rounded-lg bg-emerald-50 p-4 text-sm font-bold leading-7 text-emerald-800 md:col-span-2">
                {t.contact.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="rounded-lg bg-red-50 p-4 text-sm font-bold leading-7 text-red-800 md:col-span-2">
                {t.contact.error}
              </p>
            ) : null}
            <div className="md:col-span-2">
              <Button type="submit" icon={MessageSquareText}>
                {status === "sending" ? t.contact.sending : t.contact.send}
              </Button>
            </div>
          </form>
        ) : null}
      </section>
    </>
  );
}

function PolicyPage({ content }) {
  return (
    <PageFrame>
      <SectionHeader title={content.title} subtitle={content.updated} />
      <div className="mt-10 grid gap-4">
        {content.sections.map((section) => (
          <article key={section.title} className="rounded-lg border border-clinical-200 bg-white p-6">
            <h2 className="text-xl font-bold text-navy-900">{section.title}</h2>
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
      features: <FeaturesPage t={t} setPage={setCurrentPage} />,
      download: <DownloadPage t={t} setPage={setCurrentPage} />,
      activation: <ActivationPage t={t} setPage={setCurrentPage} />,
      payment: <PaymentPage t={t} />,
      contact: <ContactPage t={t} setPage={setCurrentPage} />,
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
