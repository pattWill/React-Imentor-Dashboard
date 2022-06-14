
import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow">
                    <div className="">
                     {props.id} {' - '} {props.name} 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;