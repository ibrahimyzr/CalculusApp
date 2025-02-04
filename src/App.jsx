import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import Footer from "../src/components/Footer";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer></Footer>
      <Analytics />
    </>
  );
}

export default App;
