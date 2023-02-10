CUANDO QUEREMOS RECORRER UN ARREGLO USAMOS UN MAP, EJM:

const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

                <ol>
                {
                    categories.map( category => {
                        return <li key={ category } > {category} </li>
                    })
                }
                </ol>
asi de esta manera recorremos el arreglo dentro de una lista.
PARA VERLO MEJOR LEER EL COMPONENTE GifExpertApp

/*-------------------------------------------------------------------------------------------*/

CUANDO QUEREMOS CREAR UN INPUT DE TEXTO QUE RECOLECTE LA INFORMACION ESCRITA
creamos un estado , lo inicializamos con un string, numero lo que sea y tambien una funcion onchange que setee el cambio del input y al metodo setEjemplo(event.target.value);
y en los parametros del input ponemos el nombre de la funcion en onchange. 

EL EJM MAS CLARO LO PODEMOS DE VER EN EL MODULO Addcategory.jsx

/*---------------------------------------------------------------------------------------*/

hacemos un condicional para validar la función para que nos lea cuantos digitos tenemos , para no enviar data menor o igual a 1

      if( inputValue.trim().length <= 1 ) return;

/*--------------------------------------------------------------------------------------*/

Estamos creando una validacion para recorer el arreglo y ver si la nueva categoria es igual a alguna ya existente
        if (categories.includes(NewCategory)) return;

        
