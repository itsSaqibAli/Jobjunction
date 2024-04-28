import React from "react";
import { Link } from "react-router-dom";

const Domains = () => {
  return (
    <section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h3 className="mb-2  text-center mt-2 mt-lg-auto text-4xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi">
            See Your Interest
          </h3>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
            <li>
              <a href="#" className="group relative  block">
                <img
                  src="https://images.pexels.com/photos/163065/mobile-phone-android-apps-phone-163065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 ">
                  <h3 className="text-3xl font-medium text-white font-hihi">
                    Android dev
                  </h3>

                  <a
                    className="group relative inline-block text-sm font-medium text-slate-500 focus:outline-none   active:text-slate"
                    href="#"
                  >
                    <button className="btn hover:bg-yellow-200 border-none hover:scale-[105%] bg-white text-black rounded-full">
                      View Projects
                    </button>
                  </a>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="group relative block">
                <img
                  src="https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-3xl font-medium text-white font-hihi">
                    Ios dev
                  </h3>

                  <button className="btn hover:bg-yellow-200 border-none hover:scale-[105%] bg-white text-black rounded-full">
                    View Projects
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="group relative block">
                <img
                  src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-3xl font-medium text-white font-hihi">
                    Web dev
                  </h3>

                  <button className="btn hover:bg-yellow-200 border-none hover:scale-[105%] bg-white text-black rounded-full">
                    View Projects
                  </button>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group relative block">
                <img
                  src="https://images.pexels.com/photos/7650781/pexels-photo-7650781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-3xl font-medium text-white font-hihi">
                    Other
                  </h3>

                  <button className="btn hover:bg-yellow-200 border-none hover:scale-[105%] bg-white text-black rounded-full">
                    Coming soon
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-24 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world’s best recruitors
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/uber-icon.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apple-icon.png"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/microsoft-icon.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Domains;
