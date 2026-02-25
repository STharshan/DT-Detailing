import EarWaxHero from "../../LocationCommon/HeroSection";
import ServingAreasSection from "../../LocationCommon/ServingAreasSection";
import WhyChooseSection from "../../LocationCommon/WhyChooseSection";
import MicrosuctionComparison from "../../LocationCommon/MicrosuctionComparison";
import AppointmentSteps from "../../LocationCommon/AppointmentSteps";
import FinalCTASection from "../../LocationCommon/FinalCTASection";

import {
  SheffieldAreas,
  Title,
  Subtitle,
  HeroData,
  footer,
  whyChooseData,
  SheffieldServicesData,
  SheffieldAppointmentData,
  SheffieldCTAData
} from "../../LocationData/Sheffield/servingAreas";
import FAQSection from "../../LocationCommon/FAQSection";

function Sheffield() {
  return (
    <>
      <EarWaxHero {...HeroData} />
      <ServingAreasSection
        areas={SheffieldAreas}
        title={Title}
        subtitle={Subtitle}
        footer={footer}
      />
      <WhyChooseSection
        location="Sheffield"
        data={whyChooseData}
      />
      <MicrosuctionComparison data={SheffieldServicesData} />
      <AppointmentSteps data={SheffieldAppointmentData} />
      <FAQSection />
      <FinalCTASection data={SheffieldCTAData} />
    </>
  );
}

export default Sheffield;