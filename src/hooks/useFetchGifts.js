import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const useFetchGifts = (category) => {

    
    const [images, setImages] = useState([])
    
        const getImagenes = async () => {
            const newImages = await getGif(category)
    
            setImages(newImages)
        }
    
    
        useEffect(() => {
            getImagenes()
        }, [])


    return {
        images
    }
}

