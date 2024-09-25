import { useEffect, useState } from "react"
import { fetchGif } from "../helpers/fetchGif"
import { GifItem } from "./GifItem"


// eslint-disable-next-line react/prop-types
export const GifList = ({ category }) => {

  const [gifList, setGifList] = useState([])
  const [looading, setLoading] = useState(false)

  const getGifs = async () => {
    setLoading(true);
    const response = await fetchGif(category);
    setLoading(false);
    setGifList(response);
  }

  useEffect(() => { getGifs() }, [])


  return (
    <>
      {
        looading ? <p>Cargando... </p> : (
          <>
            <h2 className="mt-5 mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {category}
            </h2>
            <hr />

            <ul className="flex flex-wrap gap-8 mt-6">
              {gifList.map((gif) => (
                <GifItem key={gif.id} {...gif} />
              ))}
            </ul>
            {
              !gifList.length && <p> No se han encontrado resultados</p>
            }
          </>)

      }

    </>
  )
}
