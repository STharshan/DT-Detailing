import EarWaxHero from "../../LocationCommon/HeroSection";
import ServingAreasSection from "../../LocationCommon/ServingAreasSection";
import WhyChooseSection from "../../LocationCommon/WhyChooseSection";
import MicrosuctionComparison from "../../LocationCommon/MicrosuctionComparison";
import AppointmentSteps from "../../LocationCommon/AppointmentSteps";
import FinalCTASection from "../../LocationCommon/FinalCTASection";

import {
  DoncasterAreas,
  Title,
  Subtitle,
  HeroData,
  footer,
  whyChooseData,
  DoncasterServicesData,
  DoncasterAppointmentData,
  DoncasterCTAData
} from "../../LocationData/Doncaster/servingAreas";
import FAQSection from "../../LocationCommon/FAQSection";
import DoncasterMapSection from "../../LocationData/Doncaster/DoncasterMap";

function Doncaster() {
  return (
    <>
      <EarWaxHero {...HeroData} />
      <ServingAreasSection
        areas={DoncasterAreas}
        title={Title}
        subtitle={Subtitle}
        footer={footer}
      />
      <DoncasterMapSection />
      <WhyChooseSection
        location="Doncaster"
        data={whyChooseData}
      />
      <MicrosuctionComparison data={DoncasterServicesData} />
      <AppointmentSteps data={DoncasterAppointmentData} />
      <FAQSection />
      <FinalCTASection data={DoncasterCTAData} />
    </>
  );
}

export default Doncaster;