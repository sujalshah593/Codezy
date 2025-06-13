import React from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

// Extract YouTube video ID
const getYouTubeId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
};

export default function VideoCard({ video }) {
  const videoId = getYouTubeId(video.url);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative group cursor-pointer hover:scale-105 w-full max-w-sm  overflow-hidden transition"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      {videoId && (
        <div className="relative">
          <div className="aspect-video w-full lg:w-96">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={thumbnailUrl}
              title={video.title}
              alt={video.title}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-5 rounded-full backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <FaPlay className="w-5 h-5" />
          </div>
          <div className="absolute bottom-4  right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
            {video.time}
          </div>
        </div>
      )}

      {/* Three Dots - visible on hover */}
      <div className="absolute top-2 right-2 z-10 text-white sm:opacity-100 hover:bg-gray-300 p-2 rounded-full hover:text-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
        <BsThreeDotsVertical size={20} />
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-md font-bold mb-1">{video.title}</h3>
      </div>
    </div>
  );
}
