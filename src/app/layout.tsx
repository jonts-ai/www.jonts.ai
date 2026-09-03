import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jonts.ai'),
  title: 'jonts.ai | Jonathan Tsai AI doppelganger',
  description: "Home of jonts.ai, Jonathan Tsai's personal AI assistant / doppelganger.",
  openGraph: {
    title: 'jonts.ai',
    description: "Jonathan Tsai's personal AI assistant / doppelganger.",
    url: 'https://www.jonts.ai/',
    siteName: 'jonts.ai',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#050816',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
