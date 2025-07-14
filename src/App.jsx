import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";

const App = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    console.log(window.outerWidth);
    if (window.outerWidth > 640) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className={`${isMobile ? "" : "invisible"} sticky top-0`}>
      <Analytics />
      <Navbar />
    </div>
  );
};

export default App;
