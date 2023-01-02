import "../CSS/LoginUi.css";
import logo from "../Images/GEHEALTH.png";
import email from "../Images/email.jpg";
import pass from "../Images/pass.png";
import { Link } from "react-router-dom";

function LoginUi() {
  // const [details, setDetails] = useState({name: "", email: "", password: ""});

  // const submitHandler = e => {
  //     e.preventDevault();

  //     Login(details);

  // }
  return (
    // <form onSubmit={submitHandler}>
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={logo} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            {/* <h1 style={{ color: "white", font-size: }}>Log In</h1> */}
            {/* {(error != "") ? ( <div className="error">{error}</div>) : ""} */}
            <br />
            <div>
              <img src={email} alt="email" className="email" />
              <h5>Email</h5>
              <input type="text" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <h3>Password</h3>
              <input type="password" className="name" />
            </div>
            <Link to="/Homepage">
              <div className="login-button">
                <button className="button">
                  <span style={{ font: "poppins" }}>Log in</span>
                </button>
              </div>
            </Link>
            {/* <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
    // </form>
  );
}

export default LoginUi;
