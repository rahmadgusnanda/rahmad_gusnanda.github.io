import React from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import FacebookIcon from "./FacebookIcon";

const FacebookComment = () => {
  const handleKirimClick = () => {
    // Replace 'facebook_page_url' with the actual URL of the Facebook page you want to navigate to
    window.location.href = "https://facebook.com/facebook_page_url";
  };

  return (
    <div>
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500 mx-6">
        Komentar
      </h1>
      <div className="border mx-6 border-gray-400 p-7">
        {/* Komentar */}
        <div className="flex items-center space-x-4 mb-4">
          {/* Avatar atau gambar profil pengguna */}
          <img src="" alt="A" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <textarea
              placeholder="Tulis komentar..."
              className="w-full h-16 p-2 border rounded"
            ></textarea>
            <div className="flex justify-between mt-2">
              <div className="flex items-center space-x-2">
                <FaThumbsUp className="text-blue-600" />
                <FaComment className="text-blue-600" />
              </div>
              <button
                className="bg-blue-500 text-white rounded px-4 py-2"
                onClick={handleKirimClick}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>

        {/* Komentar lainnya */}
        <div className="flex items-center mb-4">
          <img src="" alt="B" className="w-10 h-10 rounded-full" />
          <div className="ml-4">
            <p className="font-semibold">Nama Pengguna</p>
            <p>Komentar pengguna lainnya</p>
          </div>
        </div>

        {/* Tambahkan komentar lain jika diperlukan */}
        <div className="text-blue-500 text-sm flex mt-8">
          <FacebookIcon />
          <a
            target="_blank"
            href="https://developers.facebook.com/products/social-plugins/comments/?utm_campaign=social_plugins&utm_medium=offsite_pages&utm_source=comments_plugin"
          >
            Plugin Komentar Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookComment;
