import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Carousel from "./Carousel";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <section>
      <meta
        name="google-site-verification"
        content="q92qtKfBAvuF0wl0-a1-zcVtqJLMzoX847ljng22C5c"
      />
      <div
        className=" mt-1"
        style={{
          alignItems: "center",
          // backgroundColor: "gray",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Carousel></Carousel>

        {/*        <div className="card">
          <img
            style={{ width: 50 }}
            src="src/assets/google-logo.png"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div> 
        </div> */}

        {loading && (
          <span className="loading loading-spinner text-success loading-lg"></span>
        )}
        {/*  {user && (
          <div className="bg-white shadow-lg border border-gray-100 p-5 rounded-lg">
            <img
              className="mx-auto w-20 h-20 rounded-full mb-5 object-cover"
              src={user.photoURL}
              alt={user.displayName}
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Home;
