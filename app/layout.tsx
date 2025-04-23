import './globals.css';
import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heebo = Heebo({ subsets: ['latin'], variable: '--font-heebo' });

export const metadata: Metadata = {
  title: 'ISP Service Provider | High-Speed Internet & TV Services',
  description: 'Get connected with our high-speed internet, TV, and mobile services. Explore our flexible plans and enjoy unlimited entertainment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${heebo.variable}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}