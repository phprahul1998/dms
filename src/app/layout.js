import Script from 'next/script'
import "./assets/css/backend.css";
import 'remixicon/fonts/remixicon.css';
import  "bootstrap/dist/css/bootstrap.min.css"

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
export const metadata = {
  title: "Softage DMS",
  description: "Softage DMS",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script  src="/js/backend-bundle.min.js" strategy="afterInteractive"/>
      <Script  src="/js/app.js" strategy="afterInteractive"/>
    </html>
  );
}
