import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaRegCompass,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import "./utility.css";
import { Link, Outlet } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import videos from "./Webvideos";
import Cybervideos from "./Cybervideos";
import GeneralVideos from "./Generalvideos";
import cyber from "../src/assets/cyber.jpg";
import Onevideos from "./One";
import cp from "../src/assets/cp.png";
import web from "../src/assets/web.png";
import figma from "../src/assets/figma.png";
import oneshot from "../src/assets/oneshot.png";
import dsa from "../src/assets/dsa.png";
import UiVideos from "./uivideos";
import { FaInfoCircle } from "react-icons/fa";
import CpVideos from "./cp";
import DsaVideos from "./dsa";

const drawerFullWidth = 240;
const drawerCollapsedWidth = 72;

const drawerItemsTop = [
  { id: "home", text: "Home", icon: <FaHome /> },
  { id: "about", text: "About", icon: <FaInfoCircle /> },
  { id: "watch_later", text: "Watch Later", icon: <FaClock /> },
  { id: "liked", text: "Liked Videos", icon: <FaThumbsUp /> },
];

const drawerItemsBottom = [
  { id: "Channel1", text: "Web Development", imageSrc: web },
  { id: "Channel2", text: "Cyber Security", imageSrc: cyber },
  { id: "Channel3", text: "Competitive Programming", imageSrc: cp },
  { id: "Channel4", text: "UI/UX Designer", imageSrc: figma },
  { id: "Channel5", text: "One Shot", imageSrc: oneshot },
  { id: "Channel6", text: "DSA", imageSrc: dsa },
];

export default function YouTubeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20); // Initial visible count for videos
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const drawerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { category } = useParams();
  const location = useLocation();
  const pathname = location.pathname;

  //link drawers items

  //for search bar
  const openSearch = () => setIsOpen(true);
  const closeSearch = () => {
    setSearch("");
    setIsOpen(false);
  };

  //for load more videos
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 30);
  };

  // Normalize category from URL
  const slug = category?.toLowerCase().replace(/\s+/g, "");

  const allVideos = [
    ...GeneralVideos,
    ...videos,
    ...Cybervideos,
    ...Onevideos,
    ...UiVideos,
    ...CpVideos,
    ...DsaVideos,
  ];
  const filteredVideos = category
    ? allVideos.filter((v) => {
        if (!v.category) return false; // skip if no category
        return v.category.toLowerCase().replace(/\s+/g, "") === slug;
      })
    : allVideos;

  const filteredSuggestions = allVideos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle screen resize for mobile check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (!category) {
      // For All: just clear selectedCategory and navigate to root '/'
      setSelectedCategory("");
      navigate("/");
    } else {
      const slug = category.toLowerCase().replace(/\s+/g, "");
      setSelectedCategory(category); // optional if you want local state too
      navigate(`/category/${slug}`);
    }
  };

  // Close drawer on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !event.target.closest("#menu-button")
      ) {
        if (isMobile && drawerOpen) {
          setDrawerOpen(false);
          setDrawerExpanded(true);
        }
      }
    }

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen, isMobile]);

  // Handle hamburger menu click
  const onMenuClick = () => {
    setMenuOpen((prev) => !prev);
    // Also toggle your drawer state if needed:
    if (!drawerOpen) {
      setDrawerOpen(true);
      setDrawerExpanded(true);
    } else {
      if (!isMobile) {
        setDrawerExpanded((prev) => !prev);
      } else {
        setDrawerOpen(false);
      }
    }
  };

  const handleSelect = (id) => {
    navigate(`/video/${id}`);
    closeSearch();
  };

  // Handle clicking drawer item
  const onClickItem = (id) => {
    setActiveItem(id);
    if (isMobile) {
      setDrawerOpen(false);
      setDrawerExpanded(true);
    }
    if (id === "liked") {
      navigate("/likedvideos");
    }
    if (id === "watch_later") {
      navigate("/watchedlater");
    }
    if (id === "home") {
      navigate("/");
    }
    if (id === "Channel1") {
      navigate("/category/webdevelopment");
    }
    if (id === "Channel2") {
      navigate("/category/cybersecurity");
    }
    if (id === "about") {
      navigate("/about");
    }
    if (id === "Channel4") {
      navigate("/category/UI-UX");
    }
    if (id === "Channel3") {
      navigate("/category/competitiveprogramming");
    }
    if ( id === "Channel5" ) {
      navigate("/category/oneshot")
    }
    if ( id === "Channel6" ) { 
      navigate("/category/dsa")
    }
  };

  const currentDrawerWidth = drawerExpanded
    ? drawerFullWidth
    : drawerCollapsedWidth;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed font-sora justify-between border-b border-b-gray-100 top-0 left-0 right-0 h-16 bg-white flex items-center px-4  z-50">
        <div className="flex items-center gap-9">
          <div id="menuToggle">
            <button
              id="menu-button"
              aria-label="Toggle menu"
              onClick={onMenuClick}
              className={`toggle ${menuOpen ? "toggle--active" : ""}`}
            >
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </button>
          </div>

          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#E53935", // Red tone
            }}
          >
            Code<span style={{ color: "#212121" }}>zy</span>
          </h1>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="hidden md:flex flex-grow max-w-96 mx-4"
        >
          <input
            type="text"
            placeholder="Search..."
            onFocus={openSearch}
            className="flex-grow border  border-gray-100 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-white border border-gray-100  rounded-r-full px-3 py-2 "
          >
            <FaSearch />
          </button>
        </form>

        {/* Always show icon on all screens, but use only on mobile */}
        <button
          onClick={openSearch}
          className="md:hidden text-xl text-gray-700 p-2"
          aria-label="Open search"
        >
          <FaSearch />
        </button>

        {/* Overlay search when icon clicked (mobile) */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={closeSearch}
          >
            <div
              className="relative w-11/12 max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center bg-white rounded-full p-2">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
                />
                <button className="text-gray-500 px-4 py-2">
                  <FaSearch />
                </button>
              </div>

              {search && filteredSuggestions.length > 0 && (
                <ul className="absolute custom-scrollbar left-0 right-0 mt-2 border bg-white rounded-md shadow max-h-60 overflow-y-auto z-10">
                  {filteredSuggestions.slice(0, 35).map((video) => (
                    <li
                      key={video.id}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSelect(video.id)}
                    >
                      {video.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed bg-white border-r border-r-gray-100 overflow-auto z-40 mt-3  transition-transform duration-300 ease-in-out
            ${
              isMobile
                ? "top-14 left-0 w-full h-[calc(100vh-56px)]"
                : "top-14 left-0 h-[calc(100vh-56px)]"
            }`}
        style={{
          transform: drawerOpen
            ? "translate(0, 0)"
            : isMobile
            ? "translateY(-100%)"
            : `translateX(-${currentDrawerWidth}px)`,
          width: isMobile ? "100%" : currentDrawerWidth,
        }}
        aria-label="Sidebar navigation"
      >
        <nav className="pt-4">
          <ul>
            {drawerItemsTop.map(({ id, text, icon }) => (
              <li key={id}>
                <button
                  onClick={() => onClickItem(id)}
                  className={`group flex items-center gap-4 px-4 py-3 w-full hover:cursor-pointer text-left transition-colors
          ${
            activeItem === id
              ? "bg-gray-200 font-semibold text-red-600"
              : "text-gray-800 hover:bg-gray-100"
          }
        `}
                  aria-current={activeItem === id ? "page" : undefined}
                  style={{
                    justifyContent:
                      drawerExpanded || isMobile ? "flex-start" : "center",
                  }}
                >
                  <span className="text-lg">{icon}</span>

                  {(drawerExpanded || isMobile) && (
                    <>
                      <span className="flex-1">{text}</span>
                      <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <BsArrowRight />
                      </span>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <hr className="my-3 border-gray-100" />
          {(drawerExpanded || isMobile) && (
            <h2 className="text-center text-red-500 font-bold">Channels</h2>
          )}

          <div
            className={`overflow-y-auto ${
              drawerExpanded || isMobile
                ? "max-h-[250px] pr-2 custom-scrollbar "
                : ""
            }`}
          >
            <ul>
              {drawerItemsBottom.map(({ id, text, imageSrc }) => (
                <li key={id}>
                  <button
                    onClick={() => onClickItem(id)}
                    className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-colors hover:cursor-pointer ${
                      activeItem === id
                        ? "bg-gray-200 font-semibold text-red-600"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                    aria-current={activeItem === id ? "page" : undefined}
                    style={{
                      justifyContent:
                        drawerExpanded || isMobile ? "flex-start" : "center",
                    }}
                  >
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        alt={text}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                    )}
                    {(drawerExpanded || isMobile) && <span>{text}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="pt-14 transition-all duration-300 ease-in-out"
        style={{
          marginLeft: !isMobile && drawerOpen ? currentDrawerWidth : 0,
          width: !isMobile
            ? `calc(100% - ${drawerOpen ? currentDrawerWidth : 0}px)`
            : "100%",
        }}
      >
        <div className="p-6  ">
          {(pathname === "/" || pathname.startsWith("/category")) &&
            !pathname.startsWith("/video/") && (
              <div className="w-full overflow-x-auto whitespace-nowrap flex gap-4  scrollbar-hide">
                <div className="overflow-x-auto p-2 whitespace-nowrap flex scrollbar-hide gap-4 ">
                  <button
                    onClick={() => handleCategoryClick("Web Development")}
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500 px-3 hover:bg-red-500  hover:text-white py-1 mt-2 mb-2   rounded-lg hover:cursor-pointer hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    Web Development
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Cyber Security")}
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500 px-3 py-1  mt-2 mb-2 rounded-lg hover:bg-red-500 hover:text-white hover:cursor-pointer  hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    Cyber Security
                  </button>
                  <button
                    onClick={() => handleCategoryClick("UI-UX")}
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500  px-3 py-1  mt-2 mb-2  rounded-lg hover:bg-red-500 hover:text-white hover:cursor-pointer hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    UI/UX
                  </button>
                  <button
                    onClick={() =>
                      handleCategoryClick("Competitive Programming")
                    }
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500 px-3 py-1  hover:bg-red-500 hover:text-white mt-2 mb-2  rounded-lg  hover:cursor-pointer  hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    Competitive Programming
                  </button>
                  <button
                    onClick={() => handleCategoryClick("One Shot")}
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500 px-3 py-1 hover:bg-red-500 hover:text-white  mt-2 mb-2  rounded-lg  hover:cursor-pointer  hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    One Shots
                  </button>
                  <button
                    onClick={() => handleCategoryClick("DSA")}
                    className="lg:bg-gray-200 lg:text-black text-white bg-red-500 px-3 py-1 hover:bg-red-500 hover:text-white  mt-2 mb-2  rounded-lg  hover:cursor-pointer  hover:scale-105 transition hover:shadow-lg hover:shadow-gray-400"
                  >
                    DSA
                  </button>
                </div>
              </div>
            )}
        </div>

        <Outlet selectedCategory={selectedCategory} />

        {/* Only show video grid on homepage or category page */}
        {(window.location.pathname === "/" ||
          window.location.pathname.startsWith("/category")) && (
          <div className="grid lg:ml-5  md:ml-0 gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos
              .filter((video) => {
                if (window.location.pathname === "/") {
                  // Exclude videos from 'Web Development' on the home page
                  return ![
                    "webdevelopment",
                    "cybersecurity",
                    "ui-ux",
                    "competitiveprogramming",
                    "dsa",
                  ].includes(video.category?.toLowerCase().replace(/\s+/g, ""));
                }
                return true;
              })
              .slice(
                0,
                window.location.pathname.startsWith(
                  "/category/webdevelopment"
                ) ||
                  window.location.pathname.startsWith(
                    "/category/cybersecurity"
                  ) ||
                  window.location.pathname.startsWith("/category/ui-ux") ||
                  window.location.pathname.startsWith(
                    "/category/competitiveprogramming"
                  ) ||
                  window.location.pathname.startsWith("/category/dsa")
                  ? visibleCount
                  : filteredVideos.length
              )
              .map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            {(window.location.pathname.startsWith("/category/webdevelopment") ||
              window.location.pathname.startsWith("/category/cybersecurity") ||
              window.location.pathname.startsWith("/category/ui-ux") ||
              window.location.pathname.startsWith(
                "/category/competitiveprogramming"
              ) ||
              window.location.pathname.startsWith("/category/dsa")) &&
              visibleCount < filteredVideos.length && (
                <div className="flex justify-center items-center  ml-[-6px] w-sm">
                  <button onClick={handleSeeMore} class="btn">
                    See More
                  </button>
                </div>
              )}
          </div>
        )}
      </main>
    </>
  );
}