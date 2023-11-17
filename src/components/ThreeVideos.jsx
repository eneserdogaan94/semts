import React from 'react';

import video1 from "../assets/semtvideo4.mp4";
import video2 from "../assets/semtvideo2.mp4";
import video3 from "../assets/semtvideo3.mp4";

const videos = [
  video1,
  video2,
  video3,
];

function App() {
  return (
    <div className="flex overflow-hidden">
      {videos.map((video, index) => (
        <div key={index} className="w-screen h-screen">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default App;