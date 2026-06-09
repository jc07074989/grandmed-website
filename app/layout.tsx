import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GrandMed | Healthcare Property & Clinical Partnerships',
  description: 'GrandMed develops integrated healthcare precincts across Australia, supported by GranDev property development capability.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
