import React, {useState, useEffect} from 'react';
import Products  from './Products';

function ProductsByCategory() { 
const [ProductsByCategory, setProducts ] = useState('')
useEffect( ( )=> {
    fetch('http://localhost:3001/api/products')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(ProductsByCategory =>{
    setProducts(ProductsByCategory.countByCategory)
    })
    .catch(error => console.log(error))
}, [] )

console.log(ProductsByCategory)


        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="">					
                        <div className="card shadow mr-4">
                            <div className="card-header py-2 bg-primary ">
                                <h6 className="m-0 font-weight-bold">Productos por Categoría</h6>
                            </div>
                            <div className="card-body-category mh-100">
                                
                                <p>Front End: {ProductsByCategory.front_End}</p> {' '}
                                <p>Back End: {ProductsByCategory.back_End}</p> {' '}
                                <p>UI UX: {ProductsByCategory.ui_ux}</p> {' '}
                                <p>Base de Datos: {ProductsByCategory.base_de_datos}</p> {' '}
                                <p>Marketing Digital: {ProductsByCategory.marketing_digital}</p> {' '}
                                <p>Análisis de datos: {ProductsByCategory.analisis_de_datos}</p> {' '}
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

export default ProductsByCategory;