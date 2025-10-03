import Head from "@/src/Head";
import State from "@/src/Context";
import Preloader from "@/src/Preloader";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad1(true);
    }, 1000);
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  return (
    <State>
      <Head />
      {!load && <Preloader />}
      {load1 && <Component {...pageProps} />}
    </State>
  );
}
