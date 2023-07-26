import AboutUs from "@/components/aboutus";
import Contact from "@/components/contact";
import { Hero } from "@/components/hero";
import References from "@/components/references";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <References />
      <Contact />
    </div>
  );
}
