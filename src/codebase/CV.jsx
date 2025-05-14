import React from "react";
import "./font.css";
import { useState } from "react";
import sujal from "../assets/sujal.jpg";
import { useNavigate } from "react-router-dom";

const PortfolioCV = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleClose = () => {
    setIsImageOpen(false);
  };

  const navigate = useNavigate();

  const handleCVClick = () => {
    navigate("/");
  };

  return (
    <div
      className="w-screen h-screen flex flex-col md:flex-row bg-gray-100"
      role="region"
      aria-label="Curriculum Vitae"
    >
      {/* Left Side - Personal Info */}
      <aside className="md:w-1/3 bg-blue-800 text-white flex flex-col items-center px-8 py-9 space-y-4 overflow-auto">
        <img
          src={sujal}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg cursor-zoom-in"
          onClick={handleImageClick}
        />
        {isImageOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 flex justify-center items-center"
            onClick={handleClose} // Close modal when clicking outside
            role="dialog"
            aria-labelledby="image-modal"
          >
            <div className="bg-white  p-5 rounded-md">
              <img
                src={sujal}
                alt="Profile"
                className="w-80 h-80 rounded-full object-cover"
              />
              <button
                onClick={handleClose}
                className="mt-4 text-red-600 font-bold px-4 py-2 rounded-md hover:bg-red-100"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-1">Sujal Shah</h1>
          <p className="text-blue-300 font-semibold text-lg">
            Full Stack Developer
          </p>
        </div>

        <div className="text-left w-full max-w-xs space-y-3 text-sm">
          <h2 className="uppercase tracking-wide text-blue-300 font-semibold mb-2">
            Contact
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> sujalshah593@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9825647679
            </li>
            <li>
              <strong>Date of Birth:</strong> 17<sup>th</sup>June 2006
            </li>
            <li>
              <strong>Age:</strong> 18
            </li>
            <li>
              <strong>Nationality:</strong> Indian
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="up">
            <a
              href="https://instagram.com/shah_sujal03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card1">
                <svg
                  className="instagram"
                  fillRule="nonzero"
                  height="30px"
                  width="30px"
                  viewBox="0,0,256,256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                  >
                    <g transform="scale(8,8)">
                      <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                    </g>
                  </g>
                </svg>
              </button>
            </a>
            <a
              href="https://linkedin.com/in/sujal-shah-399334306"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  className="facebook"
                >
                  <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z" />
                </svg>
              </button>
            </a>
          </div>

          <div className="down">
            <a
              href="https://wa.me/8141150626"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="whatsapp"
                >
                  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z" />
                </svg>
              </button>
            </a>
            <a href="mailto:sujalshah593@gmail.com">
              <button className="card4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  className="gmail"
                >
                  <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </aside>

      {/* Right Side - Content */}

      <main className="md:w-2/3 bg-white p-10 overflow-auto">
        <button
          onClick={handleCVClick}
          className="absolute top-4 right-4 bg-red-500 text-white hover:bg-red-700 hover:cursor-pointer  font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        >
          ← Back
        </button>
        {/* Profile Summary */}
        <section aria-labelledby="profile-summary" className="mb-10">
          <h2
            id="profile-summary"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Profile Summary
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            I'm a passionate Frontend Developer skilled in React.js, Tailwind
            CSS, and modern web technologies. I enjoy building responsive,
            user-friendly web applications and continuously learning new tools
            and frameworks. With a focus on clean code and great UX, I aim to
            create meaningful digital experiences.
            <p>
              <mark>
                Built and deployed multiple real-world projects including a
                weather app, recipe finder, and a fashion store clone.
              </mark>
            </p>
            <p>
              <mark className="bg-teal-500">
                Always exploring new tech stacks and eager to contribute to
                innovative web solutions.
              </mark>
            </p>
          </p>
        </section>

        {/* Projects */}
        <section aria-labelledby="projects" className="mb-10">
          <h2
            id="projects"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Projects
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg max-w-4xl">
            <li>
              <strong> Weather App</strong> — React.js app showing real-time
              weather using OpenWeatherMap API.
            </li>
            <li>
              <strong>Recipe Finder</strong> — Search recipes by ingredient
              using Edamam API with a clean UI.
            </li>
            <li>
              <strong>EzWears Clone</strong> — Front-end clone of a fashion
              e-commerce site using React.js and Tailwind.
            </li>
            <li>
              <strong>To-Do List </strong> — Task manager app with
              add/edit/delete features built in React.js.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills" className="mb-10">
          <h2
            id="skills"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "CSS3",
              "HTML5",
              "TypeScript",
              "Redux",
              "Git",
              "REST APIs",
            ].map((skill, index) => {
              const colors = [
                "bg-blue-600",
                "bg-green-600",
                "bg-red-600",
                "bg-yellow-600",
                "bg-purple-600",
                "bg-pink-600",
                "bg-indigo-600",
                "bg-teal-600",
                "bg-orange-600",
              ];
              return (
                <span
                  key={skill}
                  className={`${
                    colors[index % colors.length]
                  } text-white px-5 py-2 rounded-full text-base font-semibold shadow-md transition transform duration-300 hover:scale-110 hover:shadow-xl`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="experience" className="mb-10">
          <h2
            id="experience"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Experience
          </h2>

          <article className="max-w-4xl">
            <h3 className="text-gray-900 font-bold text-2xl">
              Personal Projects & GitHub Contributions
            </h3>
            <p className="text-blue-600 font-semibold text-lg">
              Self-Initiated
            </p>
            <p className="italic text-gray-500 text-lg mb-3">Ongoing</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Completed multiple web development projects, including weather
              apps, to-do lists, and portfolio websites. Regularly contribute
              code to GitHub and improve existing open-source projects.
            </p>
          </article>
        </section>

        {/* Education */}
        <section aria-labelledby="education" className="mb-0 max-w-4xl">
          <h2
            id="education"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Education
          </h2>
          <article>
            <h3 className="text-gray-900 font-bold text-2xl">
              Institute of Advanced Research and Innovation
            </h3>
            <p className="text-blue-600 font-semibold text-lg">
              Bachelor of Technology in Computer Science
            </p>
            <p className="italic text-gray-500 text-lg mb-2">2024 - Present</p>
            <p className="text-gray-700 text-lg">GPA (Semester 1): 8.1/10</p>
          </article>
        </section>
        <section aria-labelledby="languages" className="mb-10 mt-6 max-w-4xl">
          <h2
            id="languages"
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-5"
          >
            Languages
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li>English (Fluent)</li>
            <li>Hindi </li>
            <li>Gujarati (Native)</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PortfolioCV;
