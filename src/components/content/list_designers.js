import React,{Component}  from 'react'
class ListDesigners extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(<div className="list-designer">
        <div class="container">
            <div className="content-list-designer">
                <label>DESIGNERS:</label>
                <ul className="list-inline">
                    <li className="item-designer">
                        <a href="/" className="designer-thumb">
                            <img src="packages/images/home_1/page1-img6.jpg" alt="/" />
                        </a>
                        <h3><a href="/">Elizabet Sosuna</a></h3>
                    </li>
                    <li className="item-designer">
                        <a href="/" className="designer-thumb">
                            <img src="packages/images/home_1/page1-img5.jpg" alt="/" />
                        </a>
                        <h3><a href="/">David Cilezege</a></h3>
                    </li>
                    <li className="item-designer">
                        <a href="/" className="designer-thumb">
                            <img src="packages/images/home_1/page1-img4.jpg" alt="/" />
                        </a>
                        <h3><a href="/">Ana Hovurt</a></h3>
                    </li>
                </ul>
                <a href="/" className="see-all-designer">see all designers</a>
            </div>
        </div>
    </div>

);
    }
}
export default ListDesigners