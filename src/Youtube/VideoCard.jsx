"use client"
import { useNavigate } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"

function getYouTubeId(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : null
}

export default function VideoCard({ video }) {
  const videoId = getYouTubeId(video.url)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/video/${video.id}`)
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div
      className="relative group cursor-pointer hover:scale-105 w-full max-w-sm mx-auto sm:max-w-none overflow-hidden transition-transform duration-200"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      {videoId && (
        <div className="relative">
          <div className="aspect-video w-full">
            <img
              className="w-full h-full object-cover rounded-lg shadow-sm"
              src={thumbnailUrl || "/placeholder.svg"}
              title={video.title}
              alt={video.title}
              loading="lazy"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-3 sm:p-4 lg:p-5 rounded-full backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <FaPlay className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {video.time && (
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 bg-black bg-opacity-80 text-white text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
              {video.time}
            </div>
          )}
        </div>
      )}

      {/* Three Dots - visible on hover */}
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 text-white sm:opacity-100 hover:bg-gray-300 p-1.5 sm:p-2 rounded-full hover:text-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
        <BsThreeDotsVertical className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      {/* Video Info */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 line-clamp-2 leading-tight">{video.title}</h3>
      </div>
    </div>
  )
}
