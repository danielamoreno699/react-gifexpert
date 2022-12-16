import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['one punch'])

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return
    //console.log(newCategory)
  
    //categories.push(newCategory)

    //setcategories(categories.concat('valorant'))
    setcategories([newCategory, ...categories])
    //setcategories(cat => [...cat, 'valoranr])

     
    }
  
  return (
    <>
    {/*titulo */}
    <h1>GifExpert</h1>
    {/*input */}
    <AddCategory 
      onNewCategory={ (event) => onAddCategory(event)}
    //setcategories={setcategories}
    />
   
    {/*listado de Gif */}
    {/*<button onClick={ onAddCategory}>Agregar</button>*/}
    <ol>

      {
        categories.map( (category) => (

             <GifGrid 
                key={category} 
                category={category}/>
          /*<div key={category}>
            <h3> {category}</h3>
            <li >{category}</li>
          </div>*/
        ))
        
        /*<li key={category}>{category}</li>*/
      }
    
     
    </ol>
    {/* Gif item */}
    </>
  )
}
