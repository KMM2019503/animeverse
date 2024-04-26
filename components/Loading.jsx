"use client";
import { fetchAnime } from "@/app/fetchAnime";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimesContainer from "./AnimesContainer";

let page = 2;

const Loading = () => {
  const { ref, inView } = useInView();
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setAnimes((prevAnimes) => [...prevAnimes, ...res]);
        page++;
      });
    }
  }, [inView]);

  return (
    <>
      <AnimesContainer animes={animes} />
      {/* Moved AnimesContainer outside of conditional rendering */}
      <section className="flex justify-center items-center w-full" ref={ref}>
        <div>
          <Image
            src="/loading.svg"
            alt="spinner"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Loading;
