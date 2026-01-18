import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MainOffer from "@/components/MainOffer";
import CourseGrid from "@/components/CourseGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <MainOffer />
      <CourseGrid />
      <Footer />
    </main>
  );
}
