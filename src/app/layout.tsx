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
    default: 'ONEMIND | Institutional Advisory for Infrastructure and Energy Investments',
    template: '%s | ONEMIND',
  },
  description:
    'ONEMIND provides institutional-grade advisory for infrastructure and energy investments, from project structuring to capital readiness.',
  keywords: [
    'ONEMIND',
    'infrastructure advisory',
    'energy investment advisory',
    'project structuring',
    'capital advisory',
    'investment readiness',
    'infrastructure investment advisory',
  ],
  openGraph: {
    title: 'ONEMIND | Institutional Advisory for Infrastructure and Energy Investments',
    description:
      'Institutional-grade advisory for infrastructure and energy investments across structuring, capital advisory, and investment readiness.',
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
    title: 'ONEMIND | Institutional Advisory for Infrastructure and Energy Investments',
    description:
      'Institutional-grade advisory for infrastructure and energy investments across structuring, capital advisory, and investment readiness.',
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
