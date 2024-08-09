import { Inter } from "next/font/google";
import Script from 'next/script'
const inter = Inter({ subsets: ["latin"] });
import "./assets/css/backend.css";
import 'remixicon/fonts/remixicon.css';
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
export const metadata = {
  title: "Softage DMS",
  description: "Softage DMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script  src="/js/backend-bundle.min.js"/>
      <Script  src="/js/app.js"/>
    </html>
  );
}
