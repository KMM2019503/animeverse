"use server";

import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page) => {
  try {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
    );
    const data = await res.json();

    return data.map((anime, index) => (
      <AnimeCard key={anime.id} anime={anime} index={index} />
    ));
  } catch (error) {
    console.log("Error in fetchAnime", error);
  }
};
