import About from "@/components/About";
import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import GatsbyPortfolio from "@/components/GatsbyPortfolio";
import HtmlPortfolio from "@/components/HtmlPortfolio";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <GatsbyPortfolio />
      <HtmlPortfolio />
      <CallToAction />
      <Footer />
    </>
  );
}
