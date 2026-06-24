"use client";

import React, { useEffect, useRef, useState } from "react";

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect mobile devices to avoid autoplay on cellular data
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobile);

    // Use Intersection Observer to only load/play when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !isMobile) {
      video.play().catch(() => {
        // Autoplay blocked by browser, silently ignore
      });
    } else {
      video.pause();
    }
  }, [isVisible, isMobile]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Poster image shown immediately while video loads */}
      <img
        src="/hero.jpg"
        alt=""
        className="absolute h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Video only autoplays on desktop when visible */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster="/hero.jpg"
        className="absolute h-full w-full object-cover"
      >
        {/* WebM first — smaller file size, better compression */}
        <source
          src="https://novotec-gruppe-044552942866.s3.eu-central-1.amazonaws.com/Firma+Vid+14.webm"
          type="video/webm"
        />
        {/* MP4 fallback */}
        <source
          src="https://novotec-gruppe-044552942866.s3.eu-central-1.amazonaws.com/Firma+Vid+14.MP4"
          type="video/mp4"
        />
      </video>

      {/* Mobile: show play button overlay so users opt-in */}
      {isMobile && (
        <button
          type="button"
          aria-label="Video abspielen"
          onClick={() => {
            const video = videoRef.current;
            if (video) {
              video.play();
              setIsMobile(false); // Hide button after play
            }
          }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
        >
          <div className="rounded-full bg-white/80 p-4">
            <svg
              className="h-12 w-12 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

export default BackgroundVideo;
