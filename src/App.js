import React , {Component} from 'react'
import './App.css';
import Header from './components/header/header'
import Content from "./components/content/content"
import TitleBox from './components/content/products/title_box'
import TitleBox2 from './components/content/products/title_box2'
import Products from "./components/content/products/products"
import TabContent from "./components/content/tab_content"
import CollectionsAnimation from "./components/content/collections_animation"
import ListDesigners from './components/content/list_designers';
import Container from './components/content/products/came_above/container'
import Servises from './components/content/customer_servises/Servises'
import OurBlog from './components/content/our_blog/Container'
import QuickLinks from './components/footer/container'

class App extends Component{
  constructor() {
    super()
    this.state = {
      
 }
}
render() {
  return (
    <div className="App home-page">
    	<div className="wrap">
    		<Header/>
        		<div id="content">
        			<Content/>
				</div>

        	<div className="new-arrival-product">
				<div className="container">
					<TitleBox />
					<div className="content-product-slider">
						<div className="wrap-item">
							<Products/>  								
                   		</div>
                    </div>
        		</div>
      		</div>


			<CollectionsAnimation/>
			<div className="new-arrival-product">
				<div className="container">
					<TitleBox2/>
					<TabContent/>
				</div>
			</div>

			<ListDesigners/>




			<Container/>

			<Servises/>

			<OurBlog/>
	</div>
			<QuickLinks/>



</div>
  );
}
}


  export default App;
