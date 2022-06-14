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

					</div>
				
					{/*<!-- Content Row Products Totals-->*/}
					<ContentRowProducts />
					{/*<!-- End Content Row Products Totals-->*/}

					{/*<!-- Content Row Categories Totals-->*/}
					<div className="row">
					<CategoriesInDb/>
					<LastProductInDb />
					</div>
					{/*<!-- Content Row Categories Totals-->*/}

					{/*<!-- Users in DB -->*/}
					<div className=""></div>
					<UsersInDb />
					{/*<!--End Users In Db-->*/}
					

					<div className="">
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