import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sujal from "../assets/sujal.jpg"; // Adjust the path as necessary

const About = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [themeColor, setThemeColor] = useState(0);

  // Toggle theme color
  const toggleTheme = () => {
    setThemeColor((prevColor) => (prevColor + 1) % 3);
  };

  // Determine background color class based on theme
  const getThemeClass = () => {
    if (themeColor === 0) return "bg-pink-300";
    if (themeColor === 1) return "bg-blue-300";
    return "bg-green-300";
  };

  // Handle CV click based on login state
  const handleCVClick = () => {
    navigate("/cv");
  };

  

  return (
    <div className={`min-h-screen flex ${getThemeClass()} relative`}>
      {/* Right: Profile image */}
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={sujal}
          alt="Profile"
          className=" w-md h-md object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Left: Text content */}
      <div className="flex-1 font-mono flex flex-col justify-center mt-9 items-start p-11">
        <p className="text-xl font-bold mb-6">Hi, I am</p>
        <h1 className="text-4xl font-extrabold mb-1 mt-1">Sujal Shah</h1>
        <p className="text-xl text-gray-700 mb-4">
          Front-end Developer/UI Designer
        </p>
        <p className="mb-6 text-md max-w-3xl">
          A passionate and detail-oriented front-end developer with a strong
          foundation in web technologies like HTML, CSS, JavaScript, and
          React.js.
        </p>
        <h1 className="mb-3 text-3xl font-bold">My Journey into Tech</h1>{" "}
        <p className="mb-6 text-justify  max-w-3xl">
          From a young age, I was always curious about how computers worked.
          What started as fascination quickly turned into passion as I explored
          basic coding and technology. Despite limited resources, I kept
          learning through online tutorials and hands-on practice. Choosing
          computer science felt natural, and through projects like a weather app
          and e-commerce clone, I turned my interest into real skills. Today,
          I’m continuously growing as a developer, driven by the same curiosity
          that sparked it all.{" "}
        </p>
        <button onClick={handleCVClick} class="Documents-btn">
          <span class="folderContainer">
            <svg
              class="fileBack"
              width="146"
              height="113"
              viewBox="0 0 146 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                fill="url(#paint0_linear_117_4)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_117_4"
                  x1="0"
                  y1="0"
                  x2="72.93"
                  y2="95.4804"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8F88C2"></stop>
                  <stop offset="1" stop-color="#5C52A2"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              class="filePage"
              width="88"
              height="99"
              viewBox="0 0 88 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="88"
                height="99"
                fill="url(#paint0_linear_117_6)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_117_6"
                  x1="0"
                  y1="0"
                  x2="81"
                  y2="160.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="#686868"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              class="fileFront"
              width="160"
              height="79"
              viewBox="0 0 160 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                fill="url(#paint0_linear_117_5)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_117_5"
                  x1="38.7619"
                  y1="8.71323"
                  x2="66.9106"
                  y2="82.8317"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C3BBFF"></stop>
                  <stop offset="1" stop-color="#51469A"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p class="text">Resume..</p>
        </button>
        <p className="text-lg mt-3 text-gray-700 mb-6">Connect with me on:</p>
        <div className="flex items-center gap-4">
          <div className="social-button">
            <a href="https://instagram.com/shah_sujal03" target="_blank" rel="noopener noreferrer">
            <button className="relative w-12 h-12 rounded-full group hover:cursor-pointer">
              <div className="floater w-full h-full absolute top-0 left-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#171543] fill-white duration-300"
                    d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                  ></path>
                  <path
                    className="group-hover:fill-[#171543] fill-white duration-300"
                    d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                  ></path>
                </svg>
              </div>
            </button>
            </a>
          </div>
          <div className="social-button">
            <a href="https://github.com/sujalshah593" target="_blank" rel="noopener noreferrer">
            <button className="relative w-12 h-12 rounded-full group hover:cursor-pointer">
              <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#171543] fill-white duration-300"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
            </button>
            </a>
          </div>
          <div className="social-button">
            <a href="https://linkedin.com/in/sujal-shah-399334306" target="_blank" rel="noopener noreferrer">
            <button className="relative w-12 h-12 rounded-full group hover:cursor-pointer">
              <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#171543] fill-white duration-300"
                    d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
            </button>
            </a>
          </div>
          <div className="social-button">
            <a href="mailto:sujalshah593@gmail.com">
            <button className="relative w-12 h-12 rounded-full group hover:cursor-pointer ">
              <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#171543] fill-white duration-300"
                    d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Top-right buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button onClick={toggleTheme} className="bg-fuchsia-800 hover:bg-fuchsia-900 font-bold hover:cursor-pointer text-white px-4 py-2 rounded-2xl">
          Click Me
        </button>

        {isLoggedIn ? (
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-red-500 hover:bg-red-600 font-bold hover:cursor-pointer text-white px-4 py-2 rounded-2xl"
          >
            Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer font-bold text-white px-4 py-2 rounded-2xl"
          >
            Dashboard
          </button>
        )}

        {isLoggedIn ? (
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
            onClick={() => alert("Account settings")}
          />
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 font-bold hover:cursor-pointer text-white px-4 py-2 rounded-2xl"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
