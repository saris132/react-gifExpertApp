import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //así se renombra data:images
    const {data:images, loading} = useFetchGifs(category);

    return (
        //solo se puede devolver un objeto o daría error, h3 y div son dos objetos, por lo que se envuelve todo
        //dentro de un fragment
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            
            {/*  Solo se necesita evaluar si cumple, en este caso el operador ternario hace que se evaluen los dos casos
            {loading?<p>loading...</p>:null} */}
            {loading&&<p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>            
                {
                    images.map(img =>(
                        //<li key={img.id}>{img.title}</li>
                        <GifGridItem 
                            key={img.id}
                            //img={img}
                            //otra manera de enviarlo, con la diferencia que envia las propiedades separadas
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
