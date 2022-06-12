import React, {Component} from 'react';
import Products  from './Products';


class ProductsInDb extends Component{
    constructor(){
        super()
        this.state={
            productsList: []
        }   
    }


    componentDidMount()
    {

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
    }

    fondoCaja(){
        let div = document.querySelector('#caja1')
        div.classList.add('bg-secondary')

    }

    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4 width: 100%">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={this.fondoCaja} className="m-0 font-weight-bold text-gray-800">Lista de Productos</h6>
                            </div>
                            <div className="card-body" id="caja1">
                                <div className="row">
                                    {
                                        this.state.productsList.map((product,index)=>{
                                            return  <Products  {...product}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }
    

}
export default ProductsInDb;