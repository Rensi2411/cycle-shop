function navbar (){
    return ` <div class = "head">

    <div class="nav2">
    <img src="https://i.pinimg.com/originals/db/12/20/db122066a33621a40e3783f69e2477d2.jpg"alt="logo1" class="bewa">
    <div class="nav2-1">
   <nav>
    
      <div class="wrappe">
       
        <input type="radio" name="slider" id="menu-btn">
        <input type="radio" name="slider" id="close-btn">
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
          
          <li>
            <a href="#" class="desktop-item">MOUNTAIN</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">MOUNTAIN</label>
            <div class="mega-box">
              <div class="content">
               
                <div class="row">
                  <ul class="mega-links">
                  <li><a href="">Cross Country</a></li>
                  <li><a href="">Downhill</a></li>
                  <li><a href="">Dirt Jump</a><li>
                  <li><a href="">Frames</a></li>
                  
                  </ul>
                </div>
                
                
              </div>
            </div>
          </li>

          <li>
            <a href="#" class="desktop-item">ROAD</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">ROAD</label>
            <div class="mega-box">
              <div class="content">
               
                <div class="row">
                  <ul class="mega-links">
                    <li><a href="#">Performance</a></li>
                    <li><a href="#">Gravel</a></li>
                    <li><a href="#">Cyclocross</a></li>
                    <li><a href="#">Triathlon</a></li>
                    
                    
                  </ul>
                </div>
                
                
              </div>
            </div>
          </li>
         
          <li>
            <a href="#" class="desktop-item">ACTIVE</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">ACTIVE</label>
            <div class="mega-box">
              <div class="content">
               
                <div class="row">
                  <ul class="mega-links">
                    <li><a href="#">Fitness</a></li>
                    <li><a href="#">Transport</a></li>
                    <li><a href="#">Comfort</a></li>
                   
                  </ul>
                </div>
               
                
              </div>
            </div>
          </li>

          <li>
            <a href="#" class="desktop-item">ELECTRIC</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">ELECTRIC</label>
            <div class="mega-box">
              <div class="content">
               
                <div class="row">
                  <ul class="mega-links">
                    <li><a href="#">Road</a></li>
                    <li><a href="#">Mountain</a></li>
                    <li><a href="#">Active</a></li>
                    
                    
                  </ul>
                </div>
                
                
              </div>
            </div>
          </li>
         

          <li>
            <a href="#" class="desktop-item">KIDS</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">KIDS</label>
            <div class="mega-box">
              <div class="content">
               
                <div class="row">
                  <ul class="mega-links">
                    <li><a href="#">Toddler</a></li>
                    <li><a href="#">Little Kids</a></li>
                    <li><a href="#">Big Kids</a></li>
                    
                    
                  </ul>
                </div>
                
                
              </div>
            </div>
          </li>
         
          
        </ul>
        <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
      </div>
      <div class="oologo">
        <img src="data:image/png;base64,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">
      </div>

    </nav>
  
        
      </div> 

    <div class="nav2-2">
          
        <i class="fa-solid fa-magnifying-glass" style="color: #ffffff; margin: 0px 0px 0px 60px;"></i>
          <input type="search" placeholder="Search" >
          <a href="../login.html" id="login_text" >Login</a>
          <span id="username_text"></span>
          
          <button id="logout_text">Logout</button>
          <a href="" <i class="fa-regular fa-heart" id="abcd" style="color: #ffffff;"></i></a>
          <a href="" <i class="fa-solid fa-cart-shopping" id="abcd" style="color: #ffffff;"></i></a>
      </div>
      
  </div>





<hr>

<div class="nav-b">
    <div class="nav-b1">
        <i class="fa-solid fa-location-dot"  id ="abcd" style="color: #e9a920;"></i>
        <p>About us</p>
        <p>Delivery</p>
        <p>Payment</p>
        <p style="margin-right: 30px;">Contact</p>
    </div>
</div>
</div>`
}
export default navbar;


