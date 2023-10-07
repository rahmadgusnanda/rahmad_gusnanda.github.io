const Pengumuman = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-max w-screen my-20 mt-36">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold">Arsip Pengumuman</h1>
          <hr className="border-blue-500 border-b-4 w-1/4 mx-auto mt-3" />
        </div>

        <div className="mx-16">
          {/* -------------------------------------------->>>>>Kiri<<<<<-------------------------------------------- */}
          <div className="flex justify-center grid-cols-2 mx-auto my-10">
            <div className="border border-gray-400 mx-6 w-4/6">
              <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
                Pengumuman
              </h1>
              {/* <div className="border-solid border-gray-400 p-7">
                <div>
                  <img
                    src="./images/tabloid.png"
                    alt="Tabloid"
                    className="w-full h-96 flex justify-center mx-auto"
                  />
                </div>
                <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto p-6 flex justify-start ">
                  <h2 className="text-xl">
                    <a
                      href="./file/tabloid-7.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-orange-300"
                    >
                      Download Tabloid Edisi 7
                    </a>
                  </h2>
                </div>
              </div> */}
            </div>

            {/* -------------------------------------------->>>>>Kanan<<<<<-------------------------------------------- */}
            <div className="border border-gray-400 w-2/6">
              <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
                Berita Terbaru
              </h1>
              <div className="flex justify-center p-4">
                <figure className="flex">
                  <img
                    src="./images/tabloid.png"
                    alt="Tabloid"
                    className="w-24 h-20"
                  />

                  <figcaption className="flex flex-col justify-center ml-2">
                    <p className="text-lg font-semibold hover:text-orange-300">
                      Pengabdian Masyarakat Berbasis Penelitian
                    </p>
                    <p className="deskripsi-berita">Aug 19, 2020</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengumuman;
