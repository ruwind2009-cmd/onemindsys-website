import type { Metadata } from 'next'
import { IBM_Plex_Mono, Manrope, Sora } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE_URL, WEB3_PAGE_KEYWORDS } from '@/lib/site-content'

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
    default: 'ONEMIND | Project Finance Advisory for RWA-ready Infrastructure',
    template: '%s | ONEMIND',
  },
  description:
    'ONEMIND helps real-world energy and infrastructure projects become financeable, RWA-ready, and prepared for stablecoin-enabled settlement and institutional capital review.',
  keywords: ['ONEMIND', ...WEB3_PAGE_KEYWORDS],
  openGraph: {
    title: 'ONEMIND | Project Finance Advisory for RWA-ready Infrastructure',
    description:
      'Project finance first, with Web3/RWA/stablecoin settlement capability for real-world energy and infrastructure assets.',
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
    title: 'ONEMIND | Project Finance Advisory for RWA-ready Infrastructure',
    description:
      'ONEMIND helps real-world energy and infrastructure projects become financeable, RWA-ready, and prepared for stablecoin-enabled settlement and institutional capital review.',
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
