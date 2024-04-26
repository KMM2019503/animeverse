import AnimeCard from "./AnimeCard";

const AnimesContainer = ({ animes }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7 lg:my-8 lg:mx-20">
      {animes ? (
        animes
      ) : (
        <>
          <p className="text-white">there is no data</p>
        </>
      )}
    </div>
  );
};

export default AnimesContainer;
