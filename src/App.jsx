import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='container'>
      <div className="registration">
        <div className="registration__info">
          <div className="info-item">
            <span className="info-item__icon">✓</span>
            <div className="info-item__text">
              <h3 className="info-item__title">Quick and free sign-up</h3>
              <p className="info-item__description">
                Enter your email address to create an account.
              </p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-item__icon">✓</span>
            <div className="info-item__text">
              <h3 className="info-item__title">Cross-platform solution</h3>
              <p className="info-item__description">
                Import data easily and deliver it to customers.
              </p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-item__icon">✓</span>
            <div className="info-item__text">
              <h3 className="info-item__title">Start sending emails</h3>
              <p className="info-item__description">
                Use our API to start sending emails from your templates.
              </p>
            </div>
          </div>
        </div>

        <form className="registration__form" onSubmit={handleSubmit}>
          <h2 className="form__title">Create your account</h2>

          <div className="form__group">
            <label className="form__label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form__input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form__input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form__input"
              placeholder="Type to create a password"
              required
            />
          </div>

          <div className="form__group form__group--checkbox">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="form__checkbox"
            />
            <label className="form__label--checkbox" htmlFor="updates">
              Get updates and notifications about our product.
            </label>
          </div>

          <button type="submit" className="form__button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
