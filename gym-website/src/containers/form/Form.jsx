import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    telephones: [''],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telephones') {
      const telephones = [...formData.telephones];
      telephones[Number(e.target.dataset.index)] = value;
      setFormData({ ...formData, telephones });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddTelephone = () => {
    setFormData({ ...formData, telephones: [...formData.telephones, ''] });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age <= 17) {
      newErrors.age = 'Age must be over 18';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    formData.telephones.forEach((telephone, index) => {
      if (!telephone.trim()) {
        newErrors[`telephones[${index}]`] = 'Telephone number is required';
      } else if (!isValidPhoneNumber(telephone)) {
        newErrors[`telephones[${index}]`] = 'Invalid phone number format';
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return /^(\+\d{1,3})?\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data or perform other actions here
      console.log('Form data:', formData);
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign-Up Today!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-input"
          />
          {errors.firstName && (
            <div className="form-error">{errors.firstName}</div>
          )}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-input"
          />
          {errors.lastName && (
            <div className="form-error">{errors.lastName}</div>
          )}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="form-input"
          />
          {errors.age && <div className="form-error">{errors.age}</div>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-field">
          <label className="form-label">Telephones:</label>
          {formData.telephones.map((telephone, index) => (
            <div key={index}>
              <input
                type="tel"
                name="telephones"
                data-index={index}
                value={telephone}
                onChange={handleInputChange}
                className="form-input"
              />
              {errors[`telephones[${index}]`] && (
                <div className="form-error">
                  {errors[`telephones[${index}]`]}
                </div>
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
