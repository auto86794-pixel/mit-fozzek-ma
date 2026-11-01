import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://varazsfazek.hu';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Varázsfazék – Napi főzési ötletek az egész családnak',
  description: 'Mit főzzek ma? Fedezz fel napi 3 receptötletet, tervezz heti menüt, készíts bevásárlólistát, és használd fel az otthoni alapanyagokat!',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName: 'Varázsfazék',
    title: 'Varázsfazék – Napi főzési ötletek az egész családnak',
    description: 'Mit főzzek ma? Fedezz fel napi 3 receptötletet, tervezz heti menüt, készíts bevásárlólistát, és használd fel az otthoni alapanyagokat!',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="hu"><body>{children}</body></html>;
}
