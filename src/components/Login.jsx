import googleLogo from "../assets/google-logo.png";
import githubLogo from "../assets/github-logo.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { googleLogin, githubLogin, loginUser, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();

  const handleSocialLogin = (socialMedia) => {
    socialMedia();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset error
    setError("");

    loginUser(email, password)
      .then((res) => {
        if (res.user.emailVerified) {
          console.log("successfully logged in");
        } else {
          alert("Please verified your email address!");
        }

        // reset input fields
        e.target.reset();

        // redirect to home or expected route
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleResetPassword = () => {
    // reset error
    setError("");

    if (!emailRef.current.value) {
      setError("You have to provide your email address!");
      return;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        emailRef.current.value
      )
    ) {
      setError("Please enter a valid email address!");
      return;
    }

    resetPassword(emailRef.current.value)
      .then(() => {
        console.log("Password reset email sent successfully!");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card text-center border-light ">
          <div className="card-body ">
            <h2 className="">Please Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <input
                  className="form-control"
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="Enter your email "
                />
              </div>
              <div className="row mt-2">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="row mt-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>

              <Link
                to=""
                onClick={handleResetPassword}
                className="link-primary text-center mt-5"
              >
                forgotten password?
              </Link>
            </form>
          </div>
          {/* divider */}
          <div className="flex items-center">
            <span className="fw-bold text-primary">or</span>
          </div>
          <div className=" mt-1">Login with google or github</div>
          <div>
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="border-light col-5"
            >
              <img
                style={{ width: 40 }}
                className="img-thumbnail"
                src={googleLogo}
                alt="google logo"
              />
              {/*  <p className="font-medium">Login With Google</p> */}
            </button>
            {""} {""} {""}
            <button
              onClick={() => handleSocialLogin(githubLogin)}
              className="border-light col-5"
            >
              <img
                style={{ width: 40 }}
                className="img-thumbnail"
                src={githubLogo}
                alt="google logo"
              />
              {/*   <p className="font-medium">Login With Github</p> */}
            </button>
          </div>
          <p className="form-control mt-5">
            Already have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register
            </Link>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
