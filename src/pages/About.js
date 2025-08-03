import React from "react";
import naman from "../Assets/about1.png"

function About() {
  return (
    <div className="font-Ubuntu w-full bg-black min-h-screen flex flex-col justify-center items-center px-4">
      {/* Section Title */}
      <div className="flex justify-center items-center mb-10">
        <p className="text-3xl font-medium text-white border-b-2 border-lime-400">INTRODUCTION</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-end lg:space-x-10 w-full">
        {/* Profile Image */}
        <div className="w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <img
            className="w-64 lg:w-80 rounded-b-full select-none hover:animate-pulse"
            src={naman}
            alt="Profile"
          />
        </div>

        {/* Introduction Text */}
        <div className="lg:w-1/2">
          <p className="text-lg lg:text-2xl font-medium text-center lg:text-justify tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-lime-600">
            I'm a passionate front-end web developer with a knack for creating
            visually stunning and highly interactive user experiences. With a
            strong foundation in HTML, CSS, and JavaScript, I specialize in
            bringing designs to life, ensuring they not only look great but
            perform seamlessly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
