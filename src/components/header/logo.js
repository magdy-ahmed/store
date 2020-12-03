import React  from  'react'
function Logo(props){
    return(
        
        <div className="logo">
        <a href="index.html"><img src={props.link} alt="" /></a>
        </div>
    )
}
export default Logo
// "packages/images/home_1/logo.png"
// onFocus={function(){if (this.value==this.defaultValue) this.value = ''}}onBlur={function()if(this.value=='') this.value = this.defaultValue