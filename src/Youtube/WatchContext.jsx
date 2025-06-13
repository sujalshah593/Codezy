import { createContext, useState, useContext, useEffect } from "react";

const WatchContext = createContext();

export function WatchProvider({ children }) {
  const [WatchVideos, setWatchVideos] = useState(() => {
    const stored = localStorage.getItem("watchLater");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(WatchVideos));
  }, [WatchVideos]);

  const watchVideo = (video) => {
    if (!WatchVideos.find((v) => v.id === video.id)) {
      setWatchVideos(prev => [...prev, video]);
    }
  };

  const unwatchVideo = (id) => {
    setWatchVideos(prev => prev.filter((v) => v.id !== id));
  };

  return (
    <WatchContext.Provider value={{ WatchVideos, watchVideo, unwatchVideo }}>
      {children}
    </WatchContext.Provider>
  );
}

export function useWatch() {
  return useContext(WatchContext);
}
