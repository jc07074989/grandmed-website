import Link from "next/link";
import { Activity } from "lucide-react";

const content: Record<string, {title:string; kicker:string; body:string[]}> = {
  about: { kicker: "About GrandMed", title: "A healthcare platform supported by GranDev.", body: ["GrandMed is a healthcare platform created to develop and operate next-generation medical and healthcare precincts across Australia.", "The platform combines healthcare property, clinical partnerships, specialist ecosystems and long-term infrastructure ownership."]},
  projects: { kicker: "Featured Project", title: "Kingston Healthcare Precinct, Canberra ACT.", body: ["The Kingston Healthcare Precinct is GrandMed’s flagship healthcare development vision.", "The precinct is planned to support general practice, specialist suites, diagnostic imaging, pathology, pharmacy, allied health and future procedural healthcare capability."]},
  partnerships: { kicker: "Healthcare Partnerships", title: "Partner with GrandMed.", body: ["GrandMed is actively seeking healthcare operators and strategic partners for current and future healthcare precinct projects.", "We work with GP groups, specialist operators, imaging providers, pathology providers, pharmacy operators, allied health providers and healthcare investors."]},
  investors: { kicker: "Investors", title: "Healthcare property plus platform value.", body: ["Healthcare property is increasingly recognised as a resilient and strategically important real estate sector.", "GrandMed’s strategy aims to combine healthcare real estate ownership, healthcare operating ecosystem participation and long-term platform scalability."]},
  contact: { kicker: "Contact", title: "Start a GrandMed discussion.", body: ["For healthcare operator partnerships, investor discussions or leasing enquiries, please contact GrandMed.", "Email: info@grandmed.com.au"]}
};

export default function Page() {
  const data = content["about"];
  return <main className="min-h-screen bg-slate-50 text-slate-950">
    <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><Link href="/" className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white"><Activity className="h-5 w-5" /></div><div><div className="text-xl font-bold">GrandMed</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Supported by GranDev</div></div></Link><Link href="/" className="text-sm font-semibold text-slate-600">Home</Link></div></header>
    <section className="px-6 py-24"><div className="mx-auto max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{data.kicker}</p><h1 className="mt-5 text-5xl font-semibold tracking-tight">{data.title}</h1><div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">{data.body.map((p) => <p key={p}>{p}</p>)}</div><Link href="/contact" className="mt-10 inline-flex rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white">Contact GrandMed</Link></div></section>
  </main>
}
