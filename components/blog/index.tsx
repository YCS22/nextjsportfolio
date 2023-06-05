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

export const BlogComponent: React.FC<Props> = ({ callback, status }) => {
  const [blogList, setBlogList] = useState<any>();

  const ref: any = useRef(null);

  var shortMonthName = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format;
  const mediumUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yigitcansezek";

  const scroll = () => {
    ref.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    ref.current.scrollLeft -= 500;
  };

  useEffect(() => {
    axios
      .get(mediumUrl)
      .then((e) => {
        setBlogList(e?.data?.items);
        console.log("e", e);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

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
            let date = new Date(item.pubDate);
            const publishDate =
              shortMonthName(date) +
              " " +
              date.getDate() +
              "," +
              " " +
              date.getFullYear();
            return (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                key={item.title}
                style={{ height: 450, cursor: "pointer" }}
                className='flex space-y-4 justify-between text-center  flex-col m-5 rounded-md p-5 border-2 border-gray-600 bg-black bg-opacity-80 text-sm '
              >
                {" "}
                <Fade>
                  {" "}
                  <label
                    className='h-5 self-end font-bold text-gray-300'
                    style={{ cursor: "pointer" }}
                  >
                    {publishDate}
                  </label>
                  <div
                    className='flex space-y-4 flex-col'
                    style={{ height: 50 }}
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className='pb-2 border-b-2 max-w-md'
                    >
                      {item.title}
                    </label>
                  </div>
                  <img
                    style={{ cursor: "pointer" }}
                    className='self-center rounded-md md:max-w-xs '
                    src={item.thumbnail}
                    alt='icon'
                  />
                  <p
                    style={{ cursor: "pointer" }}
                    className=' text-md max-w-md '
                  >
                    {ShortenText(ToText(item.content), 0, 120) + "..."}
                  </p>{" "}
                  <label
                    className=' text-md font-bold text-blue-500'
                    style={{ cursor: "pointer" }}
                  >
                    See More
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
