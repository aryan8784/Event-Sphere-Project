import InfoSection from "../../Components/InfoSection/InfoSection"
import Pricing from '../../Components/Pricing/Pricing';
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";
// import Navbar1 from "../../Components/Navbar/Navbar1";
import Footer from '../../Components/Footer/Footer';
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <Navbar1 /> */}
      <Navbar/>

      <InfoSection {...homeObjOne1} />
      <InfoSection {...homeObjOne2} />
      <InfoSection {...homeObjOne3} />
      <Pricing />
      <InfoSection {...homeObjOne4} />
      <Footer />

    </>
  );
}

export default Home