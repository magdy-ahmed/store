import React from "react"
function MenuPages(props){
    return(
    <li className="menu-item-has-children">
		<a href="#">Home</a>
            <ul className="sub-menu">
				<li><a href="home1.html">Home 1</a></li>
				<li><a href="home2.html">Home 2</a></li>
				<li><a href="home3.html">Home 3</a></li>
				<li><a href="list.html">List</a></li>
				<li><a href="grid.html">Grid</a></li>
				<li><a href="detail.html">Detail</a></li>
			</ul>
    </li>
    );
}
export default MenuPages;