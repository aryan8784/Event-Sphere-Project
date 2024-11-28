import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const ExhibitorReq = () => {

  const exhibitors = [
  {
    id: 1,
    companyName: 'Mark',
    email: 'mark.otto@example.com',
    product: 'Smartphone',
    contact: '1234',
    exhibitionName: 'Tech Expo',
    booth: 'A1',
    floor: 'Fourth',
  },
  {
    id: 2,
    companyName: 'Jacob',
    email: 'jacob.thornton@example.com',
    product: 'Laptops',
    contact: '5678',
    exhibitionName: 'Gadget World',
    booth: 'B2',
    floor: 'First',
  },
  {
    id: 3,
    companyName: 'Larry the Bird',
    email: 'larry_bird562@gmail.com',
    product: 'Smart Watches',
    contact: '9876',
    exhibitionName: 'Tech Expo',
    booth: 'C3',
    floor: 'Third',
  },
  {
    id: 4,
    companyName: 'Jackson Inc.',
    email: 'jackson@example.com',
    product: 'Office Furniture',
    contact: '4321',
    exhibitionName: 'Office Supplies Expo',
    booth: 'D4',
    floor: 'Ground',
  },
  {
    id: 5,
    companyName: 'Innovative Tech',
    email: 'info@innovativetech.com',
    product: 'VR Headsets',
    contact: '1111',
    exhibitionName: 'Gadget World',
    booth: 'E5',
    floor: 'Second',
  },
  {
    id: 6,
    companyName: 'Future Foods',
    email: 'futurefoods@example.com',
    product: 'Plant-Based Protein',
    contact: '2233',
    exhibitionName: 'Food Innovation Expo',
    booth: 'F6',
    floor: 'First',
  },
  {
    id: 7,
    companyName: 'Green Solutions',
    email: 'contact@greensolutions.com',
    product: 'Solar Panels',
    contact: '3344',
    exhibitionName: 'GreenTech Expo',
    booth: 'G7',
    floor: 'Third',
  },
  {
    id: 8,
    companyName: 'Techtonics',
    email: 'info@techtonics.com',
    product: 'Smart Home Devices',
    contact: '5566',
    exhibitionName: 'Smart Living Expo',
    booth: 'H8',
    floor: 'Fourth',
  },
  {
    id: 9,
    companyName: 'Robo Innovations',
    email: 'support@roboinnovations.com',
    product: 'Robotics Kits',
    contact: '6677',
    exhibitionName: 'Tech Expo',
    booth: 'I9',
    floor: 'Second',
  },
  {
    id: 10,
    companyName: 'NanoTech Ltd.',
    email: 'contact@nanotech.com',
    product: 'Nano Devices',
    contact: '7788',
    exhibitionName: 'Nano Expo',
    booth: 'J10',
    floor: 'Ground',
  },
];




  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>

      <div style={{ padding: '90px', maxWidth: '60%',margin:"0px auto" }}>
        <div style={{ overflowX: 'auto' }}>
          <table
            className="table"
            style={{
              width: '100%', // Squeeze the table width to 80%
              height: '70vh', // Squeeze the table width to 80%
              margin: 'auto', // Center the table
              borderCollapse: 'collapse', // Remove gaps between borders
              fontSize: '14px',
              padding: "30px"
            }}
          >
            <thead>
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '10px' }}>
                  <h4 className="card-title fs-1 display-4" style={{ margin: '0' }}>Exhibitor Details</h4>
                </td>
              </tr>
              <tr>
                <th style={{ padding: '5px', width: '5%', textAlign: "center", backgroundColor: "#198AE3" }}>#</th>
                <th style={{ padding: '5px', width: '15%', textAlign: "center", backgroundColor: "#198AE3" }}>Company Name</th>
                <th style={{ padding: '5px', width: '15%', textAlign: "center", backgroundColor: "#198AE3" }}>Email</th>
                <th style={{ padding: '5px', width: '10%', textAlign: "center", backgroundColor: "#198AE3" }}>Product</th>
                <th style={{ padding: '5px', width: '20%', textAlign: "center", backgroundColor: "#198AE3" }}>Contact Information</th>
                <th style={{ padding: '5px', width: '15%', textAlign: "center", backgroundColor: "#198AE3" }}>Exhibition Name</th>
                <th style={{ padding: '5px', width: '10%', textAlign: "center", backgroundColor: "#198AE3" }}>Booth</th>
                <th style={{ padding: '5px', width: '10%', textAlign: "center", backgroundColor: "#198AE3" }}>Floor</th>
              </tr>
            </thead>
            <tbody>
              {exhibitors.map((exhibitor) => (
                <tr key={exhibitor.id}>
                  <th scope="row" style={{ padding: '5px', backgroundColor: "#198AE3", textAlign: "center" }}>{exhibitor.id}</th>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.companyName}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.email}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.product}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.contact}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.exhibitionName}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.booth}</td>
                  <td style={{ padding: '5px', textAlign: "center", border: "1px solid black" }}>{exhibitor.floor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default ExhibitorReq