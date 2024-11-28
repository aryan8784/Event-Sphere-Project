import AdminSidebar from "../AdminSidebar"
import "../BootstrapCSS/Bootstrap.css"
const AttendeeDetails = () => {
  return (
    <>
    <AdminSidebar/>
      <div className="main-panel  m-0">
        <div className="content-wrapper overflow-x-scroll  w-100">
          <table className="table">
            <thead>
              {/* Adding a new row for the title */}
              <tr>
                <td colSpan="6" className="white-box">
                  <h4 className="card-title text-center">Attendee Details</h4>
                </td>
              </tr>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Organization</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Aryan</td>
                <td>Javed</td>
                <td>aryan@gmail.com</td>
                <td>Army Public College</td>
                <td>Karachi</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Ayesha</td>
                <td>Jutt</td>
                <td>ayeshajutt@gmai.com</td>
                <td>Memon Institute</td>
                <td>Lahore</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mobeen</td>
                <td>Malik</td>
                <td>mobeen5432@gmial.com</td>
                <td>Saylani Institute</td>
                <td>Karachi</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Muhammad</td>
                <td>JahanZeb</td>
                <td>jahanzeb123@gmail.com</td>
                <td>Home Institute</td>
                <td>Karachi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AttendeeDetails