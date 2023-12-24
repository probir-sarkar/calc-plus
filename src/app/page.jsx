import Card from "@/components/HomePage/Card";
import MasonryCards from "@/components/HomePage/Masonry";
export default function Home() {
  return (
    <main>
      <div className="max-w-4xl">
        {/* title */}
        <div className=" w-full mx-auto lg:p-8 p-4 rounded-md bg-purple-700 text-white  ">
          <p className="text-center lg:text-lg">
            Welcome to CalcPlus, your go-to toolkit of calculators! Explore a
            diverse range of calculation tools designed to simplify your
            everyday tasks. From basic math to specialized functions, CalcPlus
            is your one-stop solution for efficient and accurate calculations.
            Discover the power of precision with CalcPlus!
          </p>
        </div>
        {/* cards */}
        <h2>
          <p className="text-3xl font-bold mb-4 mt-10 text-center">
            Explore our tools
          </p>
          <MasonryCards />
        </h2>
      </div>
    </main>
  );
}
