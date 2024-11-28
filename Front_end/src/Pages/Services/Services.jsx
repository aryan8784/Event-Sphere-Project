import InfoSection from "../../Components/InfoSection/InfoSection";
import Pricing from "../../Components/Pricing/Pricing";
import {  homeObjOne3  } from "../Data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne3} />
    </>
  );
}

export default Services;
