import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import Footer from "../src/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { ElfsightWidget } from "react-elfsight-widget";

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto">
        <ElfsightWidget widgetId="ef8d50d9-fd03-45e4-a4b8-3cad7cc900d9" lazy />;
        <Outlet />
      </main>
      <Footer></Footer>
      <Analytics />
    </>
  );
}

export default App;
