import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://varazsfazek.hu';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Varázsfazék | Minden napra egy jó ötlet',
  description: 'Varázsfazék: családi receptek, napi főzési ötletek, heti menütervező, Maradékmentő és praktikus bevásárlólista.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName: 'Varázsfazék',
    title: 'Varázsfazék – Minden napra egy jó ötlet',
    description: 'Mit főzzek ma? Családi receptek, heti menütervező és Maradékmentő egy helyen.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="hu"><body>{children}</body></html>;
}
