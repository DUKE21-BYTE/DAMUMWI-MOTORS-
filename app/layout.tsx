import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Damumwi Motors | Quality New & Used Cars in Kenya',
  description:
    'Damumwi Motors is a trusted car dealership in Kenya offering quality new and used cars imported from Japan and Europe. Browse our inventory of Toyota, Mercedes-Benz, Mazda, Suzuki and more. Affordable prices with nationwide delivery.',
  keywords: [
    'cars for sale Kenya',
    'used cars Kenya',
    'car dealer Nairobi',
    'Japanese imports Kenya',
    'Damumwi Motors',
    'buy car Kenya',
    'Toyota Kenya',
    'Mercedes Kenya',
    'affordable cars Kenya',
  ],
  openGraph: {
    title: 'Damumwi Motors | Quality New & Used Cars in Kenya',
    description:
      'Trusted car dealership in Kenya. Browse our inventory of quality imported vehicles at affordable prices.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Damumwi Motors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damumwi Motors | Quality New & Used Cars in Kenya',
    description:
      'Trusted car dealership in Kenya. Browse our inventory of quality imported vehicles at affordable prices.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#1a3a6e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
