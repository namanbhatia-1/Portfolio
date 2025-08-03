import React from "react";
import naman from "../Assets/naman.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-black text-white font-sans relative overflow-hidden">

      {/* Left Side - Profile Image */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div className="rounded-full mt-10 overflow-hidden ">
          <img
            src={naman}
            alt="Profile"
            className="h-[550px] object-cover"
          />
          
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">I'm Naman Bhatia</h1>
        <h2 className="text-3xl text-lime-400 font-semibold">
          I am a <span className="animate-pulse">Front-end developer.|</span>
        </h2>

        <div className="h-px w-full bg-gray-700 my-4"></div>

        {/* Info Line */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWhatsapp} className="text-lime-400" />
            9664423285
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-lime-400" />
            namanbhatia514@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lime-400" />
            Jaipur, Rajasthan
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm font-Ubuntu text-gray-400 mt-4 max-w-xl">
          I'm a passionate front-end web developer with a knack for creating
          visually stunning and highly interactive user experiences. With a
          strong foundation in HTML, CSS, and JavaScript, I specialize in
          bringing designs to life, ensuring they not only look great but
          perform seamlessly across all devices.
        </p>
      </div>
    </div>
  );
}

export default Home;
