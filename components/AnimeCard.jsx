import Image from "next/image";

// Icons
import { FiAirplay } from "react-icons/fi";
import { GiFallingStar } from "react-icons/gi";

// motions
import { MotionDiv } from "./MotionDiv";

// varients

const variants = {
  hidden: { opacity: 0 },
  visiable: { opacity: 1 },
};

const AnimeCard = ({ anime, index }) => {
  return (
    <>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visiable"
        transition={{ duration: 1, delay: index * 0.3, ease: "easeInOut" }}
        className="shadow-2xl bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 px-[10px] py-5 rounded-se-2xl lg:max-w-[240px] lg:w-[240px] max-w-[350px] w-[350px] md:w-[350px] md:max-w-[350px] cursor-pointer"
      >
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt="cover photo"
          width={200}
          height={350}
          className="rounded-lg lg:w-[220px] lg:h-[300px] w-[330px] h-[400px] md:w-[330px] md:h-[400px] object-cover"
        />

        {/* description */}
        <div className="mt-3 text-center">
          <h2 className="line-clamp-1 w-full text-orange-500 text-xs font-bold">
            {anime.name}
          </h2>

          <div className="flex justify-around items-center mt-3">
            <div className="py-1 ">
              <p className="text-white text-xs font-bold capitalize flex items-center">
                <FiAirplay className="mr-1 w-5 h-5 text-orange-500" />
                <strong className="text-red-500">{anime.kind}</strong>
              </p>
            </div>
            <div className="py-1">
              <p className="text-white text-xs font-bold capitalize flex items-center justify-between">
                <GiFallingStar className="mr-1 w-5 h-5 text-orange-500" />
                <strong className="text-red-500">{anime.score}</strong>
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default AnimeCard;
