import { useState } from "react"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import AdminHome from "./AdminHome"
import "./Adminstyle.css"

const AdminMainPage = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>

      <div className='grid-container'>
        <AdminHeader OpenSidebar={OpenSidebar} />
        <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <AdminHome />
      </div>


    </>
  )
}

export default AdminMainPage