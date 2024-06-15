import styles from './SignUp.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function SignUp({ handleSubmit, handleChange }) {
  SignUp.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  return (
    <div className={styles['signup-container']}>
      <h1 className={styles['title-signup']}>Sign Up</h1>
      <form className={styles['signup-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="fullName">Full Name</label>
          <div className={styles['input-with-icon']}>
            <FontAwesomeIcon icon={faAddressCard} className={styles['input-icon']} />
            <br /> <br />
            <input
              onChange={handleChange}
              className={styles['signup-input']}
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <div className={styles['input-with-icon']}>
            <FontAwesomeIcon icon={faEnvelope} className={styles['input-icon']} />
            <br />
            <br />
            <input
              onChange={handleChange}
              className={styles['signup-input']}
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="role">Role</label>
          <FontAwesomeIcon icon={faUser} className={styles['input-icon']} />
          <br />
          <br />
          <select
            onChange={handleChange}
            className={styles['signup-input']}
            name="role"
            id="role"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose your role
            </option>
            <option value="guest">Guest</option>
            <option value="creator">Creator</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="password">Password</label>
          <FontAwesomeIcon icon={faKey} className={styles['input-icon']} />
          <br />
          <br />
          <input
            onChange={handleChange}
            className={styles['signup-input']}
            name="password"
            type="password"
            placeholder="Set your password"
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <FontAwesomeIcon icon={faLock} className={styles['input-icon']} />
          <br />
          <br />
          <input
            onChange={handleChange}
            className={styles['signup-input']}
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            required
          />
        </div>

        <div className={styles['terms-checkbox']}>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            By signing up, you agree to our terms and privacy policy.
          </label>
        </div>

        <button type="submit" className={styles['btn-submit']}>
          Get Started
        </button>
      </form>
    </div>
  );
}
