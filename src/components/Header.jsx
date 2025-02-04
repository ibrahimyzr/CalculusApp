import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "./Header.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { user, logOut, admin } = useContext(AuthContext);
  const location = useLocation();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddCustomer");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${encodeURIComponent(search)}`); // Remove spaces and encode the search value
    setSearch("");
  };

  return (
    <div className="header bg-secondary">
      <div className="navbar navbar navbar-static-top ">
        <div>
          <Link to="./">
            <p
              className="logo"
              onClick={() => setActiveTab("Home")}
              style={{ marginBottom: 75 }}
            >
              <img src={logo}></img>
              Calculus-Diff
            </p>
          </Link>
        </div>
        <nav style={{ marginBottom: 40 }}>
          <ul className="header-right">
            <Link to="/">
              <p
                className={`${activeTab === "Home" ? "active" : "notactive"}`}
                onClick={() => setActiveTab("Home")}
              >
                Ana Sayfa
              </p>
            </Link>

            <Link to="/about">
              <p
                className={`${activeTab === "About" ? "active" : "notactive"}`}
                onClick={() => setActiveTab("About")}
              >
                Hakkımızda
              </p>
            </Link>

            <Link to="/courses">
              {" "}
              <p
                className={`${
                  activeTab === "courses" ? "active" : "notactive"
                }`}
                onClick={() => setActiveTab("courses")}
              >
                Dersler
              </p>
            </Link>

            <Link to="/contact">
              <p
                className={`${activeTab === "add" ? "active" : "notactive"}`}
                onClick={() => setActiveTab("add")}
              >
                İletişim
              </p>
            </Link>

            {user && admin && (
              <>
                <Link to="/dashboard">
                  {" "}
                  <p
                    className={`${
                      activeTab === "dashboard" ? "active" : "notactive"
                    }`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    Dashboard
                  </p>
                </Link>

                <Link to="/messages">
                  {" "}
                  <p
                    className={`${
                      activeTab === "message" ? "active" : "notactive"
                    }`}
                    onClick={() => setActiveTab("message")}
                  >
                    Message
                  </p>
                </Link>
              </>
            )}
          </ul>
        </nav>
        {user ? (
          <div
            style={{
              backgroundColor: "white",
              borderBlockColor: "cornflowerblue",
              fontSize: 12,
              fontStyle: "bold",
              marginBottom: 75,
            }}
          >
            <p className="font-semibold">{user.displayName}</p>
            {/*   <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.photoURL}
                alt={`photo of ${user.displayName}`}
              /> */}
            <button onClick={handleLogOut}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button
                className="btn btn-info"
                style={{
                  backgroundColor: "white",
                  borderBlockColor: "cornflowerblue",
                  fontSize: 12,
                  fontStyle: "bold",
                  marginBottom: 75,
                  marginRight: 15,
                }}
              >
                Login
              </button>
            </Link>
            {/*         <Link to="/register">
              <button
                className="btn btn-info"
                style={{
                  backgroundColor: "white",
                  borderBlockColor: "cornflowerblue",
                  fontSize: 10,
                  fontStyle: "bold",
                }}
              >
                Register
              </button>
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
