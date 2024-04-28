import React from "react";
// import { useLottie } from "lottie-react";
// import Animation4 from "../files/Animation4.json";

const Notification = () => {
//   const options = {
//     animationData: Animation4,
//     style: {
//       margin: "auto",
//       width: "300px",
//     },
//   };
//   const { View } = useLottie(options);
  return (
    <div className="h-screen bg-base-100  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
     <div class="h-screen grid place-items-center my-8">
        <div class="lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-10 shadow-sm">
          <div class="inline-flex items-center justify-between w-full">
            <h3 class="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">
              Notifications
            </h3>
          </div>
          <p class="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">
            New
          </p>

          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                  alt="Form Icon"
                  class="w-10 h-10 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">
                  Udne ki website
                </h3>
              </div>
              <p class="text-xs text-gray-500">12:47</p>
            </div>
            <div className="">
              <p class="mt-1 text-sm">You are invited by sujigya</p>
              <button className="btn btn-info mx-6 my-2 p-3 bg-cyan-300 text-black rounded-full">
                Accept
              </button>
              <button className="btn btn-info p-3 bg-red-400 text-black rounded-full">
                Reject
              </button>
            </div>
          </div>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                  alt="Form Icon"
                  class="w-10 h-10 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">
                  Udne ki website
                </h3>
              </div>
              <p class="text-xs text-gray-500">12:47</p>
            </div>
            <div className="">
              <p class="mt-1 text-sm">You are invited by sujigya</p>
              <button className="btn btn-info mx-6 my-2 p-3 bg-cyan-300 text-black rounded-full">
                Accept
              </button>
              <button className="btn btn-info p-3 bg-red-400 text-black rounded-full">
                Reject
              </button>
            </div>
          </div>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                  alt="Form Icon"
                  class="w-10 h-10 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">
                  Udne ki website
                </h3>
              </div>
              <p class="text-xs text-gray-500">12:47</p>
            </div>
            <div className="">
              <p class="mt-1 text-sm">You are invited by sujigya</p>
              <button className="btn btn-info mx-6 my-2 p-3 bg-cyan-300 text-black rounded-full">
                Accept
              </button>
              <button className="btn btn-info p-3 bg-red-400 text-black rounded-full">
                Reject
              </button>
            </div>
          </div>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                  alt="Form Icon"
                  class="w-10 h-10 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">
                  Udne ki website
                </h3>
              </div>
              <p class="text-xs text-gray-500">12:47</p>
            </div>
            <div className="">
              <p class="mt-1 text-sm">You are invited by sujigya</p>
              <button className="btn btn-info mx-6 my-2 p-3 bg-cyan-300 text-black rounded-full">
                Accept
              </button>
              <button className="btn btn-info p-3 bg-red-400 text-black rounded-full">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;