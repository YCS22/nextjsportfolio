import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AboutComponent } from "../components/about";
import { BlogComponent } from "../components/blog";
import { ContactComponent } from "../components/contact";
import { NavbarStatus } from "../components/enums/navbar";
import { HomeComponent } from "../components/home";
import { Navbar } from "../components/navbar";
import { PortfolioComponent } from "../components/portfolio";

export default function Home() {
  const [status, setStatus] = useState<number>(NavbarStatus.Home);

  const callbackFunction = (status: any) => {
    setStatus(status);
  };

  return (
    <div
      className='flex flex-col text-white  md:space-y-10 z-20 '
      style={{ zIndex: 1 }}
    >
      <Navbar callback={callbackFunction} status={status} />

      {status == NavbarStatus.Home && (
        <HomeComponent callback={callbackFunction} />
      )}

      {status == NavbarStatus.Skills && (
        <BlogComponent callback={callbackFunction} />
      )}
      {status == NavbarStatus.About && (
        <AboutComponent callback={callbackFunction} />
      )}
      {status == NavbarStatus.Project && (
        <PortfolioComponent callback={callbackFunction} />
      )}
      {status == NavbarStatus.Contact && (
        <ContactComponent callback={callbackFunction} />
      )}
    </div>
  );
}
