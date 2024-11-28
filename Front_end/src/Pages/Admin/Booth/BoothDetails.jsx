import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar';
// import AdminHeader from '../AdminHeader';

const BoothDetails = () => {
  const [booths, setBooths] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooths = async () => {
      try {
        const response = await axios.get('http://localhost:3000/GetAllBooths'); // Update this route if necessary
        setBooths(response.data);
      } catch (err) {
        console.error('Error fetching booths:', err);
        setError('Failed to load booths. Please try again later.');
      }
    };

    fetchBooths();
  }, []);

  return (
    <>
      {/* <AdminHeader /> */}
      <AdminSidebar />
        <h3 className="text-center mt-5">Booth Details</h3>
      <div className="main-panel w-50 h-50 m-auto overflow-x-scroll">
        {error && <div className="alert alert-danger">{error}</div>}
        {booths.length === 0 ? (
          <p className="text-center">No booths available</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Booth Number</th>
                <th>Size</th>
                <th>Status</th>
                <th>Floor</th>
              </tr>
            </thead>
            <tbody>
              {booths.map((booth, index) => (
                <tr key={index}>
                  <td>{booth.boothNumber}</td>
                  <td>{booth.size}</td>
                  <td>{booth.status}</td>
                  <td>{booth.floor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default BoothDetails;
