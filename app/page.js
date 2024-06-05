
import About from "./components/ABOUT";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Office from "./components/Office";
import TruckPricing from "./components/Pricing";
import Services from "./components/Services";
import TeamSection from "./components/Team";
import Testimonial from "./components/Testimppnal";
import AboutUsSection from "./components/about us";
import Header from "./components/header"
import Hero from "./components/hero";
import OnboardingSection from "./components/onBoarding";


export default function Home() {
  return (
    <main className="">
    <Header />
      <Hero />
      <About />
      <Services />
      <AboutUsSection />
      <TeamSection />
      <Office />
      
      <OnboardingSection />
      <TruckPricing />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
