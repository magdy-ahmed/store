// "images/home_1/logo.png"
import React ,{Component} from 'react'
import QuickLink from './quick_link'
import QuickLinks from './quick_links'
import Subscripe from './subscrip'
import ConectUs from './conect_us'
class Container extends Component {
    constructor(){
        super()
        this.state={
            image:{
                link:"/",
                image_link:"packages/images/home_1/logo.png"
            },
            social:{
                facebook:"/",
                twitter:"/",
                googleplus:"/",
                linkedin:"/",
                rss:"/"
            }
        }
    }
    render(){
        return(
            <footer id="footer">
                <Subscripe/>
                <QuickLinks/>
                <ConectUs image={this.state.image} social={this.state.social}/>
                
            </footer>
        );
    }
}
export default Container