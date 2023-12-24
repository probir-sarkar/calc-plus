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
  const isOdd = index % 2 === 0;
  const className = isOdd ? "bg-purple-700 text-white " : "bg-gray-50  ";
  return (
    <Link
      href={href}
      className={`p-2 rounded-md border-2 border-purple-700   transition-all duration-200 ${className} `}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{label}</div>
        <p className=" text-base">{details}</p>
      </div>
      <div className="px-6 py-4"></div>
    </Link>
  );
};
