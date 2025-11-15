

import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
   title: "Medium Clone — Read, Write & Share Stories",
 description: "Discover and share insightful articles on any topic. Write, publish, and connect with readers in a beautiful, responsive platform inspired by Medium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
