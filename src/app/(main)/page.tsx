import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/techStack/TechStack";

export default function Home() {
  return (
    <div className="bg-[#0a0c11] w-full min-h-screen text-white flex flex-col gap-12">
      <Navbar />
      <Hero />
      <TechStack />
    </div>
  );
}
