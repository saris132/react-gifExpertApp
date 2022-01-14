import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    //si se deja vacío abajo en el form se esta declarando que es texto, entonces marcaría un error, se debe
    //indicar que es un string vacío
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ((e)=>{
        setInputValue(e.target.value);
    })

    const handleSubmit = ((e)=>{
        //para prevenir que todo se refreque y desaparezca el valor insertado del formulario
        e.preventDefault();
        if (inputValue.trim().length > 2){
            //se llama a con un callback que tiene el estado anterior y se le agrega el nuevo elemento
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    })

    return (

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
