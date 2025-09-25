import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiffItem } from "./GifItem";

export const GridGif = ({category}) => {

    const {images} = useFetchGifts(category)

    //console.log(images)

    return ( 
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {/* {
                images.map(({ imagen }) => (
                    <GiffItem key={imagen.id}
                    {...imagen}
                    />
                ))
            } */}

            {
                images.map((img) => (
                    <GiffItem key={img.id} {...img} />
                ))
                
            }

            
            </div>

        </>
     );
}

