import "../styles/About.css";
import User from "./User";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are dedicated to providing high-quality
            services and ensuring customer satisfaction. Our team works hard to
            bring you the best experience.
          </p>
        </div>
      </div>
      <User name="Saruhashini" Location="Jaffna" />
    </>
  );
};

export default About;
