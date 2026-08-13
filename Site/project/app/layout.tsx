import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NAVAL TREASURE GROUP — International Food Trade & Supply',
  description: 'NAVAL TREASURE GROUP specializes in sourcing, supply, import and export of premium seafood, meat, and dehydrated food products across international markets.',
  keywords: ['seafood', 'international trade', 'food supply', 'import export', 'sea cucumber', 'fish maw', 'dehydrated food'],
  openGraph: {
    title: 'NAVAL TREASURE GROUP — International Food Trade & Supply',
    description: 'Premium food products sourcing and international trade services.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} min-h-screen bg-[#f4f4f5] text-[#09090b] antialiased selection:bg-[#09090b] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
