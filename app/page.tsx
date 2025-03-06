import { Approach } from "@/components/Approach";
import { Client } from "@/components/Client";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
