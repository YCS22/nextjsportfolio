/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { Bounce, Fade, Flip, Hinge, JackInTheBox } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import ShortenText from "../../utils/ShortenText";
import ToText from "../../utils/ToText";
import { NavbarStatus } from "../enums/navbar";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
type Props = {
  callback?: any;
  status?: any;
};

export const PortfolioComponent: React.FC<Props> = ({ callback, status }) => {
  const [blogList, setBlogList] = useState<any>([
    {
      id: 1,
      title: "Matehand ",
      link: "https://matehand.com",
      content:
        "MateHand is a social media platform. I worked full-stack in this project.",
      thumbnail: "/img/mateh.jpg",
      footer: "Site Link",
    },

    {
      id: 5,
      title: "Ycs Fitness ",
      link: "https://github.com/YCS22/ycsfitness",
      content:
        "I worked as a frontend developer in this project. It's React Native project.",
      thumbnail: "/img/react-native.png",
      footer: "GitHub Link",
    },
  ]);

  const ref: any = useRef(null);

  const scroll = () => {
    ref.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    ref.current.scrollLeft -= 500;
  };

  return (
    <div
      style={{ zIndex: 1, transition: "0.5s" }}
      className='flex flex-col  w-full   '
    >
      <div
        ref={ref}
        className='flex flex-col  md:flex-row overflow-y-scroll w-full  overflow-x-scroll   bg-black bg-opacity-40 shadow-xl      '
      >
        {blogList &&
          blogList?.length > 0 &&
          blogList.map((item: any) => {
            return (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                key={item.title}
                style={{ height: 450, cursor: "pointer" }}
                className='flex space-y-4 justify-around text-center  flex-col m-5 rounded-md p-5 border-2 border-gray-600 bg-black bg-opacity-80 text-sm '
              >
                {" "}
                <Fade>
                  {" "}
                  <div
                    className='flex space-y-4 flex-col'
                    style={{ height: 50 }}
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className='text-2xl  pb-2 border-b-2 max-w-md'
                    >
                      {item?.title}
                    </label>
                  </div>
                  <img
                    style={{ cursor: "pointer" }}
                    className='self-center rounded-md md:max-w-xs  '
                    src={item.thumbnail}
                    alt='icon'
                  />
                  <p
                    style={{ cursor: "pointer" }}
                    className=' text-lg max-w-xs '
                  >
                    {item.content}
                  </p>{" "}
                  <label
                    className=' text-md font-bold text-blue-500'
                    style={{ cursor: "pointer" }}
                  >
                    {item.footer}
                  </label>
                </Fade>
              </a>
            );
          })}{" "}
      </div>{" "}
      <div className='hidden md:flex text-gray-200 space-x-5 w-full items-center justify-center'>
        <button onClick={scrollLeft}>
          <BsFillArrowLeftSquareFill size='2em' />
        </button>
        <button onClick={scroll}>
          <BsFillArrowRightSquareFill size='2em' />
        </button>
      </div>
    </div>
  );
};
