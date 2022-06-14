import React, {useEffect, useState} from 'react';
import Categories  from './Categories';


function CategoriesInDb (){

    const [categories, setCategories ] = useState()
    useEffect( ()=> {
        fetch('http://localhost:3001/api/categories')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(categories =>{
        setCategories(categories.categories)
        })
        .catch(error => console.log(error))
    }, [])

    console.log(categories)
    
    let categorias = [ {
        name: 'front'}, {
        name: 'back'
        } ]

        const fondoCaja = (e) => {
        let div = document.querySelector('#caja1')
        div.classList.add('bg-secondary')
    }

        return (
            <>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={e => fondoCaja(e)} className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                            </div>
                            <div className="card-body" id="caja1">
                            <div className="row">
                                {
                                    categorias.map((category,i)=> { 
                                    <div><p key={category.name + i}>{category.name + i}</p></div>
                                    }
                                )} 
                                </div>
                            </div>
                        </div>
                    </div>          
            </>
        )
    }
    
export default CategoriesInDb;