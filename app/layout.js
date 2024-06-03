import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RouteLane",
  description: "RouteLane LLC - Professional truck dispatching services tailored for efficiency and reliability. We ensure timely deliveries and optimized routes, providing exceptional support for your logistics needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
