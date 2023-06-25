const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Defend Your Eyes Against Harmful
              <br className="hidden lg:inline-block" />
              Blue Light
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover our range of stylish and effective anti-blue ray glasses
              designed to reduce eye strain and promote eye health. Experience
              enhanced visual comfort and protect your eyes in the digital age.
            </p>
            <div className="flex justify-center">
              <a
                href={"#product"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1687702394/Website-assets/blueDefender/52d47dfb2e0adc4eb40575c62664b8e4_kvmufn.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
