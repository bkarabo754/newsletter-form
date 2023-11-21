import React, { useState } from "react";
import iconList from "../assets/iconList.png";
import SignUpDesktop from "../assets/SignUpDesktop.png";
import SignUpMobile from "../assets/SignUpMobile.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Add email validation logic if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform email validation, you can use a library like validator or a regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);

    if (isValid) {
      // Perform form submission logic (e.g., send data to server)
      // For now, just set the form submission state to true
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <div className="w-[999px] md:w-[980px] h-[700px] mt-36 bg-white shadow-lg rounded-3xl">
        <div className="flex flex-col ml-80 md:ml-20 mt-20 break-words">
          <h1 className="font-bold text-4xl md:text-6xl mt-10 md:mt-0 ml-8 md:ml-0">
            Stay updated!
          </h1>

          <p className="mt-10 ml-9 md:ml-0 break-words text-base tracking-normal">
            Join 60,000+ product managers receiving
            <br /> monthly updates on:
          </p>
          <div className="flex">
            <img
              src={iconList}
              alt="Icon List"
              className="w-5 mt-3 ml-8 md:ml-0 object-contain"
            />
            <p className="ml-5 mt-8 whitespace-pre-wrap">
              Product discovery and building what
              <br />
              matters.
            </p>
          </div>
          <div className="flex">
            <img
              src={SignUpMobile}
              alt="mobile"
              className="block lg:hidden mt-[-690px]  md:mt-[640px] object-contain rounded-xl w-[330px] sm:w-[330px] ml-3 md:ml-2 "
            />
          </div>
          <div className="flex">
            <img
              src={iconList}
              alt="Icon List"
              className="w-5 mt-4 md:mt-[-14px] ml-8 md:ml-0 object-contain"
            />
            <p className="ml-5 mt-4 md:mt-3">
              Measuring to ensure updates are a<br /> success
            </p>
          </div>
          <div className="flex">
            <img
              src={iconList}
              alt="Icon List"
              className="w-5 mt-8 md:mt-4 ml-8 md:ml-0 object-contain"
            />
            <p className="ml-5 mt-8 md:mt-4">And Much More!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-0 md:mt-10 md:ml-2 ml-9"
          >
            <p className="font-bold mt-10 md:mt-0">Email address</p>
            <input
              type="text"
              placeholder="email@company.com"
              className={`py-3 px-6 md:px-6 border w-[280px] md:w-96 rounded-md mt-2 ${
                !isValidEmail ? "border-red-500" : ""
              }`}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <p className="text-red-500 md:ml-0">
                Please enter a valid email address
              </p>
            )}
            <button className="py-4 md:py-4 w-[280px] md:w-96 rounded-md mt-6 md:mt-3 text-center bg-cyan-950 text-white font-bold">
              Subscribe to monthly newsletter
            </button>
            <div className="flex">
              <img
                src={SignUpDesktop}
                alt="Sign up Desktop"
                className="ml-[470px] mt-[-550px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
