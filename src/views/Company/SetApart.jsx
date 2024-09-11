const SetApart = () => {
  const setAparts = [
    "Our unparalleled innovation distinguishes us from the competition.",
    "Unmatched dedication to quality sets us apart in the industry.",
    "Exceptional customer service is what truly defines our unique position.",
  ];

  return (
    <div className="bg-primary pb-5 md:pb-6 lg:pb-9 pt-4 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 xl:gap-10 p-10  md:p-16 xl:p-20">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">
          What Sets Us Apart?
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {setAparts.map((apart, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 md:p-4"
            >
              <h1 className="font-semibold text-lg md:text-xl lg:text-2xl text-white">
                15+
              </h1>
              <p className="text-white text-center">{apart}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white text-md md:text-lg">
        What works best for you?
        <span className="underline  underline-offset-2 hover:no-underline cursor-pointer duration-300">
          {" "}
          Explore More
        </span>
      </p>
    </div>
  );
};

export default SetApart;
