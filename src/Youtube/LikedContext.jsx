import { createContext, useState, useContext, useEffect } from "react";
import LikedVideos from "./Likedvideos";

const LikedContext = createContext();

export function LikedProvider({ children }) {
    const [likedVideos, setLikedVideos] = useState(() => {
        const stored = localStorage.getItem("likedVideo");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("likedVideo", JSON.stringify(likedVideos));
    }, [likedVideos])

    const likeVideo = (video) => {
        if(!likedVideos.find((v) => v.id === video.id)) {
            setLikedVideos([...likedVideos, video]);
        }
    };
    const unlikeVideo = (id) => {
        setLikedVideos(likedVideos.filter((v) => v.id !== id));
    }

    return (
        <LikedContext.Provider value={{ likedVideos, likeVideo, unlikeVideo }}>
            {children}
        </LikedContext.Provider>
    );
}     

export function useLiked() {
    return( useContext(LikedContext) );
}