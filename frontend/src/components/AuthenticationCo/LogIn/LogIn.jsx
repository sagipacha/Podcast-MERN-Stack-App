import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import styles from "../SignUp/SignUp.module.css"; 
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function LogIn({ handleSubmit, handleChange }) {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/authentication/forgotPassword"); 
  };

  LogIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  return (
    <div className={styles['signup-container']}>
      <h1 className={styles['title-signup']}>Log In</h1>
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <div className={styles['form-group']}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <FontAwesomeIcon icon={faEnvelope} className={styles['input-icon']} />
          <br />
          <br />
          <div className={styles['input-container']}>
            <input
              onChange={handleChange}
              className={styles['signup-input']}
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <FontAwesomeIcon icon={faKey} className={styles['input-icon']} />
          <br />
          <br />
          <div className={styles['input-container']}>
            <input
              onChange={handleChange}
              className={styles['signup-input']}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <button type="submit" className={styles['btn-submit']}>
          Submit
        </button>

        <p className={styles['link-forgot-password']} onClick={handleForgotPasswordClick}>Forgot password? Click here</p>
      </form>
    </div>
  );
}
