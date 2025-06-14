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
    <div className="flex flex-col md:flex-row px-4 gap-6 relative">
      {/* Video Player + Info */}
      <div className="w-full md:flex-1 max-w-full md:max-w-5xl flex flex-col">
        <div className="w-full h-64 lg:h-[530px] bg-black overflow-hidden">
          <div className="relative pb-[56.25%] h-0 lg:h-[500px] lg:pb-0">
            <iframe
              className="absolute top-0 left-0 w-full h-64 lg:h-[530px]"
              src={video.url}
              title={video.title}
              allowFullScreen
            />
          </div>
        </div>

        <h2 className="mt-4 text-lg font-semibold">{video.title}</h2>
        <p className="text-gray-600 mt-1 mb-4">{video.category}</p>

        {/* Like & Watch Later Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              disabled={isLiked}
              className={`flex items-center space-x-2 text-lg rounded px-3 py-2 transition duration-300 focus:outline-none ${
                isLiked
                  ? "text-pink-500 cursor-not-allowed bg-blue-100"
                  : "text-gray-600 hover:text-pink-600 hover:bg-blue-50"
              }`}
              title="Like"
            >
              <FaThumbsUp />
              <span className="text-base font-medium">{isLiked ? "Liked" : "Like"}</span>
            </button>

            <button
              title="Watch Later"
              onClick={handleWatch}
              className="flex items-center space-x-2 text-2xl rounded px-3 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition cursor-pointer focus:outline-none"
            >
              <MdOutlineWatchLater />
              <span className="text-base font-medium">Watch Later</span>
            </button>
          </div>

          {/* Prev/Next Video */}
          <div className="flex gap-2 text-sm">
            {prevVideo && (
              <button
                onClick={() => navigate(`/video/${prevVideo.id}`)}
                className="bg-gray-100 px-8 py-3 border-red-500 border-2 rounded hover:bg-gray-200 whitespace-nowrap hover:cursor-pointer"
              >
                ← Previous Video
              </button>
            )}
            {nextVideo && (
              <button
                onClick={() => navigate(`/video/${nextVideo.id}`)}
                className="bg-gray-100 px-8 py-3 border-red-500 border-2 rounded hover:bg-gray-200 hover:cursor-pointer"
              >
                Next Video →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Related Videos */}
      <div className="w-full md:w-64 lg:w-96">
        <h3 className="font-semibold mb-3 text-lg">More Videos</h3>
        <div className="flex flex-col space-y-4 overflow-y-auto overflow-x-hidden max-h-[70vh] md:max-h-[640px] pb-2 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {[...allVideos]
          .filter((v) => v.id.toString() !== id)
          .sort(() => Math.random() - 0.5)
          .slice(0,10)
          .map((v) => (
            <div key={v.id} className="w-full flex-shrink-0">
              <VideoCard video={v}/>
            </div>
          ))}
        </div>
      </div>

      {/* Toast for Like */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-white text-black border border-gray-400 w-80 p-3 rounded shadow-lg z-50">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Notification</p>
            <button onClick={() => setShowToast(false)}>
              <ImCross className="text-sm" />
            </button>
          </div>
          <p className="mt-2 text-sm">👍 Added to your liked videos!</p>
        </div>
      )}

      {/* Toast for Watch Later */}
      {showMsg && (
        <div className="fixed bottom-4 right-4 bg-white text-black border border-gray-400 w-80 p-3 rounded shadow-lg z-50">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Notification</p>
            <button onClick={() => setShowMsg(false)}>
              <ImCross className="text-sm" />
            </button>
          </div>
          <p className="mt-2 text-sm">⌚ Added to Watch Later!</p>
        </div>
      )}
    </div>
  );
}

export default VideoDetail;
