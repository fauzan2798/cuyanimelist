"use client"

import React, { useEffect, useState } from "react"
import Pagination from "@/components/Utilities/Pagination"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import AnimeList from "@/components/AnimeList"

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
        const data = await response.json()

        console.log(data)
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination 
                page={page} 
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}/>
        </>
    )
}

export default Page