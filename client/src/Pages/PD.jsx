import React, { useState } from "react";
import Navbar from "../Components/Navbar";


const Product3 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div>
           <Navbar/>

        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 ">
                <img className="w-full" alt="img of a girl posing" src="https://images.pexels.com/photos/5417844/pexels-photo-5417844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">Google</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        Google intership program
                    </h1>
                </div>
               
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Teams already enrolled</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">91</p>
                        
                    </div>
                </div>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">Ham react use krke ud skte hai coz react hai bhyiii.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600">Deadline: 1 June</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Publised-Date: 12-March </p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Max-Team: 12 </p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Teck stack: react,mongdb,lottie files</p>
                    <p> ‎</p>
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                   
                    Enroll Now
                </button>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Project Description</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                           Design wings using React and tailwind
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Company norms regarding this project</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            If you are dong this project then you have to eat 10 bananas daily.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Product3;
