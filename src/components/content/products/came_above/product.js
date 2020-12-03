import React from 'react'
function product(){
    return(		
        <div className="item-product-category-leading">

        <div className="item-thumb-product">
    <a className="product-thumb-link" href="/">
        <img alt="" src="packages/images/product_home1/1.jpg"/>
    </a>
    <div className="leading-info-product-cart">
        <a className="product-thumb-link" href="/">
            <img alt="" src="packages/images/product_home1/1-1.jpg"/>
        </a>
        <div className="info-product-cart">
            <div className="inner-info-product-cart">
                <ul>
                    <li><a className="link-wishlist" href="/"><i className="fa fa-heart"></i></a></li>
                    <li><a className="link-quick-view" href="/"
                    
                    
                    ><i className="fa fa-search"></i></a></li>
                    <li><a className="link-compare" href="/"><i className="fa fa-external-link-square"></i></a></li>
                </ul>
                <a className="link-product-add-cart" href="/">Add to cart</a>
                <div className="info-product-price">
                    <span>$489.99</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
);
}
export default product