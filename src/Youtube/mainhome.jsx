import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaRegCompass,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
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
import cyber from "../assets/cyber.jpg";
import Onevideos from "./One";
import cp from "../assets/cp.png";
import web from "../assets/web.png";
import figma from "../assets/figma.png";
import oneshot from "../assets/oneshot.png";
import dsa from "../assets/dsa.png";
import UiVideos from "./uivideos";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import CpVideos from "./cp";
import DsaVideos from "./dsa";

const drawerFullWidth = 240;
const drawerCollapsedWidth = 72;

const drawerItemsTop = [
  { id: "home", text: "Home", icon: <IoHomeOutline /> },
  { id: "about", text: "About", icon: <IoIosInformationCircleOutline /> },
  { id: "watch_later", text: "Watch Later", icon: <MdOutlineWatchLater /> },
  { id: "liked", text: "Liked Videos", icon: <FaRegThumbsUp /> },
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
  const desktopSearchRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const searchRef = useRef(null);
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

  // For Loader

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

  //UseEffect to detect outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
  });

  // for desktop search suggestions
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target)
      ) {
        setSearch(""); // or set a state like setShowSuggestions(false) if you use one
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    if (id === "Channel5") {
      navigate("/category/oneshot");
    }
    if (id === "Channel6") {
      navigate("/category/dsa");
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 text-black font-semibold">
          {part}
        </mark>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, isMobile]);

  const currentDrawerWidth = drawerExpanded
    ? drawerFullWidth
    : drawerCollapsedWidth;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed font-sora border-b border-b-gray-100  top-0 left-0 right-0 h-16 bg-white flex items-center px-4 z-50">
        <div className="flex items-center justify-between w-full">
          {/*  LEFT: Logo + Hamburger */}
          <div className="flex items-center gap-5">
            {/* Hamburger Button */}
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

            {/* Logo */}
            {!isMobile || !isOpen ? (
              <h1
                className="text-2xl hover:cursor-pointer font-bold hover:scale-105 transition-transform duration-300"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#E53935",
                }}
              >
                Code<span style={{ color: "#212121" }}>zy</span>
              </h1>
            ) : null}
          </div>

          {/* CENTER: Desktop Search */}
          <div
            className="hidden md:flex flex-grow justify-center"
            ref={desktopSearchRef}
          >
            <div className="relative w-full max-w-md left-[-70px]">
              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                {/* Icon inside input */}
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  onFocus={openSearch}
                  className="w-xl   pl-10 pr-4 py-2 border border-gray-100 rounded-full focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </form>

              {search && filteredSuggestions.length > 0 && (
                <ul className="absolute left-0 w-xl mt-1  bg-white  shadow max-h-120 overflow-y-auto z-10">
                  {filteredSuggestions.slice(0, 35).map((video) => (
                    <li
                      key={video.id}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSelect(video.id)}
                    >
                      {highlightMatch(video.title, search)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/*  RIGHT: Mobile Search Logic */}
          <div
            className="md:hidden flex-grow flex justify-end relative"
            ref={desktopSearchRef}
          >
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="text-xl text-gray-700 p-2"
                aria-label="Open search"
              >
                <FaSearch />
              </button>
            ) : (
              <div className="flex items-center w-full max-w-[80vw] bg-white border rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-red-600">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="flex-grow focus:outline-none"
                />
                {search && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setIsOpen(false); // close search box
                    }}
                    className="text-gray-500 hover:text-red-500 ml-2"
                    aria-label="Clear search"
                  >
                    ✖
                  </button>
                )}
              </div>
            )}

            {/* Suggestion List */}
            {search && filteredSuggestions.length > 0 && (
              <ul className="absolute custom-scrollbar left-[-25px] right-0 top-9 border bg-white rounded-md shadow max-h-200 overflow-y-auto z-10">
                {filteredSuggestions.slice(0, 35).map((video) => (
                  <li
                    key={video.id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleSelect(video.id)}
                  >
                    {highlightMatch(video.title, search)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed bg-white border-r border-r-gray-100 overflow-auto z-40   transition-transform duration-300 ease-in-out
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
              ? "bg-gradient-to-r from-red-100 to-pink-100 text-red-600 font-bold"
              : "text-gray-800 hover:bg-gray-100"
          }
        `}
                  aria-current={activeItem === id ? "page" : undefined}
                  style={{
                    justifyContent:
                      drawerExpanded || isMobile ? "flex-start" : "center",
                  }}
                >
                  <span className="text-xl group-hover:text-red-500 transition">
                    {icon}
                  </span>

                  {(drawerExpanded || isMobile) && (
                    <>
                      <span className="flex-1">{text}</span>
                      <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition">
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
              <div className="w-full overflow-x-auto whitespace-nowrap flex gap-4  scrollbar-hide custom-scrollbar">
                <div className="overflow-x-auto p-2 whitespace-nowrap flex scrollbar-hide gap-4 custom-scrollbar ">
                  <button
                    onClick={() => handleCategoryClick("Web Development")}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition"
                  >
                    Web Development
                  </button>

                  <button
                    onClick={() => handleCategoryClick("Cyber Security")}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition    "
                  >
                    Cyber Security
                  </button>
                  <button
                    onClick={() => handleCategoryClick("UI-UX")}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition"
                  >
                    UI/UX
                  </button>
                  <button
                    onClick={() =>
                      handleCategoryClick("Competitive Programming")
                    }
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition"
                  >
                    Competitive Programming
                  </button>
                  <button
                    onClick={() => handleCategoryClick("One Shot")}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition"
                  >
                    One Shots
                  </button>
                  <button
                    onClick={() => handleCategoryClick("DSA")}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition"
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
