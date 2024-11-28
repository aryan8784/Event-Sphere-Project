import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar';
// import AdminHeader from '../AdminHeader';

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Events'); // GET request
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <AdminSidebar />
      {/* <AdminHeader /> */}
        <h3 className="text-center mt-4">Event Details</h3>
      <div className="main-panel w-50 h-50 m-auto overflow-x-scroll">
        {events.length === 0 ? (
          <p className="text-center">No events available</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
                <th>Theme</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                  <td>{event.theme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default EventDetails;
