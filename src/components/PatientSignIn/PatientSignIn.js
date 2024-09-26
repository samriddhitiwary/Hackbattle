
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientSignIn.css';

const PatientSignIn = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone } = formData;

        // Validation checks
        if (firstName.length < 3 || lastName.length < 3) {
            alert('First and Last Name must contain at least 3 characters!');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert('Phone Number must contain exactly 10 digits!');
            return;
        }

        // Simulate sign-in success
        console.log('Form submitted:', formData);
        alert('Sign-in successful!');

        // Redirect to the home page
        navigate('/home');
    };

    return (
        <div className="bg">
            <img src="images/Header/logo.jpeg" alt="Logo" className="logo" />
            <div className="Sign_In_container">
                <h2><b>PATIENT SIGN-IN</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-row">
                        <div className="form-group">
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input 
                                type="text" 
                                id="firstName" 
                                placeholder="First Name" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><b>Last Name</b></label>
                            <input 
                                type="text" 
                                id="lastName" 
                                placeholder="Last Name" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group_1">
                        <label htmlFor="email"><b>Email</b></label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group_2">
                        <label htmlFor="phone"><b>Phone Number</b></label>
                        <input 
                            type="tel" 
                            id="phone" 
                            placeholder="Phone (10 digits)" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientSignIn;
