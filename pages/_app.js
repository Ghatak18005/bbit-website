import { isMobile } from "react-device-detect";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Footer_Mob from "../components/Footer_Mob";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [dept, setDept] = useState(null);

  useEffect(() => {
    const url = "/api/dept";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDept(data))
      .catch((error) => console.error("Failed to fetch department data:", error));
  }, []);

  const isMob = isMobile;

  const FooterComponent = isMob ? Footer_Mob : Footer;

  return (
    <>
      <Navbar />
      <Component {...pageProps} dept={dept} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
