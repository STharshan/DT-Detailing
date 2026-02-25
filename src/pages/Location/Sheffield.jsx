import EarWaxHero from "../Common/HeroSection";
import ServingAreasSection from "../Common/ServingAreasSection";
import WhyChooseSection from "../Common/WhyChooseSection";
import MicrosuctionComparison from "../Common/MicrosuctionComparison";
import AppointmentSteps from "../Common/AppointmentSteps";
import PricingSection from "../Common/PricingSection";
import PatientCareSection from "../Common/PatientCareSection";
import FAQSection from "../Common/FAQSection";
import FinalCTASection from "../Common/FinalCTASection";
import BoltonMapSection from "../Data/Bolton/Bolton";
import {
  boltonAreas,
  Title,
  Subtitle,
  HeroData,
  footer,
  whyChooseData,
  boltonServicesData,
  boltonPricingData,
  boltonAppointmentData,
  boltonCareData,
  boltonCTAData

} from "../Data/Bolton/servingAreas";
import NavbarLocation from "../components/NavbarLocation";

function Bolton() {
  return (
    <>
      <NavbarLocation />
      <EarWaxHero  {...HeroData} />
      <ServingAreasSection
        areas={boltonAreas}
        title={Title}
        subtitle={Subtitle}
        footer={footer}
      />
      <BoltonMapSection />
      <WhyChooseSection
        location="Bolton"
        data={whyChooseData}
      />
      <MicrosuctionComparison data={boltonServicesData} />
      <PricingSection data={boltonPricingData} />
      <AppointmentSteps data={boltonAppointmentData} />
      <PatientCareSection data={boltonCareData} />
      <FAQSection />

      <FinalCTASection data={boltonCTAData} />

    </>
  );
}

export default Bolton;
