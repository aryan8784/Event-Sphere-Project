import { Button } from "../../GlobalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.element";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Event Schedule</PricingHeading>
          <PricingContainer>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <img style={{width:"70px"}} src="https://cdn-icons-png.flaticon.com/256/6312/6312395.png" alt="" />
                </PricingCardIcon>
                <PricingCardPlan>Dawn Education</PricingCardPlan>
                <PricingCardLength>Pearl Continental Hotel</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Timings</PricingCardFeature>
                  <PricingCardFeature>09:00 AM-06:00 PM</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Event Type</PricingCardFeature>
                  <PricingCardFeature>✔Trade Show</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Directions</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <img style={{width:"70px"}} src="https://cdn-icons-png.flaticon.com/256/4442/4442704.png" alt="" />
                </PricingCardIcon>
                <PricingCardPlan>Pak Water & Energy</PricingCardPlan>
                <PricingCardLength>Karachi Expo Center</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Timings</PricingCardFeature>
                  <PricingCardFeature>09:00 AM-06:00 PM</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Event Type</PricingCardFeature>
                  <PricingCardFeature>✔Trade Show</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Directions</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <img style={{width:"70px"}} src="https://cdn-icons-png.flaticon.com/256/9670/9670335.png" alt="" />
                </PricingCardIcon>
                <PricingCardPlan>ICPF Fair</PricingCardPlan>
                <PricingCardLength>Karachi Expo Center</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Timings</PricingCardFeature>
                  <PricingCardFeature>09:00 AM-06:00 PM</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Event Type</PricingCardFeature>
                  <PricingCardFeature>✔Trade Show</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Directions</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
