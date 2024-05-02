import { sidebarData } from "@/data/sidebar";
import Link from "next/link";
import { IconContext } from "react-icons";

const SideBarList = () => {
  return (
    <div className={`h-full sm:w-80 scroll-bar sm:opacity-100 p-5 pr-2 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50 dark:bg-slate-900 dark:bg-slate-900 `}>
      <div className="h-full overflow-y-auto scroll-bar">
        {sidebarData.map((section, index) => (
          <div className="space-y-2 p-5" key={index}>
            <h2 className="text-sm text-gray-500 dark:text-gray-200 dark:font-medium font-extrabold uppercase">{section.title}</h2>
            <div className="flex flex-col">
              <IconContext.Provider value={{ size: 16 }}>
                {section.links.map((link, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    {link.icon && link.icon}

                    <Link
                      rel="noopener noreferrer"
                      className="text-lg font-medium dark:font-light py-3 display-block text-gray-700 dark:text-gray-200 hover:text-purple-700"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarList;
