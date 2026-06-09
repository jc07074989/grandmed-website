import Link from 'next/link'
import { Activity, ArrowRight } from 'lucide-react'

export function Header(){
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white"><Activity className="h-5 w-5" /></div>
        <div><div className="text-xl font-bold tracking-tight">GrandMed</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Supported by GranDev</div></div>
      </Link>
      <nav className="hidden gap-7 text-sm font-medium text-slate-600 md:flex">
        <Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/partnerships">Partnerships</Link><Link href="/investors">Investors</Link><Link href="/contact">Contact</Link>
      </nav>
      <Link href="/contact" className="hidden rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white md:inline-flex">Enquire</Link>
    </div>
  </header>
}

export function Footer(){
  return <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><div className="text-xl font-bold">GrandMed</div><div className="mt-1 text-sm text-slate-500">Healthcare Property. Clinical Partnerships. Long-Term Platform Value.</div></div><div className="text-sm text-slate-500">Supported by GranDev</div></div></footer>
}

export function PageHero({eyebrow,title,text}:{eyebrow:string,title:string,text:string}){
 return <section className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p></div></section>
}

export function CTA(){
 return <section className="px-6 py-20"><div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center text-white shadow-xl"><h2 className="text-4xl font-semibold">Partner with GrandMed</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">For operator partnerships, imaging discussions, specialist leasing, investor enquiries or strategic collaboration.</p><Link href="/contact" className="mt-8 inline-flex items-center rounded-2xl bg-white px-7 py-4 font-semibold text-slate-950">Contact GrandMed <ArrowRight className="ml-2 h-5 w-5" /></Link></div></section>
}

export function Card({title,text}:{title:string,text:string}){return <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>}
