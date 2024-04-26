import AnimesContainer from "@/components/AnimesContainer";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import { fetchAnime } from "@/app/fetchAnime";

export default async function Home() {
  const animes = await fetchAnime(1);
  return (
    <main>
      <Hero />
      <AnimesContainer animes={animes} />
      <Loading />
    </main>
  );
}
