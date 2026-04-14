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
  title: 'ONEMIND — Power Infrastructure Partner',
  description: 'ONEMIND supports power-intensive projects through structuring, financing readiness, and delivery advancement.',
  keywords: [
    'ONEMIND',
    'power infrastructure',
    'project structuring',
    'financing readiness',
    'delivery support',
    'project advancement',
    'complex environments',
  ],
  openGraph: {
    title: 'ONEMIND — Power Infrastructure Partner',
    description: 'Power infrastructure capabilities across structuring, financing, and delivery support.',
    type: 'website',
    url: SITE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
