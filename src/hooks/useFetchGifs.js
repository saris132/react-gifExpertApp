import { useState, useEffect } from "react"
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //[] al final hace que getGifts no se actualice por si solo si hay un cambio en otro componente.
    //luego se cambio por [category], solo se dispara de nuevo si la categoría cambia, esto se hizo para 
    //quitar un warning del inspector
    //el use efect se utiliza porque cada vez que cambiaba el estado del componente GifGrid se volvia a 
    //correr todo, y el useEfect previene ese comportamiento.
    useEffect(() => {

        
        getGifts(category)
        //es lo mismo si solo tengo un argumento, fue para un ejemplo anterior
            //.then(imgs=>setImages(imgs))
            //.then(setImages)
        .then(imgs=>{
            setState({
                data: imgs,
                loading: false
            })
        })
    
        
    }, [category]) 

    return state;
}
