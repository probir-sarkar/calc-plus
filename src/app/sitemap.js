import { allLinks } from "@/data/sidebar.js";

const sitemapGenerator = () => {
  return allLinks.map((link) => {
    return {
      url: `https://calc-plus.probir.dev${link.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    };
  });
};

export default function sitemap() {
  return [
    {
      url: "https://calc-plus.probir.dev/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...sitemapGenerator(),
  ];
}
