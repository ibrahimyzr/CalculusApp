import { Link, NavLink, useNavigate } from "react-router-dom";

import diff from "../assets/diff.png";

import calculus1 from "../assets/calculus-1.png";
import calculus2 from "../assets/calculus-2.png";
import linear from "../assets/linear.png";
import application from "../assets/applicationmath.png";
import numeric from "../assets/numeric.png";

import "./Courses.css";

const Courses = () => {
  return (
    <div className="container row ">
      <div className="container-fluid bg-white mt-2">
        <h2 className="text-center font-bold">Matematik Dersleri</h2>
        <div className="row row-cols-2 row-cols-md-4 ">
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={calculus1} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Calculus-1</h5>
                <p className="card-text">Test</p>
                <Link to="/calculus1" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={calculus2} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Calculus-2</h5>
                <p className="card-text">Test</p>
                <Link to="/calculus2" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={calculus2} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Calculus-3</h5>
                <p className="card-text">Test</p>
                <Link to="/calculus3" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          {/* xxxxxx */}
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={diff} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Differential Equations</h5>
                <p className="card-text">Test</p>
                <Link to="/diff" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          {/* //// */}
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={linear} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Linear Algebra</h5>
                <p className="card-text">Test</p>
                <Link to="/linear" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          {/* // /////////// */}
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={application} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">
                  Applied Mathematics in Engineering
                </h5>
                <p className="card-text">Test</p>
                <Link to="/applied" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>

          {/* // /////////// */}
          <div className="col mb-4 shadow p-3 mb-5 bg-beige rounded">
            <div className="card h-100">
              <img src={numeric} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Numerical Methods for Engineers</h5>
                <p className="card-text">Test</p>
                <Link to="/numeric" className="btn btn-primary">
                  Detayları göster
                </Link>
              </div>
            </div>
          </div>
          {/* // /////////// */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
