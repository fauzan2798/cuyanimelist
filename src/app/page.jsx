import AnimeList from "../components/AnimeList"
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="populer"/>
        <AnimeList api={topAnime}/>?
      </section>
    </>
  )
}

export default Page