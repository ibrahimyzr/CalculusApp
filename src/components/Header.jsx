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
    <nav className="navbar navbar-expand-md navbar-light bg-secondary py-0 py-lg-0">
      <meta
        name="google-site-verification"
        content="q92qtKfBAvuF0wl0-a1-zcVtqJLMzoX847ljng22C5c"
      />
      <div className="container-fluid">
        <Link to="./">
          <p
            className="logo"
            onClick={() => setActiveTab("Home")}
            style={{ marginBottom: 0 }}
          >
            <img src={logo}></img>
            Calculus-Diff
          </p>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon h6"></span>
        </button>{" "}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div
            className="navbar-nav"
            style={{
              marginLeft: 200,
              alignItems: "flex-end",
              gap: 20,
              marginTop: 10,
            }}
          >
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

            {/* xxxxxxxxxxxxxxxxx */}
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
          </div>
          {user ? (
            <div className="navbar-nav ms-auto bg-secondary">
              <p style={{ marginRight: 10 }}>{user.displayName}</p>
              {""} {""} {""} {""} {""} {""} {""} {""}
              {/*   <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.photoURL}
                alt={`photo of ${user.displayName}`}
              /> */}
              <button
                className="btn btn-info"
                style={{
                  borderBlockColor: "cornflowerblue",
                }}
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-nav ms-auto ">
              <Link to="/login">
                <button
                  className="btn btn-info"
                  style={{
                    borderBlockColor: "cornflowerblue",

                    marginRight: 15,
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
