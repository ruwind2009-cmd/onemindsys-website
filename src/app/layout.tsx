import type { Metadata } from 'next'
import { IBM_Plex_Mono, Manrope, Sora } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE_URL } from '@/lib/site-content'

const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ONEMIND | Project Finance Structuring for Government-Backed Infrastructure',
    template: '%s | ONEMIND',
  },
  description:
    'ONEMIND is a project finance structuring and capital facilitation platform for qualified government-backed infrastructure and energy projects.',
  keywords: [
    'ONEMIND',
    'project finance advisory',
    'infrastructure financing',
    'government-backed projects',
    'structured capital solutions',
    'project funding readiness',
    'infrastructure investment advisory',
    'bankable project preparation',
  ],
  openGraph: {
    title: 'ONEMIND | Project Finance Structuring for Government-Backed Infrastructure',
    description:
      'Institutional-grade advisory for project pre-qualification, financing structure design, documentation readiness, and controlled execution frameworks.',
    type: 'website',
    url: SITE_URL,
    siteName: 'ONEMIND',
    images: [
      {
        url: '/images/site/real/home-thermal-night.jpeg',
        width: 1600,
        height: 900,
        alt: 'Institutional project finance advisory background featuring large-scale infrastructure at night.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONEMIND | Project Finance Structuring for Government-Backed Infrastructure',
    description:
      'Institutional-grade advisory for project pre-qualification, financing structure design, documentation readiness, and controlled execution frameworks.',
    images: ['/images/site/real/home-thermal-night.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
