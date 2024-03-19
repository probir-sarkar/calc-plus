import Link from "next/link";
import { allLinks } from "@/data/sidebar";
const MasonryCards = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
        {allLinks.map((link, index) => (
          <Card key={link.label} {...link} index={index} />
        ))}
      </div>
    </>
  );
};

export default MasonryCards;

const Card = ({ label, href, details, index }) => {
  return (
    <Link
      href={href}
      className={`p-2 rounded-md border-2 border-gray-200 hover:border-purple-700 min-h-[15rem]  transition-all duration-200 `}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{label}</div>
        <p className=" text-base">{details}</p>
      </div>
    </Link>
  );
};
