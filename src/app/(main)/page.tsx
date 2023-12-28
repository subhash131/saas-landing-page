import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/pricing/Pricing";
import TechStack from "@/components/techStack/TechStack";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Home() {
  return (
    <div className="bg-[#0a0c11] w-full min-h-screen text-white flex flex-col gap-12">
      <Navbar />
      <Hero />
      <TechStack />
      <Pricing />
      <Testimonial />
    </div>
  );
}
