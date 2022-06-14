import React from 'react';
import UsersInDb from './UsersInDb';
import ContentRowProducts from './ContentRowProducts';
import ProductsInDb from './ProductsInDb';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Products Totals-->*/}
					<ContentRowProducts />
					{/*<!-- End Content Row Products Totals-->*/}

					<div className="container-fluid">
					<CategoriesInDb/>
					<LastProductInDb />
	
					{/*<!-- Users in DB -->*/}
					<UsersInDb />
					{/*<!--End Users In Db-->*/}
					</div>

					<div className="container-fluid">
					{/*<!--Products In Db-->*/}
					<ProductsInDb />
					{/*<!--End Products In Db-->*/}
					</div>
					</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;