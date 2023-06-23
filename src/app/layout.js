import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeContextProvider } from "@/context/theme";

// const inter = Inter({ subsets: ["latin"] });
const font = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-0zKqJyIP-rNZxgf8aJRubOn3bd5ClI8QHdN07ZycwI"
        />
      </head>
      <body
        className={`${font.className} bg-slate-50  sm:ml-80 mt-16 text-gray-700 flex justify-center py-10`}
      >
        <ThemeContextProvider>
          <Sidebar />
          <div className="main w-10/12">{children}</div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
