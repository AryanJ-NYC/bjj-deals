import { clsx } from 'clsx';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';
import bjjDealsLogo from '../../public/bjj-deals.png';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description:
    'The best Brazilian Jiu Jitsu deals on the internet. Find the best deals on BJJ gis, rashguards, shorts, and more.',
  twitter: {
    card: 'summary_large_image',
    images: [{ height: 734, url: bjjDealsLogo.src, width: 735 }],
    site: '@bjjdeals',
  },
  title: 'BJJ Deals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex min-h-screen flex-col')}>
        <header className="max-w-screen-xl mx-auto xl:px-0 px-2 py-4 w-full">
          <Image alt="BJJ Deals logo" height={112} src={bjjDealsLogo} />
        </header>
        <main className="flex flex-col flex-grow">{children}</main>
        <footer className="pt-8 pb-4 px-8">
          <p className="text-center text-sm">
            Have a deal you want to add? Email{' '}
            <a className="hover:text-blue-800 text-blue-700" href="mailto:support@bjj-deals.com">
              support@bjj-deals.com
            </a>{' '}
            with your BJJ Black Friday deal.
          </p>
          <iframe
            className="bg-transparent rounded"
            src="https://embeds.beehiiv.com/91b75404-1c64-4d73-9146-7f5ba5133611"
            data-test-id="beehiiv-embed"
            width="100%"
            height="221"
          />
          <div className="flex gap-x-4 justify-end text-xl pt-4">
            <a href="https://twitter.com/bjjdeals" rel="noreferrer" target="_blank">
              <RiTwitterXFill />
            </a>
            <a href="https://www.instagram.com/bjjdealsdotcom" rel="noreferrer" target="_blank">
              <RiInstagramFill />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
