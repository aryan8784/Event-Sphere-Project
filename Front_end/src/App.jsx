import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginSingup from './Pages/Forms/LoginSingup';
import GlobalStyle from "./GlobalStyles";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import { Routes, Route } from "react-router-dom";
import AdminMainPage from './Pages/Admin/AdminMainPage';
import EventAdd from './Pages/Admin/AdminEventAdd/EventAdd';
import EventDetails from './Pages/Admin/AdminEventAdd/EventDetails';
import AddBoth from './Pages/Admin/Booth/AddBoth';
import BoothDetails from './Pages/Admin/Booth/BoothDetails';
import ExhibitorReq from './Pages/Admin/Exhibitor_Req/ExhibitorReq';
import AttendeeDetails from './Pages/Admin/Attendeee/AttendeeDetails';
import AdminHome from './Pages/Admin/AdminHome';
import Singup from './Pages/Forms/Singup';
// import Protectedroutes from './utils/Protectedroutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        {/* <Route element={<Protectedroutes />}>
          <Route path='/admin' element={<AdminMainPage />} />
        </Route> */}
        <Route path="/" index element={<Home />} />
        <Route path='/form' element={<LoginSingup />} />
        <Route path='/singup' element={<Singup />} />
        <Route path="/eventadd" element={<EventAdd />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/addbooth" element={<AddBoth />} />
        <Route path='/boothdetails' element={<BoothDetails />} />
        <Route path='/exhibitorReqDetails' element={<ExhibitorReq />} />
        <Route path='/attendeDetails' element={<AttendeeDetails />} />
        <Route path='/charts' element={<AdminHome />} />
        <Route path='/admin' element={<AdminMainPage />} />
        <Route path="/events" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
