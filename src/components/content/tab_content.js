import React from "react"
import Products from "./products/products"
function Tab_content(){
return(

        <div className="tab-content">
					<div role="tabpanel" className="tab-pane active" id="popular">
						<div className="content-product-slider">
							<div className="wrap-item">

									<Products/>
								


						</div>

</div>

						<div role="tabpanel" className="tab-pane" id="seller">
<div className="content-product-slider">
							<div className="wrap-item">
						<Products/>
						</div>
						</div>
						
						</div>

						<div role="tabpanel" className="tab-pane" id="special">
<div className="content-product-slider">
							<div className="wrap-item">
						<Products/>
						</div>
						</div>
						
						</div>
						</div>
						</div>
);						
}
export default Tab_content



