import React from "react";

function BackgroundVideo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source
          src="https://novotec-gruppe-044552942866.s3.eu-central-1.amazonaws.com/Firma+Vid+14.MP4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
