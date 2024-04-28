import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaJ } from "react-icons/fa6";
import { request } from "../requestMethods";

//todo: check if all fields are filled
const Signup = ({ setCurrentUser }) => {
  const [userData, setUserData] = useState({});
  const [isUser, setIsUser] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request.post(
        `/${isUser ? "user" : "company"}/signup`,
        userData
      );
      setCurrentUser(res?.data?.data?.user);
      console.log(res);
    } catch (error) {
      console.log("err");
    }
  };

  return (
    <section className=" bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="">
        <div className=""></div>
      </div>
      <section className="bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end  lg:col-span-5 border-r-2 border-dotted lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="absolute inset-0 h-full w-full object-cover opacity0"
            />

            <div class="hidden lg:relative lg:block lg:p-12">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <FaJ />
                <FaJ />
              </a>

              <h2 class="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Welcome to Job Junction
              </h2>
            </div>
          </section>

          <main className="flex items-center justify-center px-5 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <FaJ />
                  <FaJ />
                </a>

                <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                  Welcome to Job Junction
                </h2>
              </div>
              <section className=" -mt-0 p-10 flex flex-wrap items-center justify-evenly">
                <div className="mt-2 mt-lg-auto">
                  <h1 className="custom-link mb-2 text-6xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi">
                    Sign up
                    <i className="bi-arrow-right ms-2"></i>
                  </h1>
                </div>
              </section>
              <section className=" flex flex-wrap items-center justify-evenly">
                <button
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                >
                  <svg
                    className="w-5 h-5 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  Sign up with Apple
                </button>
              </section>
              <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">OR</span>
                <span className="h-px flex-1 bg-black"></span>
              </span>

              <form className="mt-8 grid grid-cols-6 gap-6 ">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="mt-1 w-full rounded-md border-gray-300  bg-gray-50 text-sm text-gray-700 shadow-sm   "
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="phone"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Mobile
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm "
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm  "
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm  "
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Password Confirmation
                  </label>

                  <input
                    id="PasswordConfirmation"
                    type="password"
                    name="passwordConfirm"
                    className="mt-1 w-full rounded-md border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm "
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500 ">
                    By creating an account, you agree to our &nbsp;
                    <a href="#" className="text-gray-700 underline ">
                      terms and conditions
                    </a>
                    &nbsp; and &nbsp;
                    <a href="#" className="text-gray-700 underline ">
                      {" "}
                      privacy policy{" "}
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      className="btn btn-info bg-cyan-300 p-3 text-black rounded-full"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Create account
                    </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                    Already have an account? &nbsp;
                    <Link to="../login" className="text-gray-700 underline">
                      Sign in
                    </Link>
                    .
                  </p>
                  </div>
                  </div>
              </form>
              <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                {isUser ? (
                  <span
                    className="text-gray-700 underline cursor-pointer"
                    onClick={() => setIsUser((p) => !p)}
                  >
                    I am Hiring
                  </span>
                ) : (
                  <span
                    className="text-gray-700 underline cursor-pointer"
                    onClick={() => setIsUser((p) => !p)}
                  >
                    I want to get Hired
                  </span>
                )}
                .
              </p>
            </div>
          </main>
        </div>
      </section>
    </section>
  );
};

export default Signup;
