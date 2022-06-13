import React, { useState } from 'react';
import SmallCard from './SmallCard';

const productosTotal =  [];

const productTotal = async () => { 
    fetch('http://localhost:3001/api/products')
    .then(respuesta =>{
        console.log(respuesta)
    return respuesta.json()
    
    })
    .then(products =>{
    console.log(products)
    this.setState({productsList: products.products})
    })
    .catch(error => console.log(error))

    productTotal.map((product, i) => { 
    return productosTotal.push})
    console.log("jsdj")
}
  
let productInDataBase = {
    color:   "primary",
    titulo: "Total Productos",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total Usuaríos",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Total Categorías",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
} 
export default ContentRowTop;