import React, {Component} from 'react';
import Categories  from './Categories';


class CategoriesInDbOld extends Component{
    constructor(){
        super()
        this.state={
            categoriesList: []
        }   
    }


    componentDidMount()
    {

        fetch('http://localhost:3001/api/categories')
        .then(respuesta =>{
        return respuesta.json()
        
        })
        .then(categories =>{
        console.log(categories)
        this.setState({categoriesList: categories.categories})
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
                                <h6 onMouseOver={this.fondoCaja} className="m-0 font-weight-bold text-gray-800">Lista de categorias</h6>
                            </div>
                            <div className="card-body" id="caja1">
                                <div className="row">
                                    {
                                        this.state.categoriesList.map((category,index)=>{
                                            return  <Categories  {...category}  key={index} />
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
export default CategoriesInDbOld;