import { useState } from "react"
import { Input } from "./components/Input";
import { GifList } from "./components/GifList";
import { Jumbotron  } from "./components/jumbotron/Jumbotron"

export const GifApp = () => {
    const [categories, setCategories] = useState([]);

    const onChangeCategory = (newCategory) => {
        setCategories([newCategory]);
    }
    return (
        <>

            <Jumbotron title="GIF - APP" subtitle="Busca tus Gif favoritos"/>

            <div className="flex gap-x-2 p-2 w-6/12">
                <Input onChangeCategory={onChangeCategory} ></Input>
            </div>

            {
                categories.map((category) => <GifList key={category} category={category} />)
            }
        </>
    )
}


