import React from 'react';

function Categories(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Categories;