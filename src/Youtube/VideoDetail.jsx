"use client";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useLiked } from "./LikedContext";
import { useWatch } from "./WatchContext";

import webDevVideos from "./Webvideos";
import Cybervideos from "./Cybervideos";
import GeneralVideos from "./Generalvideos";
import Onevideos from "./One";
import UiVideos from "./uivideos";
import CpVideos from "./cp";
import DsaVideos from "./dsa";

function VideoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { likeVideo, likedVideos } = useLiked();
  const { watchVideo, WatchVideos } = useWatch([]);

  const [showToast, setShowToast] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const allVideos = [
    ...webDevVideos,
    ...GeneralVideos,
    ...Cybervideos,
    ...Onevideos,
    ...UiVideos,
    ...CpVideos,
    ...DsaVideos,
  ];

  const currentIndex = allVideos.findIndex((v) => v.id.toString() === id);
  const video = allVideos[currentIndex];
  const prevVideo = allVideos[currentIndex - 1];
  const nextVideo = allVideos[currentIndex + 1];

  if (!video) return <div className="mt-20 text-center">Video not found</div>;

  const isLiked = likedVideos.some((v) => v.id === video.id);
  const isWatched = WatchVideos.some((v) => v.id === video.id);

  const handleLike = () => {
    if (!isLiked) {
      likeVideo(video);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleWatch = () => {
    if (!isWatched) {
      watchVideo(video);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 relative">
          {/* Video Player + Info */}
          <div className="w-full xl:flex-1 max-w-full xl:max-w-5xl flex flex-col">
            {/* Video Player Container */}
            <div className="w-full bg-black overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info Section */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mt-4 shadow-sm">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                {video.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 mb-4 sm:mb-6">
                {video.category}
              </p>

              {/* Like & Watch Later Buttons */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleLike}
                    disabled={isLiked}
                    className={`flex items-center justify-center xs:justify-start space-x-2 text-base sm:text-lg rounded-lg px-4 py-2.5 sm:px-6 sm:py-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full xs:w-auto ${
                      isLiked
                        ? "text-pink-500 cursor-not-allowed bg-pink-50 border border-pink-200 focus:ring-pink-500"
                        : "text-gray-600 hover:text-pink-600 hover:bg-pink-50 border border-gray-300 hover:border-pink-300 focus:ring-pink-500"
                    }`}
                    title="Like"
                  >
                    <FaThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">
                      {isLiked ? "Liked" : "Like"}
                    </span>
                  </button>

                  <button
                    title="Watch Later"
                    onClick={handleWatch}
                    disabled={isWatched}
                    className={`flex items-center justify-center xs:justify-start space-x-2 text-base sm:text-lg rounded-lg px-4 py-2.5 sm:px-6 sm:py-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full xs:w-auto ${
                      isWatched
                        ? "text-yellow-600 cursor-not-allowed bg-yellow-50 border border-yellow-200 focus:ring-yellow-500"
                        : "text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 border border-gray-300 hover:border-yellow-300 focus:ring-yellow-500"
                    }`}
                  >
                    <MdOutlineWatchLater className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">
                      {isWatched ? "Added to Watch Later" : "Watch Later"}
                    </span>
                  </button>
                </div>

                {/* Prev/Next Video */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
                  {prevVideo && (
                    <button
                      onClick={() => navigate(`/video/${prevVideo.id}`)}
                      className="bg-white hover:bg-gray-50 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 border-2 border-red-500 hover:border-red-600 rounded-lg transition duration-200 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full xs:w-auto"
                    >
                      <span className="hidden sm:inline">← Previous Video</span>
                      <span className="sm:hidden">← Previous</span>
                    </button>
                  )}
                  {nextVideo && (
                    <button
                      onClick={() => navigate(`/video/${nextVideo.id}`)}
                      className="bg-white hover:bg-gray-50 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 border-2 border-red-500 hover:border-red-600 rounded-lg transition duration-200 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full xs:w-auto"
                    >
                      <span className="hidden sm:inline">Next Video →</span>
                      <span className="sm:hidden">Next →</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Videos */}
          <div className="w-full xl:w-80 2xl:w-96 mt-6 xl:mt-0">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm xl:sticky xl:top-4">
              <h3 className="font-semibold mb-4 text-lg sm:text-xl text-gray-900">
                More Videos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 xl:flex xl:flex-col xl:space-y-4 xl:gap-0 overflow-y-auto overflow-x-hidden max-h-[50vh] sm:max-h-[60vh] xl:max-h-[70vh] 2xl:max-h-[75vh] pb-2 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {[...allVideos]
                  .filter((v) => v.id.toString() !== id) // Exclude current video
                  .sort(() => Math.random() - 0.5) // Randomize
                  .slice(0, 10) // Limit to 10
                  .map((v) => (
                    <div key={v.id} className="w-full flex-shrink-0">
                      <VideoCard video={v} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast for Like */}
      {showToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white text-black border border-gray-300 shadow-xl p-4 rounded-lg z-50">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-3">
              <p className="font-semibold text-gray-900">Notification</p>
              <p className="mt-1 text-sm text-gray-600">
                👍 Added to your liked videos!
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              <ImCross className="text-sm text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {/* Toast for Watch Later */}
      {showMsg && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white text-black border border-gray-300 shadow-xl p-4 rounded-lg z-50">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-3">
              <p className="font-semibold text-gray-900">Notification</p>
              <p className="mt-1 text-sm text-gray-600">
                ⌚ Added to Watch Later!
              </p>
            </div>
            <button
              onClick={() => setShowMsg(false)}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              <ImCross className="text-sm text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoDetail;
