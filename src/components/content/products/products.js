import React , {Component} from "react"
import Product from './product'
import Products_data from '../../data/products'
class Products extends Component{
    constructor(){
        super()
        this.state={
            products:Products_data    
        }
    }
    render(){
        const products = this.state.products.map(product=><Product key={product.id} product={product}/>)
        return(
   
                    <div class="item">
						
						<div class="row">
                            {products}
                        </div>
           
            </div>          
        )

    }
}
export default Products