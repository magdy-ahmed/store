import React ,{Component} from 'react'
import QuickLink from './quick_link';

class QuikLinks extends Component{
    constructor(){
        super()
        this.state={
            links :[{
                id:1,
                name:"1",
                link:"/"
            },{
                id:2,
                name:"1",
                link:"/"
            },{
                id:3,
                name:"1",
                link:"/"
            },{
                id:4,
                name:"1",
                link:"/"
            },{
                id:5,
                name:"1",
                link:"/"
            },{
                id:6,
                name:"1",
                link:"/"
            },{
                id:7,
                name:"1",
                link:"/"
            },{
                id:8,
                name:"1",
                link:"/"
            }]
        }

    }
    render(){
        const Links = this.state.links.map(link =><QuickLink key={link.id} link={link} />)
        return(
            <div class="footer-quick-search">
                <div class="container">
                    <div class="content-quick-search">
                        <label>Quick link:</label>
                        {Links}
                    </div>
                </div>
            </div>
        );
    }
}
export default QuikLinks 