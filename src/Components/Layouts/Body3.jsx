import React from "react";

const Body3 = () => {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-b from-sky-200 to-white  text-black flex flex-col lg:flex-row gap-4">
        <div className="lg:w-3/5 lg:ml-20">
          <div className="flex flex-col sm:m-8">
            <div className="text-4xl font-normal mb-2 text-orange-500">
              <h2>
                Kuliah di <br />
                Universitas Murni Teguh
              </h2>
            </div>
            <div>
              <div className="mb-16 text-base text-justify">
                <p>
                  Raih gelar pendidikan tinggi Anda di Universitas Murni Teguh.
                  Bersama UII, Anda akan menemukan pengalaman belajar yang
                  memadukan pendalaman ilmu pengetahuan dengan landasan nilai
                  keislaman untuk membentuk karakter yang berintegritas, serta
                  didukung dengan lingkungan pembelajaran yang kondusif untuk
                  mengembangkan potensi Anda.
                </p>
              </div>

              <div className=" text-base">
                <p>
                  <b>#JemputImpian</b> Anda untuk menjadi bagian dari
                  Universitas Murni Teguhuntuk bergabung dengan UMT di 2023.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-8 lg:w-2/5 hidden lg:block justify-center">
          <div className="">
            <img
              src="./public/images/brosur1.jpeg"
              alt=""
              className="rounded-es-3xl w-full lg:w-96 h-3/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;
