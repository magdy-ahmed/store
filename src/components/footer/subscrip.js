import React from 'react'
function Subscripe(){
    return(
        <div class="footer-newsletter">
            <div class="container">
                <div class="newsletter-intro">
                    <span class="envalope-icon"><i class="fa fa-envelope-o"></i></span>
                    <p>SUBSCRIBE TO OUR NEWSLETTER TO RECEIVE NEWS, <br/>UPDATES, AND ANOTHER STUFF BY EMAIL.</p>
                </div>
                <div class="newsletter-form">
                    <form method="post">
                        <input type="text" name="newsletter" value="Enter your email..." onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue"  />
                        <input type="submit" value="subscribe" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Subscripe