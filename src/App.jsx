import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Onboard from "./pages/Onboard";

const App = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    console.log(window.outerWidth);
    if (window.outerWidth > 640) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className={`${isMobile ? "" : "invisible"} w-screen h-screen`}>
      <Analytics />
      <Onboard />
    </div>
  );
};

export default App;
