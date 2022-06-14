import React, {useState, useEffect} from 'react';
import Products from './Products';

function LastProductInDb(){

    const [lastProduct, setLastProduct ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3001/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(lastProduct =>{
        setLastProduct(lastProduct.products[lastProduct.products.length - 1])
        })
        .catch(error => console.log(error))
    } ) 
 
    return (
        <>                      <div className="card-body" id="caja1">
                                       <div className="row">
                                <p>Acá va el último producto en la base de datos</p>
                                </div>
                                </div>
        </>
    )
}
export default LastProductInDb;