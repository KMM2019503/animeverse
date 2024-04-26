import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 ">
      <div className="lg:flex-1 relative w-full h-[35vh] justify-center">
        <Image
          src="/naruto_remove_bg.png"
          alt="anime"
          fill
          sizes="auto"
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-10">
        {/* <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
        /> */}
        <h1 className="md:text-3xl text-2x lg:max-w-lg font-bold leading-[120%] text-gray-200">
          Enter the<span className="text-orange-500"> Boundless Realms </span>{" "}
          of Anime Magic
        </h1>
      </div>
    </header>
  );
};

export default Hero;
