const Hero = () => {
  return (
    <section className="h-screen flex justify-center content-center bg-gradient-to-b from-primary to-white ">
      <div className="container grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="text-center text-white flex justify-center items-center">
          <div>
            <h1 className="text-5xl tracking-wider font-hero leading-snug">
              Front-End
              <br />
              Developer
            </h1>
            <h2 className="text-lg font-semibold pt-5">Hi, I'm</h2>
            <h1 className="text-2xl font-bold tracking-widest">
              Roya Shahroudi
            </h1>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <img src="/images/home/hero.svg" className="w-96 md:w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
