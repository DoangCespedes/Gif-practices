import React, { useState } from 'react'

export const Addcategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      //* hacemos un condicional para validar la función para que nos lea cuantos digitos tenemos , para no enviar data menor o igual a 1
      if( inputValue.trim().length <= 1 ) return;

      // setCategories([inputValue , ...categories]);

      onNewCategory( inputValue.trim() );
      setInputValue('')
    }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>


  )
}
