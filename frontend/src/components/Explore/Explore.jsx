import { Link } from 'react-router-dom';
import styles from './Explore.module.css'; 

const Explore = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['center']}>
        <img
          alt="Sleek Modern"
          className={styles['image']}
        />
        <h2>
          Welcome to <br />
          AudioSphere
        </h2>
        <Link to="/authentication">
          <button className={styles['explore-button']}>Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
