import MasonryCards from "@/components/HomePage/Masonry";
export default function Home() {
  return (
    <main>
      <div className="">
        {/* title */}
        <div className=" w-full mx-auto p-4  mb-24 rounded-md space-y-4 ">
          <h1 className="text-center font-bold xl:text-5xl  md:text-3xl text-2xl">
            The Ultimate Toolkit of Calculators
          </h1>
          <p className="text-center lg:text-lg">
            From basic math to specialized functions, CalcPlus is your one-stop solution for efficient and accurate
            calculations.
          </p>
        </div>
        {/* cards */}
        <div className="">
          <p className="text-3xl font-bold mb-4 mt-10 text-center">Explore our tools</p>
          <MasonryCards />
        </div>
      </div>
    </main>
  );
}
