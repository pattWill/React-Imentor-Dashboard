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
        console.log(last)
        products.push(last)
        setLastProduct(last)
        })
        .catch(error => console.log(error))
    } ) 

    console.log(lastProduct)

    return (
        <>
           
        </>
    )
}
export default LastProductInDb;