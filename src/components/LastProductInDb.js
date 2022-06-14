import React, {useState, useEffect} from 'react';
import Products from './Products';

function LastProductInDb(){

    const [lastProduct, setLastProduct ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3001/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        let last = products.products[products.products.length - 1]
        setLastProduct(last)
        })
        .catch(error => console.log(error))
    }, [] ) 

    console.log(lastProduct)
    return (
        <>
        <div className="row">		
        <div className="">
            <div className="card shadow mb-4">
                            <div className="card-header py-2 bg-primary">
                                <h6 className="m-0 font-weight-bold">Último producto agregado</h6>
                            </div>
                            <div className="card-body">
                                <h3>{lastProduct.name}</h3> {' '}
                                <p>{lastProduct.description} </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default LastProductInDb;