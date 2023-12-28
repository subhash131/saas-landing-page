import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/pricing/Pricing";
import TechStack from "@/components/techStack/TechStack";
import Testimonial from "@/components/testimonials/Testimonial";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="bg-[#0a0c11] w-full min-h-screen text-white flex flex-col gap-12 items-center">
      <Navbar />
      <Hero />
      <TechStack />
      <Pricing />
      <Testimonial />
      <hr className="border-gray-600 -mt-5 w-[95%]" />
      <Footer />
    </div>
  );
}
