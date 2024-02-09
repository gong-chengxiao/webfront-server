import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "Chengo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='block'>
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
