import {
  BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill
} from 'react-icons/bs';
import { CiLogin } from "react-icons/ci";
import { MdEvent } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = (openSidebarToggle, OpenSidebar) => {

  const navigate = useNavigate(); // Hook for programmatic navigation
  const checkEmail = localStorage.getItem("checkingemail");

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path); // Navigate to the selected path
    }
  };

  return (
    <>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand1'>
            <MdEvent className='icon_header' />
            {checkEmail}
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="/admin">
              <BsGrid1X2Fill className='icon' /> Dashboard 
            </Link>
          </li>
          {(checkEmail === "admin@gmail.com") && (<li className='sidebar-list-item'>
            <BsFillArchiveFill className='icon' />
            <select name="" id="" onChange={handleSelectChange} >
              <option value="" disabled selected>Expo Events</option>
              <option value="/eventadd">Add Event</option>
              <option value="/eventdetails">Event Details</option>
            </select>
          </li>)}
         {(checkEmail === "admin@gmail.com" || checkEmail === "exhibitor1@gmail.com") && (<li className='sidebar-list-item'>
            <BsFillArchiveFill className='icon' />
            <select name="" id="" onChange={handleSelectChange} >
              <option value="" disabled selected>Booth</option>
              <option value="/addbooth">Add Booth</option>
              <option value="/boothdetails">Booth Details</option>
            </select>
          </li>)}
          {(checkEmail === "admin@gmail.com" || checkEmail === "exhibitor1@gmail.com") &&(<li className='sidebar-list-item'>
            <Link to="/exhibitorReqDetails">
              <BsPeopleFill className='icon' /> Exhibitor
            </Link>
          </li>)}
          {(checkEmail === "admin@gmail.com" || checkEmail === "Attendee@gmail.com") && (<li className='sidebar-list-item'>
            <Link to="/attendeDetails">
              <BsListCheck className='icon' /> Attendee
            </Link>
          </li>)}
          <li className='sidebar-list-item'>
            <Link to="/charts">
              <BsMenuButtonWideFill className='icon' /> Charts
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/">
              <CiLogin className='icon' /> Logout
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AdminSidebar;
