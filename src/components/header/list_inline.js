import React , {Component} from "react"
import Category from "./category"
import MenuPages from './menu-pages';
import Wrap_products from "./wrap_products"
import Model_product from "./model_product"
import List_categories from "./list_categories"
import Brand_items from "./brand_items"
class List_inline extends Component{
    constructor (){
        super()
        this.state={
            categories:[{
                id:1,
                link:"#",
                name:"name"
            },{
                id:2,
                link:"#",
                name:"name"
            }]
        }
        
    }

    render(){
        const Categories = this.state.categories.map(category=><Category key={category.id} category={category}/>)
        return(
            <ul className="list-inline">
								       
            <MenuPages/>
            <Wrap_products/>
     <li className="has-mega-menu">
                         <a href="#">Satchel Totes</a>
                         <ul className="sub-menu">
                             <li>
                                 <div className="wrap-mega-menu">
                                     <div className="row">
                                         <Model_product product={{link_image:"link_image",desc_category:"desc_categore",link:"link",category:"category"}}/>

                                         
                                         
                                         <List_categories/>
         
                                             <Brand_items/>
                     
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </li>
            {Categories}</ul>
        );
    }
}
export default List_inline