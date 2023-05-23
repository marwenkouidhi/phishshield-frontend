import Cards from "src/components/Cards";
import HeroSection from "src/components/HeroSection";
import InfoSection from "src/components/InfoSection";
import NewsLetter from "src/components/NewsLetter";
import { landingData } from "src/data/landingData";

const LandingPage = () => {
  return (
    <div className="">
      <HeroSection />
      {/* <Cards /> */}
      {landingData.map((item, _) => (
        <InfoSection key={_} data={item} />
      ))}
      <NewsLetter />
    </div>
  );
};

export default LandingPage;
