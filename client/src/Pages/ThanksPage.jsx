import React from "react";
// import { useLottie } from "lottie-react";
// import Animation4 from "../files/Animation4.json";
import Navbar from "../Components/Navbar";


const ThankYouPage = () => {
//   const options = {
//     animationData: Animation4,
//     style: {
//       margin: "auto",
//       width: "300px",
//     },
//   };
//   const { View } = useLottie(options);
  return (
    <div className="h-screen bg-base-100 mx-auto grid place-items-center text-center px-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar/>
      <div class="bg-transparent h-screen">
        <div class="bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-6  md:mx-auto">
          <section className="  p-10 flex flex-wrap items-center justify-evenly">
            <div className="mt-2 mt-lg-auto">
              <h1
                href="#"
                className="custom-link mb-2 text-6xl font-extrabold text-green-400  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi "
              >
                Enrolled Successfully!
                <i className="bi-arrow-right ms-2"></i>
              </h1>
              {/* <Lottie style={style} animationData={Animation1} />
               */}
              {/* {View} */}
            </div>
          </section>{" "}
          
          <div class="text-center">
            <p class="text-gray-600 my-2">
              We are wishing you for a great journey
            </p>

            <p> Project Id #13432 </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
            <button className="btn btn-info bg-cyan-300 p-3 text-black rounded-full">View in Enrolled Projects</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
