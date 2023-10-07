const KalenderAkademik = () => {
  return (
    <div className="container mx-auto p-16">
      <div className="my-20">
        <div className="border border-solid border-black p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">
              Kalender Akademik 2019-2020
            </h1>
            <hr className="border-blue-500 border-b-4 w-1/5 mx-auto mt-3" />
          </div>

          <div className="text-justify">
            <p>
              <img
                src="./public/images/kalender.jpg"
                alt="Kata Sambutan"
                className="mx-auto w-10/12"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalenderAkademik;
