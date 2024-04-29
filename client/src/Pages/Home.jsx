import React from "react";
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <main>
      <Navbar/>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-45 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white  custom-link mb-2 text-6xl font-extrabold   md:text-5xl lg:text-6xl   text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-hihi">
                  PLACEMENT !! <br></br> <strong className="text-4xl">In Tier 3 college</strong>
                </h1>
                
                <Link to="/domains" className="btn btn-info p-3 bg-cyan-300 text-black rounded-full">Start Projeccts</Link>
                
              </div>
            </div>

          </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Skill Development</h6>
                <p className="mt-2 mb-4 text-gray-600">
                Projects allows students to gain practical experience and develop valuable skills that are highly sought after by employers.               </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">
                Exposure to Industry Practices
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                By participating in these projects, students gain exposure to these practices, making them better prepared for the expectations of the professional world.             </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">
                Networking Opportunities
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                Building relationships with individuals in the industry can lead to mentorship opportunities, job referrals, and insights into job openings.                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Learning Collaboration and Communication Skills:
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            In this development often involves collaboration with diverse teams and individuals with varying backgrounds and skill sets. 
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Students learn to effectively communicate ideas, resolve conflicts, and work cohesively within distributed teams, essential skills in today's globalized workforce.

            </p>
            
          </div>

          <div className="w-[95%] md:w-[35%] mt-3 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded-lg ">
              <img
                alt="..."
                src= "https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px"
                  }}
                >
                  
                </svg>
                <h4 className="text-xl text-center font-bold text-black">
                  "Be Skillfull"
                </h4>
                
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/4778664/pexels-photo-4778664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">
                Your placement is 4 steps away
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Select your fav Domain
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Select your comfortable project</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Try t0 compelete it with team</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Get placement after a good portfolio</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    

    
    
  </main>
  );
};

export default Home;
