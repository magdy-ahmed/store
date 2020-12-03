import React ,{Component} from "react"
import products from '../../../data/products'
import Product from './product'
class Products extends Component{
    constructor(){
        super()
        this.state={
            products:products
        }
    }
    render(){
        const products = this.state.products.map(()=><Product />)
        return(	

            <div className="content-category-leading">
                            
                 <prod/>
                 {products}
            
            </div>
        );
    }

}
export default Products