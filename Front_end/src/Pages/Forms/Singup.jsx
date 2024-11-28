import "./LoginSingup.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // State management using formData, errors, and other states
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    city: '',
    gender: '',
    email: '',
    password: '',
    retypePassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Handle form field changes
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
    if (!formData.name) newErrors.name = 'First name is required';
    if (!formData.lname) newErrors.lname = 'Last name is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.retypePassword) newErrors.retypePassword = 'Passwords do not match';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3000/CreateUser', formData);
      if (response.data.success) {
        setSuccessMessage('Registration successful! You can now login.');
        setFormData({
          name: '',
          lname: '',
          city: '',
          gender: '',
          email: '',
          password: '',
          retypePassword: ''
        });
        navigate("/form");
      } else {
        setErrors({ apiError: response.data.message || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ apiError: error.response?.data?.message || 'Server error. Please try again later.' });
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="container1">
      <div className="header1">
        <div className="text1">Sign Up</div>
        <div className="underline1"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs1">
        {/* Name input */}
        <div className="input1">
          <img src={user_icon} alt="User" />
          <input
            type="text"
            id="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        {/* Last Name input */}
        <div className="input1">
          <img src={user_icon} alt="User" />
          <input
            type="text"
            id="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.lname && <div className="error-message">{errors.lname}</div>}
        </div>

        {/* Email input */}
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

        {/* Password input */}
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

        {/* Retype Password input */}
        <div className="input1">
          <img src={password_icon} alt="Confirm Password" />
          <input
            type="password"
            id="retypePassword"
            placeholder="Confirm Password"
            value={formData.retypePassword}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.retypePassword && <div className="error-message">{errors.retypePassword}</div>}
        </div>

        {/* City input */}
        <div className="input1">
          <img src={user_icon} alt="City" />
          <input
            type="text"
            id="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.city && <div className="error-message">{errors.city}</div>}
        </div>

        {/* Gender input */}
        <div className="input1">
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={isSubmitting}
            className="text-dark"
          >
            <option value="" className="text-white text-center">Select Gender</option>
            <option value="Male" className="text-white text-center">Male</option>
            <option value="Female" className="text-white text-center">Female</option>
            <option value="Other" className="text-white text-center">Other</option>
          </select>
          {errors.gender && <div className="error-message">{errors.gender}</div>}
        </div>

        {/* Success Message */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {/* API Error Message */}
        {errors.apiError && <div className="error-message">{errors.apiError}</div>}

        {/* Submit Button */}
        <div className="submit-container1">
          <div
            className={"submit1"}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
