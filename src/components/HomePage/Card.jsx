import Link from "next/link";

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

export default Card;
