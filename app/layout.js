"use client";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoldRushProvider apikey={process.env.NEXT_PUBLIC_API_KEY}>
          {children}
        </GoldRushProvider>
      </body>
    </html>
  );
}
