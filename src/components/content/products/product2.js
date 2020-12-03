import React from "react"
function Product (props){
    return(
        <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="item-product">
            <div class="item-thumb-product">
                <img src={props.product.image_link1} alt="" class="product-thumb-front" />
                <img src={props.product.image_link2} alt="" class="product-thumb-behind" />
                <div class="info-product-cart">
                    <div class="inner-info-product-cart">
                        <ul>
                            <li><a href="" class="link-wishlist"><i class="fa fa-heart"></i></a></li>
                            <li><a href="" class="link-quick-view"><i class="fa fa-search"></i></a></li>
                            <li><a href="" class="link-compare"><i class="fa fa-external-link-square"></i></a></li>
                        </ul>
                        <a href="" class="link-product-add-cart">Add to cart</a>
                    </div>
                </div>
    <span class="status-product-new">{props.product.status}</span>
            </div>
            <div class="item-info-product">
                <h3><a href="">{props.product.name}</a></h3>
                <div class="info-product-price">
                    <span>${props.product.salery}</span>
                    <del>${props.product.prev_salery}</del>
                </div>
                <div class="product-rating-star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product
