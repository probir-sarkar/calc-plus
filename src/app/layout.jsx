import "./globals.css";
import { Roboto_Slab, Poppins, Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeContextProvider } from "@/context/theme";

const font = Inter({ subsets: ["latin"] });
// const font = Roboto_Slab({ subsets: ["latin"] });
// const font = Poppins({ subsets: ["latin"], weight: ["100", "400", "500", "600", "700"] });

export const metadata = {
  title: "Calc Plus",
  description: "Calc Plus: Where Numbers Become Solutions!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={`${font.className} dark:bg-slate-800 bg-white dark:text-gray-200 sm:ml-80 mt-16 text-black flex justify-center py-10`}>
          <Sidebar />
          <main className="main sm:w-4/5 w-10/12">{children}</main>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
