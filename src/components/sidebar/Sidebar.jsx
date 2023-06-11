import "./Sidebar.scss";
import React from "react";

const Sidebar = () => {
  const sidebarData = [
    {
      title: "Getting Started",
      links: [
        { label: "Installation", href: "#" },
        { label: "Plugins", href: "#" },
        { label: "Migrations", href: "#" },
        { label: "Appearance", href: "#" },
        { label: "Mamba UI", href: "#" },
      ],
    },
    {
      title: "Dashboard",
      links: [
        { label: "Header", href: "#" },
        { label: "Drawer", href: "#" },
        { label: "Page Title", href: "#" },
        { label: "Menus", href: "#" },
        { label: "Sidebar", href: "#" },
        { label: "Footer", href: "#" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Homepage", href: "#" },
        { label: "Users", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Settings", href: "#" },
      ],
    },
    {
      title: "Misc",
      links: [
        { label: "Tutorials", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Getting Started",
      links: [
        { label: "Installation", href: "#" },
        { label: "Plugins", href: "#" },
        { label: "Migrations", href: "#" },
        { label: "Appearance", href: "#" },
        { label: "Mamba UI", href: "#" },
      ],
    },
    {
      title: "Dashboard",
      links: [
        { label: "Header", href: "#" },
        { label: "Drawer", href: "#" },
        { label: "Page Title", href: "#" },
        { label: "Menus", href: "#" },
        { label: "Sidebar", href: "#" },
        { label: "Footer", href: "#" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Homepage", href: "#" },
        { label: "Users", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Settings", href: "#" },
      ],
    },
    {
      title: "Misc",
      links: [
        { label: "Tutorials", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
  ];

  return (
    <aside
      id="style-8"
      className="w-full sm:w-60  bg-amber-50 text-black h-screen overflow-y-auto sidebar"
    >
      <nav className="text-sm my-8">
        {sidebarData.map((section, index) => (
          <div className="space-y-2 p-5 border-t border-black" key={index}>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-black">
              {section.title}
            </h2>
            <div className="flex flex-col space-y-2 pl-5 ">
              {section.links.map((link, index) => (
                <a rel="noopener noreferrer" href={link.href} key={index}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
