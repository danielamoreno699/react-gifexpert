import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchgGifs } from "../hooks/useFetchgGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchgGifs(category)
    //console.log( isLoading)


  return (
    <>
        <h3>{category}</h3>
    {
        isLoading && (<h2>cargando ...</h2>)
        

    }
        <h2> cargando</h2>

        <div className="card-grid">
        {   images.map( (image) => ( 

            <GifItem 
                key={image.id}
                {... image}
                /*title ={image.title}
                url = {image.url}*/
                
            />
        ))
        }
        </div>
        

    </>
  )
}
