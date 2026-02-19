import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Technology />
      <Impact />
      <HowItWorks />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
