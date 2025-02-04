import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUser, emailVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // reset error
    setError("");

    if (!terms) {
      setError("Your have to accept your terms and conditions for register!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be 6 characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password should have at lest one uppercase charachter!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        // update profile
        updateUser(res.user, name);

        // email varification
        emailVerification(res.user)
          .then(() => {
            console.log("Please check your email and verified your account!");
          })
          .catch((err) => {
            setError(err.message);
          });

        // navigate to home page
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card text-center border-light">
          <h2 className="card-body">Register Now!</h2>
          <form onSubmit={handleRegister}>
            <input
              className="form-control mt-2"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              className="form-control mt-2"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <div className="relative">
              <input
                className="form-control mt-2"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-2 cursor-pointer mt-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <label className="flex items-center gap-3 mt-3">
              <input type="checkbox" name="terms" />
              Accept our terms and conditions.
            </label>
            <button className="btn btn-primary mt-3 form-control">
              Register
            </button>
            <p className="form-control mt-3">
              Already have an account? Please{" "}
              <Link className="text-blue-500 underline mt-5" to="/login">
                Login
              </Link>
            </p>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Register;
