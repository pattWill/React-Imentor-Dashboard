import React, {useEffect, useState} from 'react';
function CategoriesInDb (){

    const [categories, setCategories ] = useState([])
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


        return (
            <>
                    {/*<!-- Categories in DB -->*/}
                    <div className="">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-2 bg-primary">
                                <h6 className="m-0 font-weight-bold">Categorías</h6>
                            </div>
                            <div className="card-body" id="">
                            <div className="">
                                {
                                    categories ? categories.map ((category,i)=> 
                                    <div><p key={category.name + i}>{category.name}</p></div>
                                    
                                ) : <p>No hay categorías disponibles</p>} 
                                </div>
                            </div>
                        </div>
                    </div>          
            </>
        )
    }
    
export default CategoriesInDb;