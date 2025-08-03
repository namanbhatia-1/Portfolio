import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const sections = ["home", "about", "skills", "contact"]; // all sections you showed in UI

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll without URL hash
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollY >= offsetTop - 80 && scrollY < offsetTop + offsetHeight - 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Toggle Button (Top-Right) */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start mt-24 ml-8 space-y-6 text-xl font-semibold font-Ubuntu">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative text-left ${
                activeSection === section ? "text-lime-400" : "text-white hover:text-lime-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-lime-400 line-through" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
