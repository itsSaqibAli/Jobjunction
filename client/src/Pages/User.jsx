import React, { useEffect, useState } from "react";

function User() {
  return (
    <main className=" w-full min-h-screen py-1  text-sm bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]   border-dotted border-gray-300">
      <div className="p-2 md:p-4">
        <div class="flex flex-row min-h-screen justify-center items-center">
          <div className="w-full justify-center m-6 items-center  border-base-200 border-2 border-dotted px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h1
              href="#"
              className="custom-link mb-2 text-6xl pl-6 font-extrabold text-gray-900  md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi"
            >
              huihui's Profile
              <i className="bi-arrow-right ms-2"></i>
            </h1>
            <h1
              href="#"
              className="custom-link mb-2 text-xl pl-6 font-extrabold text-gray-900  md:text-xl lg:text-2xl  bg-clip-text  to-emerald-600 from-sky-400 font-hihi"
            >
              Project count- hihihuhu
              <i className="bi-arrow-right ms-2"></i>
            </h1>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="items-center  mt-8 sm:mt-14 text-[#202142]">
                <div className="leading-10">
                  {/* <div
            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
            <div className="w-full">
                <label for="first_name"
                       className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"></label>
                <input type="text" id="first_name"
                       className=" border  text-indigo-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 "
                       placeholder="Name- shashi" required/>
            </div>

        </div> */}
                  <p> Name - Shashi</p>

                  {/* <div className="mb-2 sm:mb-6">
            <label for="email"
                   className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                </label>
            <input type="email" id="email"
                   className="bg-gray-100 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                   placeholder="Email- shashi rathee62682@gmail.com" required/>
        </div> */}
                  <p> Email- shashi rathee62682@gmail.com</p>
                  {/* <div className="mb-2 sm:mb-6">
            <label for="profession"
                   className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                </label>
            <input type="tel" id="mobile"
                   className="bg-gray-100 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                   placeholder="Mobile no. - 8295372047" required/>
        </div> */}
                  <p> Mobile no. - 8295372047</p>

                  {/* <div className="flex justify-end">
            <button type="submit"
                    className="text-white bg-blue-500  hover:bg-indigo-800  focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 ">Save
            </button>
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 ">
          <div class="my-5 flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900">
              Current Projects
            </h2>
            <div class="flex"></div>
          </div>
          <div class="mb-6 sm:w-1/2 rounded-lg bg-white border-base-300 border-2 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/ea/30/5fea30db-2245-01bb-061c-549142de00f1/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
                  alt="profile"
                />
                <div>
                  <h3 class="text-base font-semibold text-gray-900">
                    udne ka project
                  </h3>
                  <span class="block text-xs font-normal text-gray-500">
                    Googlu
                  </span>
                </div>
              </div>
              <p class="text-sm font-medium text-black">
                <span class="mr-0.5">Status : </span>
                <strong className="text-blue-400">Working</strong>
              </p>
            </div>
            <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
            <button
                      className="btn btn-info p-3 bg-cyan-300 text-black rounded-full"
                     
                    >
                      View Details
                    </button>
                                  <div class="flex items-center">(750 Days left)</div>
            </div>
          </div>
        </div>
        <div class="px-4">
          <div class="my-5">
            <h2 class="text-lg font-semibold text-gray-900">
              Completed Projects
            </h2>
          </div>
          <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            <div class="mb-6 rounded-lg bg-white border-base-300 border-2 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/ea/30/5fea30db-2245-01bb-061c-549142de00f1/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
                  alt="profile"
                />
                <div>
                  <h3 class="text-base font-semibold text-gray-900">
                    udne ka project
                  </h3>
                  <span class="block text-xs font-normal text-gray-500">
                    Googlu
                  </span>
                </div>
              </div>
              <p class="text-sm font-medium text-black">
                <span class="mr-0.5">Status : </span>
                <strong className="text-blue-400">completed</strong>
              </p>
            </div>
            <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
            <button
                      className="btn btn-info p-3 bg-cyan-300 text-black rounded-full"
                     
                    >
                      View Details
                    </button>              <div class="flex items-center">(750 Days left)</div>
            </div>
              
              <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
                
                
              </div>
            </div>
            <div class="mb-6 rounded-lg bg-white border-base-300 border-2 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/ea/30/5fea30db-2245-01bb-061c-549142de00f1/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
                  alt="profile"
                />
                <div>
                  <h3 class="text-base font-semibold text-gray-900">
                    udne ka project
                  </h3>
                  <span class="block text-xs font-normal text-gray-500">
                    Googlu
                  </span>
                </div>
              </div>
              <p class="text-sm font-medium text-black">
                <span class="mr-0.5">Status : </span>
                <strong className="text-blue-400">completed</strong>
              </p>
            </div>
            <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
            <button
                      className="btn btn-info p-3 bg-cyan-300 text-black rounded-full"
                     
                    >
                      View Details
                    </button>              <div class="flex items-center">(750 Days left)</div>
            </div>
              
              <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
                
                
              </div>
            </div>
            <div class="mb-6 rounded-lg bg-white border-base-300 border-2 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/ea/30/5fea30db-2245-01bb-061c-549142de00f1/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
                  alt="profile"
                />
                <div>
                  <h3 class="text-base font-semibold text-gray-900">
                    udne ka project
                  </h3>
                  <span class="block text-xs font-normal text-gray-500">
                    Googlu
                  </span>
                </div>
              </div>
              <p class="text-sm font-medium text-black">
                <span class="mr-0.5">Status : </span>
                <strong className="text-blue-400">completed</strong>
              </p>
            </div>
            <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
            <button
                      className="btn btn-info p-3 bg-cyan-300 text-black rounded-full"
                     
                    >
                      View Details
                    </button>              <div class="flex items-center">(750 Days left)</div>
            </div>
              
              <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
                
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}

export default User;
