import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  // Handle scroll effect for setting active section and background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update navbar color based on scroll or menu toggle
  useEffect(() => {
    setNavbarColor(toggle ? "bg-primary" : scrolled ? "bg-primary" : "bg-transparent");
  }, [toggle, scrolled]);

  // Handle observing sections to set active link based on scrolling
  useEffect(() => {
    const handleSectionInView = (entries) => {
      let homeActive = true;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          homeActive = false;
        }
      });

      if (homeActive) {
        setActive("home");
      }
    };

    const observer = new IntersectionObserver(handleSectionInView, {
      threshold: 0.8,
    });

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-20 transition-colors duration-300 ${navbarColor}`}
      style={{
        position: "fixed", // Ensure it's fixed at the top
        top: 0,            // No offset
        left: 0,           // Align to the left edge of the screen
        right: 0,          // Ensure full width
        width: "100%",      // Full width of the screen
        zIndex: 1000,      // Ensure it stays above other content
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Apollo Blaze &nbsp;
            <span className="sm:block hidden"></span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === "home"
                  ? "text-secondary"
                  : active === nav.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-bold cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-primary absolute top-16 right-0 mx-0 my-2 w-full z-10 rounded-b-3xl shadow-lg transition-opacity duration-300 ease-in-out`}
          >
            <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4 w-full">
              {navLinks
                .filter((nav) => nav.id !== "projects")
                .map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === "home"
                      ? "text-secondary"
                      : active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  } text-center transition-colors duration-300 hover:text-white`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
