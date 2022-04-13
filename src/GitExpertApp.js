import React, { useState } from 'react'
import {AddCategory} from '../src/components/AddCategory'
import { GifGrid } from '../src/components/GifGrid';
export const GitExpertApp = () => {

  
  const [categorias, setCategorias] = useState(['One punch']);


 

  return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>
        <ol>
          {
            categorias.map( category => (
              <GifGrid
                key={category} 
                category={ category } 
              />
            ))
          }
        </ol>
   
    </>
  )
}
