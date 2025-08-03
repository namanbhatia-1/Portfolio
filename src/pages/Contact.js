import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center font-Ubuntu">
      {/* Title */}
      <div className="flex items-center gap-4 mt-16 mb-8">
        <h1 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg border-b-2 border-lime-400">
          Get In Touch
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white/5 rounded-xl shadow-2xl overflow-hidden">
        {/* Left: Contact Info & Socials */}
        <div className="lg:w-2/5 w-full p-8 flex flex-col justify-between bg-gradient-to-b from-lime-900/80 to-black/80 text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-lime-400 text-xl" />
              <span className="text-lg">namanbhatia514@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-lime-400 text-xl" />
              <span className="text-lg">+91 9664423285</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-lime-400 text-xl" />
              <span className="text-lg">Naman Bhatia</span>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/namanbhatia-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Unique Contact Form */}
        <div className="lg:w-3/5 w-full p-8 flex flex-col justify-center bg-black/80">
          <form className="space-y-8">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl" />
              <input
                type="text"
                id="name"
                required
                className="pl-10 py-2 pt-5 pr-4  w-full bg-transparent border-b-2 border-lime-400 text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-all"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-10 text-white text-sm transition-all pointer-events-none"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl" />
              <input
                type="email"
                id="email"
                required
                className="pl-10 py-2 pt-5 pr-4 w-full bg-transparent border-b-2 border-lime-400 text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-all"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-10 top-0 text-white text-sm transition-all pointer-events-none"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl" />
              <input
                type="text"
                id="contact"
                required
                className="pl-10 py-2 pt-5 pr-4 w-full bg-transparent border-b-2 border-lime-400 text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-all"
                placeholder="Contact Number"
              />
              <label
                htmlFor="contact"
                className="absolute left-10 top-0 text-white text-sm transition-all pointer-events-none"
              >
                Contact Number
              </label>
            </div>
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-4 text-white text-xl" />
              <textarea
                id="message"
                required
                rows="4"
                className="pl-10 py-2 pt-5 pr-4 w-full bg-transparent border-b-2 border-lime-400 text-white placeholder-transparent focus:outline-none focus:border-lime-400 transition-all resize-none"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-10 top-0 text-white text-sm transition-all pointer-events-none"
              >
                Message
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-lime-400 text-black font-bold rounded-full shadow-lg hover:bg-lime-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
