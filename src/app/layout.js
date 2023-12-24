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
        <meta name="theme-color" content="#7e22ce" />
      </head>
      <body
        className={`${font.className}   sm:ml-80 mt-16 text-black flex justify-center py-10`}
      >
        <ThemeContextProvider>
          <Sidebar />
          <main className="main sm:w-4/5 w-10/12">{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
