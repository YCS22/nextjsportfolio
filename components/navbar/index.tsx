import { useRef, useEffect, useState } from "react";
import { NavbarStatus } from "../enums/navbar";
import { NavbarItem } from "./item";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

type Props = {
  callback?: any;
  status?: any;
};

export const Navbar: React.FC<Props> = ({ callback, status }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CallbackFunction = (status: any) => {
    callback(status);
    setIsOpen(false);
  };

  return (
    <div
      className='flex  top-0    w-full  p-5 items-center justify-start'
      style={{ zIndex: 2 }}
    >
      {isOpen && (
        <div className='flex flex-col  h-full opacity-90 w-full space-y-10 items-center top-0 left-0 pt-5 pb-10 absolute z-20 bg-black '>
          <div
            className='flex  w-full  justify-center'
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <IoMdClose style={{ cursor: "pointer" }} size={"1.8em"} />
          </div>

          <NavbarItem
            name='Home'
            status={NavbarStatus.Home}
            callback={CallbackFunction}
            currentStatus={status}
          />

          <NavbarItem
            name='About'
            status={NavbarStatus.About}
            callback={CallbackFunction}
            currentStatus={status}
          />
          <NavbarItem
            name='Blog'
            status={NavbarStatus.Skills}
            callback={CallbackFunction}
            currentStatus={status}
          />

          <NavbarItem
            name='Portfolio'
            status={NavbarStatus.Project}
            callback={CallbackFunction}
            currentStatus={status}
          />
          <NavbarItem
            name='Contact'
            status={NavbarStatus.Contact}
            callback={CallbackFunction}
            currentStatus={status}
          />
        </div>
      )}
      <div
        className='flex sm:hidden  w-full'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <CgMenu style={{ cursor: "pointer" }} size={"2em"} />
      </div>
      <div className='sm:flex hidden w-full lg:w-1/2 justify-around p-5 items-center'>
        <NavbarItem
          name='Home'
          status={NavbarStatus.Home}
          callback={CallbackFunction}
          currentStatus={status}
        />

        <NavbarItem
          name='About'
          status={NavbarStatus.About}
          callback={CallbackFunction}
          currentStatus={status}
        />
        <NavbarItem
          name='Blog'
          status={NavbarStatus.Skills}
          callback={CallbackFunction}
          currentStatus={status}
        />

        <NavbarItem
          name='Portfolio'
          status={NavbarStatus.Project}
          callback={CallbackFunction}
          currentStatus={status}
        />
        <NavbarItem
          name='Contact'
          status={NavbarStatus.Contact}
          callback={CallbackFunction}
          currentStatus={status}
        />
      </div>
    </div>
  );
};
