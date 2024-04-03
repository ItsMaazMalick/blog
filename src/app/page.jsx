import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2 lg:p-16">
      <Hero />
      <Blogs />
    </div>
  );
}
