/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiPlasticDuck } from "react-icons/gi";
import { FaJ } from "react-icons/fa6";
import { request } from "../requestMethods";

//todo: if already logged in, go to home page
const Login = ({ setCurrentUser }) => {
  const [userData, setUserData] = useState({});
  const [isUser, setIsUser] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request.post(
        `/${isUser ? "user" : "company"}/login`,
        userData
      );
      setCurrentUser(res?.data?.data?.user);
      console.log(res);
    } catch (error) {
      console.log("err");
    }
  };

  return (
    <section className="sign-in-form section-padding ">
      <section class="bg-white ">
        <section class="bg-white ">
          <div class="lg:grid lg:min-h-screen bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] lg:grid-cols-12">
            <section class="relative flex h-32 items-end  lg:col-span-5 border-r-2 border-dotted lg:h-full xl:col-span-6">
              <img
                alt=""
                src="https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="absolute inset-0 h-full w-full object-cover opacity0"
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

            <main class="flex items-center justify-center px-5 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div class="max-w-xl lg:max-w-3xl">
                <div class="relative -mt-16 block lg:hidden">
                  <a
                    className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                    href="#"
                  >
                    <span className="sr-only">Home</span>
                    <FaJ />
                    <FaJ />
                  </a>
                  <ion-icon name="trending-up-outline"></ion-icon>
                  <h2 class="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                    Welcome back
                  </h2>
                </div>
                <section className="  p-10 flex flex-wrap items-center justify-evenly">
                  <div className="mt-2 mt-lg-auto">
                    <h1
                      href="#"
                      className="custom-link mb-2 text-6xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi"
                    >
                      Sign in
                      <i className="bi-arrow-right ms-2"></i>
                    </h1>
                  </div>
                </section>
                <section className=" flex flex-wrap items-center justify-evenly">
                  <button
                    type="button"
                    class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <svg
                      class="w-5 h-5 me-2 -ms-1"
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
                    Sign in with Apple
                  </button>
                </section>
                <span class="flex items-center">
                  <span class="h-px flex-1 bg-black"></span>
                  <span class="shrink-0 px-6">OR</span>
                  <span class="h-px flex-1 bg-black"></span>
                </span>

                <form class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                  <div>
                    <label for="email" class="sr-only">
                      Email
                    </label>

                    <div class="relative">
                      <input
                        type="text"
                        class="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter email/ phone number"
                        name="loginField"
                        onChange={(e) =>
                          setUserData((p) => ({
                            ...p,
                            [e.target.name]: e.target.value,
                          }))
                        }
                      />

                      <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        ></svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label for="password" class="sr-only">
                      Password
                    </label>

                    <div class="relative">
                      <input
                        type="password"
                        class="w-full rounded-lg border-1 bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                        name="password"
                        onChange={(e) =>
                          setUserData((p) => ({
                            ...p,
                            [e.target.name]: e.target.value,
                          }))
                        }
                      />

                      <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        ></svg>
                      </span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-500">
                      Don’t have an account ? &nbsp;
                      <Link to="../signup">Sign up</Link>
                    </p>

                    <button
                      className="btn btn-info p-3 bg-cyan-300 text-black rounded-full"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Sign In
                    </button>
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
    </section>
  );
};

export default Login;
