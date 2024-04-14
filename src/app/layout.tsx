import type { Metadata } from 'next';
/** Font */
import { Inter } from 'next/font/google';
/** Style */
import "@/app/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Personal Inductive Bible Study",
  description: "Elgrace Personal Inductive Bible Study",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
};

export default RootLayout;
