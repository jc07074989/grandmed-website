import { Activity, ArrowRight, Building2, BriefcaseBusiness, Handshake, HeartPulse, MapPin, Microscope, Pill, ScanLine, ShieldCheck, Stethoscope, Users } from "lucide-react";
import Link from "next/link";

const services = [
  [Stethoscope, "GP Clinics", "Modern general practice environments supported by efficient layouts, patient access and integrated referral pathways."],
  [ScanLine, "Imaging & Diagnostics", "Future-ready infrastructure for MRI, CT, diagnostic imaging, power, shielding and advanced clinical requirements."],
  [Users, "Specialist Suites", "Premium consulting environments for independent specialists, multidisciplinary groups and sessional practitioners."],
  [Microscope, "Pathology", "Integrated pathology services designed to support patient convenience and clinical ecosystem efficiency."],
  [Pill, "Pharmacy", "Strategic pharmacy integration to support patients, practitioners and long-term precinct performance."],
  [HeartPulse, "Allied Health", "Flexible tenancy and partnership options for allied health providers within a coordinated healthcare destination."],
] as const;

const nav = [
  ["About", "/about"], ["Projects", "/projects"], ["Partnerships", "/partnerships"], ["Investors", "/investors"], ["Contact", "/contact"]
] as const;

function Header() {
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white"><Activity className="h-5 w-5" /></div>
        <div><div className="text-xl font-bold">GrandMed</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Supported by GranDev</div></div>
      </Link>
      <nav className="hidden gap-7 text-sm font-medium text-slate-600 md:flex">{nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-slate-950">{label}</Link>)}</nav>
      <Link href="/contact" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Partner With Us</Link>
    </div>
  </header>
}

export default function Home() {
  return <div className="min-h-screen bg-slate-50 text-slate-950"><Header />
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-grandblue px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Healthcare Platform</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Healthcare Property. Clinical Partnerships. Long-Term Platform Value.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">GrandMed develops next-generation healthcare precincts across Australia, bringing together healthcare real estate, clinical partnerships, specialist ecosystems and strategic operating platforms.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/projects" className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-semibold text-slate-950">View Kingston Precinct <ArrowRight className="ml-2 h-5 w-5" /></Link><Link href="/partnerships" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white">Healthcare Partnerships</Link></div>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[2rem] bg-white p-6 text-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Flagship Focus</p><h2 className="mt-2 text-2xl font-semibold">Kingston Healthcare Precinct</h2></div><MapPin className="h-8 w-8 text-slate-600" /></div>
              <div className="mt-6 grid gap-3">{["General practice","Specialist suites","Diagnostic imaging","Pathology","Pharmacy","Allied health"].map(item => <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><ShieldCheck className="h-5 w-5 text-emerald-700" /><span className="font-medium">{item}</span></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Our Vision</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Australia’s leading integrated healthcare precinct platform.</h2></div><div className="space-y-6 text-lg leading-8 text-slate-600"><p>GrandMed is focused on building healthcare environments that support patients, practitioners, operators and investors through high-quality, future-ready medical precincts.</p><p>Backed by GranDev, GrandMed combines premium healthcare real estate with strategic healthcare operating partnerships.</p></div></div></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Healthcare Ecosystem</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Designed around the services patients and practitioners need.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,text]) => <div key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"><Icon className="h-9 w-9 text-slate-700" /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center"><div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"><Building2 className="mb-8 h-12 w-12" /><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Canberra ACT</p><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Kingston Healthcare Precinct</h2><p className="mt-5 leading-8 text-slate-300">A flagship Canberra healthcare development vision positioned to support integrated medical services, specialist care and long-term healthcare infrastructure.</p></div><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Featured Project</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A premium healthcare destination for operators, practitioners and patients.</h2><p className="mt-6 text-lg leading-8 text-slate-600">The Kingston project is planned as more than a conventional medical building. It is intended to become a coordinated healthcare precinct supporting GP services, diagnostic imaging, pathology, pharmacy, specialist consulting and future procedural healthcare capability.</p></div></div></section>

      <section className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-2"><div><Handshake className="mb-6 h-12 w-12" /><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Partnerships</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">For healthcare operators, imaging groups, specialists and strategic partners.</h2><p className="mt-6 text-lg leading-8 text-slate-300">GrandMed is interested in long-term partnerships that support integrated healthcare precincts and scalable healthcare infrastructure.</p></div><div className="grid gap-4">{["Traditional leasing structures","Strategic healthcare partnerships","Imaging JV opportunities","Service platform arrangements","Expansion partnerships","Long-term operator relationships"].map(item => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-medium">{item}</div>)}</div></div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-sm md:p-12"><div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><BriefcaseBusiness className="mb-6 h-12 w-12 text-slate-700" /><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Investors</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Healthcare property plus platform value.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-600"><p>GrandMed’s strategy is to combine healthcare real estate ownership with selected operating partnerships, creating value from both property income and healthcare platform growth.</p><p>The long-term vision is to develop a scalable healthcare precinct model across multiple Australian locations, supported by strong operator relationships and institutional-grade healthcare infrastructure.</p></div></div></div></section>
    </main>
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><div className="text-xl font-bold">GrandMed</div><div className="mt-1 text-sm text-slate-500">Healthcare Property. Clinical Partnerships. Long-Term Platform Value.</div></div><div className="text-sm text-slate-500">Supported by GranDev</div></div></footer>
  </div>
}
