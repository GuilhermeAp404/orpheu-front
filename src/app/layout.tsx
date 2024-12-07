import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Orpheu",
  description: "Gerencie seu negocio de forma eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
