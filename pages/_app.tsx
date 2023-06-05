import "../styles/globals.css";
import type { AppProps } from "next/app";
import CustomCursor from "../components/cursor/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          objectFit: "cover",
          bottom: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          rotate: "-180deg",
        }}
      >
        <source src='../background/network.mp4' type='video/mp4' />
      </video>
      <Component {...pageProps} />;
    </>
  );
}
