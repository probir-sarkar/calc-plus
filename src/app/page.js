import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="bg-amber-50 container mx-auto">
        <Sidebar />
      </div>
    </>
  );
}
