import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //si necesito agregar algo a lista no se puede por ser constante
    //const categories =['One Punch','Sakura','Avatar'];
    const [categories, setCategories] = useState(['Avatar']);

    /*
    const handleAdd = (()=>{
        //usar el operador spred para mantener las categorías anteriores y añadir
        //setCategories([...categories, 'Samurai X']);
        //otra manera con callback
        setCategories(cats => [...categories, 'Samurai X']);
    });
    */

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    categories.map(category=>
                        //el key es casi que obligatorio y no puede ser el indice porque hay problemas al eliminar datos.
                        //Como normalmente va anclado a una base de datos el key sera el codigo unico de la base de datos.
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
