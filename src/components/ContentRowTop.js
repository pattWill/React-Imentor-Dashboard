import React from 'react';
import UsersInDb from './UsersInDb';
import ContentRowProducts from './ContentRowProducts';
import ProductsInDb from './ProductsInDb';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
			<div className='mainContent'>
				{/*<!-- Content Row Top -->*/}
				
					{/*<!-- Content Row Products Totals-->*/}
					<ContentRowProducts />
					{/*<!-- End Content Row Products Totals-->*/}
					
					<div className='mainContentTop mt-4'>
					{/*<!-- Content Row Categories Totals-->*/}
					<CategoriesInDb/>
					<LastProductInDb />
					</div>
					{/*<!-- Content Row Categories Totals-->*/}

					<div>
					{/*<!-- Users in DB -->*/}
					<UsersInDb />
					{/*<!--End Users In Db-->*/}
					{/*<!--Products In Db-->*/}
					<ProductsInDb />
					{/*<!--End Products In Db-->*/}
					</div>
				{/*<!--End Content Row Top-->*/}
				</div>
        </React.Fragment>
    )

}
export default ContentRowTop;