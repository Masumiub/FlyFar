import Image from "next/image";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Testimonials from "./components/Testimonials";
import Offer from "./components/Offer";
import SecureAndNewsletter from "./components/SecureAndNewsletter";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <div className="w-full md:w-10/12 mx-auto">
        <Header></Header>
        <Overview></Overview>
        <Offer></Offer>
        <Testimonials></Testimonials>
        <FAQs></FAQs>
        <SecureAndNewsletter></SecureAndNewsletter>
    </div>
  );
}
