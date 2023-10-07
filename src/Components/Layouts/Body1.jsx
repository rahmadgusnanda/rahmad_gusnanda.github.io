import React from "react";

function Body1() {
  return (
    <div className="flex justify-center items-center bg-sky-100 bg-opacity-800">
      <div className="text-center">
        <video
          autoPlay
          className="w-full max-h-screen mt-16 border-slate-400 mx-auto rounded-3xl"
          src="/images/umt.mp4"
          muted
        >
          Maaf, peramban Anda tidak mendukung pemutaran video.
        </video>
      </div>
    </div>
  );
}

export default Body1;
