const OurPortfolio = () => {
  const portfolios = [
    { title: "97%", description: "Customer Retention" },
    { title: "50", description: "Man Years Experience" },
    { title: "600", description: "Happy Customers" },
    { title: "100", description: "Happy Clients" },
  ];
  return (
    <div className="bg-primary pb-8 md:pb-14 lg:pb-20 pt-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 xl:gap-5  p-5  md:p-16 xl:p-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
          Our Portfolio
        </h1>
        <h1 className="text-xs md:text-sm lg:text-md text-white">
          Redefine Your Business Processes With Our Powerful Automated Services.
          Redefine Your Business Processes With Our Powerful Automated Services
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2"
          >
            <h1 className="text-lg md:text-2xl lg:text-3xl  text-white">
              <span className="font-semibold">{portfolio.title}</span> +
            </h1>
            <p className="text-white text-center text-lg  md:text-xl">
              {portfolio.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPortfolio;
