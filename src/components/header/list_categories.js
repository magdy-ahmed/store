import React ,{Component} from "react"
import Category from "./category"
class List_categories extends Component{
    constructor(){
        super()
        this.state={
            categories:[{
                id:1,
                link:"link",
                name:"name"

            },{
                id:2,
                link:"link",
                name:"name"
            }
        ]
        }
    }

render(){
    const Categories = this.state.categories.map(category=><Category  key = {category.id }category={category}/>)
    return(
        <div className="col-md-3 col-sm-3 col-xs-12">
			<div className="mega-menu-list-category">
				<h2>Categories</h2>
				<ul>
                    {Categories}
				   {/* <li><a href="#">Tops</a></li>
				   <li><a href="#">Sweaters</a></li>
				   <li><a href="#">Bottoms</a></li>
				   <li><a href="#">Dresses</a></li>
				   <li><a href="#">Coats &amp; Jackets</a></li>
				   <li><a href="#">Scarves</a></li>
				   <li><a href="#">Pants</a></li> */}
				</ul>
			</div>
        </div>
    );
}
}
export default List_categories