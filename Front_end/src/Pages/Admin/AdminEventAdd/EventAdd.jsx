import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';
import "../BootstrapCSS/Bootstrap.css";
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';

const EventAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    theme: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use navigate for routing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/Create', formData);
      if (response.data.success) {
        alert('Event created successfully!');
        navigate('/eventdetails'); // Redirect to event details page
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Error creating event:', err);
      setError('Error creating event. Please try again.');
    }
  };

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="main-panel mt-5">
        <div className="row mt-5">
          <div className="col-12 grid-margin stretch-card">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h4 className="card-title text-white text-center fs-1 fw-bold font-monospace">
                  Expo Management Form
                </h4>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Name"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="theme">Theme</label>
                    <input
                      type="text"
                      className="form-control"
                      id="theme"
                      name="theme"
                      placeholder="Theme"
                      value={formData.theme}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-gradient-dark me-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() =>
                      setFormData({
                        title: '',
                        date: '',
                        location: '',
                        description: '',
                        theme: ''
                      })
                    }
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAdd;
