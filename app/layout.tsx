import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Sidebar from '@/components/sidebar';

let title = 'Next.js + Postgres Auth Starter';
let description =
  'This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable + " bg-[#141613] text-white"}>
        <div className='h-screen p-8'>
          <div className='grid grid-cols-12 bg-[#4eae5a] h-full rounded-2xl'>
            <div className='col-span-2 bg-[#4eae5a] rounded-l-2xl'>
              <Sidebar />
            </div>
            <div className='col-span-10 bg-white rounded-2xl p-4 text-black'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
