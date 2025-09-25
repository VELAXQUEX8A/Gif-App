import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGif } from "./components/GridGif";

export const GifApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (category) => {
        if(categories.includes(category)) return
        setCategories([category, ...categories])
    }



    return (  
        <>
            {/* titulo */}
            
            <h1>Hola desde GifApp</h1>

            {/* input */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>


            {/* listados */}
            
                {/* items */}
                {
                    categories.map((category) =>(
                        <GridGif key={category} category={category}/>
                    ))
                }
        </>
    );
}