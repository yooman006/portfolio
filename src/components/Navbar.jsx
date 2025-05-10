import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certification", label: "Certification" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `cursor-pointer transition ${activeSection === id ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-cyan-400 text-2xl font-extrabold tracking-wide cursor-pointer">
          MyPortfolio
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className={linkClass(section.id)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a href="#contact" className="hidden md:inline-block bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition">
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer text-cyan-400" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-[#0f172a] px-4 pb-4 text-gray-300 font-medium shadow-lg rounded-md">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={handleLinkClick} className={linkClass(section.id)}>
                {section.label}
              </a>
            </li>
          ))}
          <a href="#contact" onClick={handleLinkClick} className="mt-2 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition text-center">
            Hire Me
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
