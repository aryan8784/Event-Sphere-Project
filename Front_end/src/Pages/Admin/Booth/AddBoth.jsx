import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';

const AddBooth = () => {
  const [boothNumber, setBoothNumber] = useState('');
  const [boothSize, setBoothSize] = useState('');
  const [floor, setFloor] = useState('');
  const [status, setStatus] = useState('Available');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      boothNumber,
      size: boothSize,
      status,
      floor,
    };

    try {
      const response = await axios.post('http://localhost:3000/CreateBooth', data);
      console.log('Booth created successfully:', response);
      alert('Booth created successfully!'); // Show success message
      navigate('/boothdetails'); // Redirect to Booth Details page
    } catch (error) {
      console.error('Error creating booth:', error);
      setError('Failed to create booth. Please try again.'); // Set error message
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card bg-info">
                <div className="card-body text-white">
                  <h4 className="card-title text-white fs-2 text-center fw-bold">Booth Management Form</h4>
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                      <label htmlFor="boothNumber">Booth Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="boothNumber"
                        placeholder="Booth"
                        value={boothNumber}
                        onChange={(e) => setBoothNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="boothSize">Booth Size</label>
                      <input
                        type="text"
                        className="form-control"
                        id="boothSize"
                        placeholder="Size"
                        value={boothSize}
                        onChange={(e) => setBoothSize(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="floor">Floor</label>
                      <input
                        type="text"
                        className="form-control"
                        id="floor"
                        placeholder="Floor"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="Available" className="bg-white">
                          Available
                        </option>
                        <option value="Reserved" className="bg-white">
                          Reserved
                        </option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-gradient-dark me-2">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        setBoothNumber('');
                        setBoothSize('');
                        setFloor('');
                        setStatus('Available');
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBooth;
