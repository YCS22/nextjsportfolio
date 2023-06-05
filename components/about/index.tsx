/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react";
import { Bounce, Fade, Flip, Hinge, JackInTheBox } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { NavbarStatus } from "../enums/navbar";

import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiGraphql, SiTsnode } from "react-icons/si";
type Props = {
  callback?: any;
  status?: any;
};

export const AboutComponent: React.FC<Props> = ({ callback, status }) => {
  const Tech = ({ icon }: any) => {
    return (
      <div
        className='flex border m-2 rounded-md border-gray-600 bg-gray-900 hover:shadow-lg hover:border-2 h-20 w-20 items-center justify-center '
        style={{ transition: "0.5s" }}
      >
        {icon}
      </div>
    );
  };

  return (
    <Fade>
      <div className='flex w-full flex-col space-y-5'>
        <div className='flex flex-col md:flex-row      w-full  items-center space-y-10 md:space-y-0  md:items-start    justify-center md:space-x-20 self-center bg-black bg-opacity-40 shadow-xl  pl-5 pr-5 pb-5 '>
          <div>
            <img
              style={{ height: 200, width: 200, borderRadius: 200 }}
              src='./img/yigit.png'
              alt='yigit'
            />
          </div>

          <div className=' flex flex-col items-center md:items-start text-md h-full space-y-5'>
            <div
              className='flex space-x-2 font-bold  '
              style={{ fontSize: 30 }}
            >
              <label>YİĞİTCAN</label>
              <label className='text-blue-500'>SEZEK</label>
            </div>
            <TypeAnimation
              sequence={[
                "Creative Developer",
                2000,
                "Creative Freelancer",
                2000,
              ]}
              speed={30}
              style={{ fontSize: "20px" }}
              wrapper='span'
              repeat={Infinity}
            />

            <label className='mt-10 text-md p-2  md:text-lg text-gray-400 max-w-xl'>
              My name is <span className='text-white'>Yigitcan Sezek.</span> I
              am a Full Stack developer. <br /> I've been doing web projects
              with
              <span className='text-white'> React.js, Next.js </span> for 3
              years. <span />
              You can view my CV to see my other competencies
              <br /> <br />I left a link for you
            </label>

            <a
              className='self-start text-center border-2 rounded-full p-2 hover:bg-blue-500    hover:border-blue-500  '
              style={{ width: 160, transition: "0.3s" }}
              download
              href='./img/yigitcansezekresume.pdf'
            >
              Download CV
            </a>
          </div>
        </div>
        <hr className='w-5/6 md:w-1/2 self-center' />

        <div className='flex flex-col space-y-4 items-center justify-center w-full self-center text-white'>
          <label className='text-3xl self-center text-center'>
            Technologies I frequently use
          </label>
          <div className='flex flex-wrap items-center justify-center  self-center   '>
            <Tech icon={<FaReact size='3em' />} />
            <Tech icon={<FaNodeJs size='3em' />} />
            <Tech icon={<SiPostgresql size='3em' />} />
            <Tech icon={<SiGraphql size='3em' />} />
            <Tech icon={<SiTsnode size='3em' />} />
            <Tech icon={<FaAws size='3em' />} />
          </div>
        </div>
      </div>
    </Fade>
  );
};
