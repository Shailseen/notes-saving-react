import "./landingPage.css";
import poster from "../../assets/undraw_add_notes_re_ln36.svg";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div className="grid-container box-shadow">
      <div className="details-page-container">
        <div className="header-container">
          <h1 className="text-align-left">
            <span className="primary-color">Pocket</span> Notes
          </h1>
        </div>
        <div className="details-container flx-col text-align-left">
          <h3>Meet your modern</h3>
          <h3 className="primary-color">Note Taking App</h3>
          <p>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="authentication-container flex-col text-align-left">
          <button className="button-style-none solid-button disable-hover button-style">
            Join Now
          </button>
          <Link to="/login" className="login-link">
            Already have an account?
          </Link>
        </div>
      </div>
      <div className="image-page-conatiner">
        <img className="img-responsive poster-img" src={poster} />
      </div>
    </div>
  );
};
