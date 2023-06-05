/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react";
import { Bounce, Fade, Flip, Hinge, JackInTheBox } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { NavbarStatus } from "../enums/navbar";
import emailjs from "@emailjs/browser";
type Props = {
  callback?: any;
  status?: any;
};

export const ContactComponent: React.FC<Props> = ({ callback, status }) => {
  const [name, setName] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [bodyError, setBodyError] = useState<boolean>(false);

  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  function isValidEmail(email: any) {
    console.log("eemail", email);
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    setTimeout(() => setSucces(false), 3000);
  }, [succes]);

  const sendMail = () => {
    if (
      !error &&
      !nameError &&
      !bodyError &&
      name.length != 0 &&
      body.length != 0 &&
      email.length != 0
    ) {
      setLoading(true);
      emailjs
        .send(
          "service_r371ued",
          "template_mv399n7",
          {
            body,
            email,
            name,
          },
          "GDLIwy6rARRcj_2X5"
        )
        .then(
          (result) => {
            setLoading(false);
            console.log(result.text);
            setBody("");
            setEmail("");
            setName("");
            setSucces(true);
          },
          (error) => {
            setLoading(false);

            console.log(error.text);
          }
        );
    }
  };

  const handleChange = () => {
    if (!isValidEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className='flex   w-full h-full  items-start justify-start   self-center bg-black bg-opacity-90 shadow-xl     '>
      <Fade>
        <div className='flex flex-col  p-5  bg-opacity-50 sm:p-0 sm:ml-20 space-y-5 max-w-lg  rounded-lg  text-black'>
          <label className='text-3xl md:text-5xl font-bold text-white'>
            Lets Talk
          </label>

          <div className='flex text-lg sm:text-xl text-white max-w-md'>
            <label>
              Get in touch via the form below, or by emailing{" "}
              <a
                className='ml-2 text-blue-600'
                href={`mailto:yigitcansezek@gmail.com`}
              >
                yigitcansezek@gmail.com
              </a>
            </label>
          </div>

          <div className='flex flex-col text-white'>
            <label>Name:</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.length == 0) {
                  setNameError(true);
                } else {
                  setNameError(false);
                }
              }}
              value={name}
              name='text'
              maxLength={20}
              className=' bg-zinc-900  p-2 rounded-md'
              placeholder='Enter Your Name'
            />

            {nameError && (
              <label className='text-sm font-bold text-red-600'>
                Required !
              </label>
            )}
          </div>

          <div className='flex flex-col text-white'>
            <label>Email Address:</label>
            <input
              type='text'
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange();
              }}
              autoComplete='off'
              maxLength={35}
              name='text'
              value={email}
              className=' bg-zinc-900  p-2 rounded-md'
              placeholder='Enter your email address'
            />

            {error && (
              <label className='text-sm font-bold text-red-600'>
                E-mail is invalid !
              </label>
            )}
          </div>

          <div className='flex flex-col text-white'>
            <label>Message:</label>
            <textarea
              onChange={(e) => {
                setBody(e.target.value);
                if (e.target.value.length == 0) {
                  setBodyError(true);
                } else {
                  setBodyError(false);
                }
              }}
              maxLength={200}
              name='body'
              value={body}
              style={{ maxHeight: 100, minHeight: 50, maxWidth: 600 }}
              className=' bg-zinc-900  p-2 rounded-md'
              placeholder='Enter your message'
            />

            {bodyError && (
              <label className='text-sm font-bold text-red-600'>
                Required !
              </label>
            )}
          </div>

          {succes && (
            <label className='text-sm text-white'>
              Your email has been sent
            </label>
          )}

          {!loading ? (
            <button
              type='submit'
              className=' w-20 p-3 rounded-md bg-zinc-900 text-blue-600 font-bold text-md hover:text-black hover:bg-white'
              style={{ transition: "0.3s", cursor: "pointer" }}
              onClick={sendMail}
            >
              Submit
            </button>
          ) : (
            <label className='text-white text-md font-bold'>Loading ...</label>
          )}
        </div>
      </Fade>
    </div>
  );
};
