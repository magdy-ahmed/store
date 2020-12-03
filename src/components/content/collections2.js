import React , {Component} from "react"
import Collection from "./collection"
class Collections extends Component {
    constructor(){
        super()
        this.state={
            collections:[
                {
                id:1,
                link:"",
                image_link:"./packages/images/home_1/ad_03.png",
                search_link:"",
                title:"",
                title2:"Collection",
                title1:"Women",
            },{
                
                id:1,
                link:"",
                image_link:"./packages/images/home_1/ad_04.png",
                search_link:"",
                title:"",
                title2:"Collection",
                title1:"girl",
                
            }
        ]
        }
    }
    render(){
        const collections= this.state.collections.map(collection=><Collection key={collection.id} collection={collection}/>)
        return(
            <div class="row">
                {collections}
        </div>
        );
    }

}
export default Collections 