import "./LoginSingup.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSingup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  
  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on submit
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true); // Disable submit button during API call
    try {
      const response = await axios.post('http://localhost:3000/UserLogin', formData);
      if (response.data.success) {
        const { role, email } = response.data.data;
        
        // Store email and role in localStorage (optional, depending on use case)
        localStorage.setItem('checkingemail', email);
        localStorage.setItem('role', role); // Store role to manage user access

        if (role === 'attendee') {
          alert("Login Successful!");
          navigate('/admin'); // Redirect to the attendee dashboard
        } else if (role === 'admin') {
          alert("Login Successful!");
          navigate('/admin-dashboard'); // Redirect to admin dashboard
        } else {
          setApiError('You do not have permission to access this system.');
        }
      } else {
        setApiError(response.data.message || 'Login failed');
      }
    } catch (error) {
      setApiError(error.response?.data?.message || 'Server error. Please try again later.');
    } finally {
      setIsSubmitting(false); // Re-enable submit button after API call
    }
};

  return (
    <div className="container1">
      <div className="header1">
        <div className="text1">Login</div>
        <div className="underline1"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs1">
        {/* Form inputs for email and password */}
        <div className="input1">
          <img src={email_icon} alt="Email" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input1">
          <img src={password_icon} alt="Password" />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="forgot-password1">
          Forgot Password <span>Click Here</span>
        </div>

        {apiError && <div className="error-message">{apiError}</div>}

        <div className="submit-container1">
          <div
            className={"submit1"}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSingup;
