import React from "react"
function Model_product(props){
return(
    <div className="col-md-6 col-sm-6 col-xs-12">
			<div className="mega-menu-simple-banner text-outer">
				    <div className="mega-menu-simple-thumb">
					    <a href={props.product.link}><img src={props.product.link_image} alt="" /></a>
					</div>
                <div className="mega-menu-simple-text">
<p className="mega-menu-text-intro"><strong>{props.product.category}</strong>  <span>{props.product.desc_category}</span></p>
			    </div>
			</div>
														
	</div>
);
} 
export default Model_product