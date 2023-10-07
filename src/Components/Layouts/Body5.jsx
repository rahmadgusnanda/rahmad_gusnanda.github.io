const Body5 = () => {
  return (
    <div className="flex flex-col col-span-2 mb-10 ml-5">
      <div className="float-left">
        <h1>Testimoni</h1>
        <div className="text-blue-500 md:w-3/4">
          ...........................................................................................................................................................
        </div>
      </div>

      <div className="flex grid-cols-2 mt-10 ml-10">
        <div className="w-1/2  h-20 md:block hidden rounded-lg bg-gradient-to-br from-green-300 via-cyan-400 to-blue-600">
          <div className="m-3 flex items-center">
            <img
              src="/images/brosur1.jpeg"
              className="w-10 h-14 rounded-md
               border-2 border-blue-500 mr-2"
            />
            <div className="text-left">
              <p>Rahmad</p>
              <p>Alumni</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-96 md:mt-8">
          <div className="w-44 h-60 ml-auto mr-36">
            <img
              src="/images/brosur2.jpeg"
              alt="Gambar Header"
              className="w-full h-full object-cover object-top rounded-lg shadow-md shadow-gray-400"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
            <div className="w-3/4 sm:w-full sm:-ml-14 h-auto rounded-lg bg-white shadow-md shadow-gray-400 opacity-90">
              <div className="m-3 flex items-center">
                <div className="text-left p-5">
                  <p className="text-lg font-semibold ">Rahmad</p>
                  <p className="md:hidden mb-6">Alumni</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel sed numquam velit corporis nisi beatae similique,
                    incidunt perspiciatis. Eligendi doloremque facilis placeat
                    modi dolorum molestiae eaque, incidunt temporibus natus id
                    magni debitis! Reprehenderit deleniti optio placeat saepe
                    magni aspernatur nulla aut vel, modi asperiores dolorem illo
                    voluptatum explicabo quisquam! Itaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body5;
