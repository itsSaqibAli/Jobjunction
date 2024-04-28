import React from "react";
// import {Link, useRouteError} from "react-router-dom";
// import {Typography} from "@material-tailwind/react";
// import {FlagIcon} from "@heroicons/react/24/solid";

const ErrorPage = () => {
    // const error = useRouteError();

    return (<div
        className="h-screen bg-white mx-auto grid place-items-center text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div>
            {/* <FlagIcon className="w-20 h-20 mx-auto bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"/> */}
            {/* <Typography
                variant="h1"
                color="blue-gray"
                className="mt-10 !text-3xl !leading-snug md:!text-4xl"
            >
                <section className="  -p-4 flex flex-wrap items-center justify-evenly"> */}
                    {/* <div className="mt-2 mt-lg-auto">
                        <h1
                            href="#"
                            className="custom-link mb-2 text-6xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-hihi"
                        >
                            {error && (error.statusText || error.message) || "Opps!"}
                            <i className="bi-arrow-right ms-2"></i>
                        </h1>
                    </div> */}
                {/* </section>
                <br/> It looks like something went wrong.
            </Typography> */}
            {/* <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                Don&apos;t worry, duck team is already on it.Please try refreshing
                the page or come back later.
            </Typography> */}
            {/* <Link to="/"
                  class="group relative inline-block text-sm font-medium text-slate-500 focus:outline-none   active:text-slate">
                <span
                    class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="relative block border border-current bg-base-200 px-8 py-3">
                    Back to Home
                  </span>
            </Link> */}
            hi
        </div>
    </div>);
};

export default ErrorPage;
