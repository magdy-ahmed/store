import React from "react"
function Product (props){
    return(
        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="item-product">
            <div className="item-thumb-product">
                <img src={props.product.image_link1} alt="/" className="product-thumb-front" />
                <img src={props.product.image_link2} alt="/" className="product-thumb-behind" />
                <div className="info-product-cart">
                    <div className="inner-info-product-cart">
                        <ul>
                            <li><a href="/" className="link-wishlist"><i className="fa fa-heart"></i></a></li>
                            <li><a href="/" className="link-quick-view"><i className="fa fa-search"></i></a></li>
                            <li><a href="/" className="link-compare"><i className="fa fa-external-link-square"></i></a></li>
                        </ul>
                        <a href="/" className="link-product-add-cart">Add to cart</a>
                    </div>
                </div>
    <span className="status-product-new">{props.product.status}</span>
            </div>
            <div className="item-info-product">
                <h3><a href="/">{props.product.name}</a></h3>
                <div className="info-product-price">
                    <span>${props.product.salery}</span>
                    <del>${props.product.prev_salery}</del>
                </div>
                <div className="product-rating-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product
