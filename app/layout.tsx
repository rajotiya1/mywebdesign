import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freelance Web Developer | Premium Website Design Services',
  description:
    'Conversion-focused freelance website design and development services for businesses, e-commerce brands, creators, and startups.',
  keywords: [
    'freelance web developer',
    'website design service',
    'business website development',
    'SEO ready websites',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
