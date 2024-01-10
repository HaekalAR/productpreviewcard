const Card = () => {
  return (
    <div className="w-full md:h-screen min-h-screen bg-r-cream flex items-center justify-center p-4">
      <div className="w-[34em] rounded-xl overflow-hidden h-fit md:flex bg-white">
        <div className="md:w-[50%]">
          <img
            src="/image-product-desktop.jpg"
            alt="Desktop-image"
            className="md:h-full h-[15em] w-full  object-cover"
          />
        </div>
        <div className="md:w-[50%] h-full p-7 bg-white  ">
          <div className="flex flex-col gap-4 bg-white">
            <h3 className="uppercase font-Montserrat tracking-wide text-dark-grayish-blue font-[500] text-xs">
              P e r f u m e
            </h3>
            <h1 className=" font-Fraunces text-3xl font-[700] text-very-dark-blue">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-Montserrat text-sm text-dark-grayish-blue font-[500]">
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfume-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-3">
              <h1 className="font-Fraunces font-[700] text-3xl text-dark-cyan">
                $149.99
              </h1>
              <p className="line-through text-dark-grayish-blue text-xs font-[600]">
                $169.99
              </p>
            </div>
            <div className="flex hover:cursor-pointer hover:bg-more-dark-cyan bg-dark-cyan rounded-md py-4 items-center justify-center gap-2 font-Montserrat text-xs font-[600] transition-all duration-200">
              <img src="/icon-cart.svg" />
              <button className="text-center font-Montserrat text-r-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
