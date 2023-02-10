import {useState} from 'react';
import { Addcategory } from './components/Addcategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategory = (NewCategory) => {

//* Estamos creando una validacion para recorer el arreglo y ver si la nueva categoria es igual a alguna ya existente
        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory , ...categories] )

        // console.log(NewCategory)
    }

    return (
        <>
            <h1>GifExpertApp</h1>


                <Addcategory
                    // setCategories={setCategories}
                    // categories={categories}

                    onNewCategory={onAddCategory} 
                /> 

                {/* <button
                    className='btn btn-primary'
                    onClick={onAddCategory}
                >
                    Agregar
                </button> */}
            

            {
                categories.map( category => {
                    return (<GifGrid key={category} category={category}/>)
                })
            }
        
        </>
    )
}