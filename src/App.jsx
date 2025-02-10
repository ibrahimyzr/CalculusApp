import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import Footer from "../src/components/Footer";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header>
        <meta
          name="google-site-verification"
          content="q92qtKfBAvuF0wl0-a1-zcVtqJLMzoX847ljng22C5c"
        />
      </Header>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer></Footer>
      <Analytics />
    </>
  );
}

export default App;
