import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeContextProvider } from "@/context/theme";

// const inter = Inter({ subsets: ["latin"] });
const font = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Calc Plus",
  description: "Calc Plus: Where Numbers Become Solutions!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-0zKqJyIP-rNZxgf8aJRubOn3bd5ClI8QHdN07ZycwI"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#7e22ce" />
      </head>
      <body className={`${font.className}   sm:ml-80 mt-16 text-black flex justify-center py-10`}>
        <ThemeContextProvider>
          <Sidebar />
          <div className="main w-4/5">{children}</div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
