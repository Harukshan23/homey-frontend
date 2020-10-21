import Base from './../Base.js'

export default class PropertyDetails extends Base {

  css =  `
  @import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:18px;
  }
  img {
    max-width: 100%;
    display: block;
  }
  
  /****************
  Typography
  ****************/
  
  /**********************
  Layout 
  **************************/
  body {
    padding-top: 30px;
  }
  .container {
    position: absolute;
    width: 90%;
    margin-left: 28%;
    margin-top: 5%;
    max-width: 767.98px;
    color: #000;
    padding: 15px;
    z-index:10;
  }
  
  /*colors
      orange #ff4000
      green #34a832
      dark blue  #001f3f
  
  /*Property select area */
  .properties form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .select_properties {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .select_property {
    width: 15%;
  }
  .select_property input {
    margin-right: 15px;
  }
  
  /* about */
  .container_about {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .container_about aside {
    width: 32%;
  }
  .container_about main {
    width: 65%;
  }
  .about_main_image {
    margin-bottom: 20px;
  }
  .about_sub_images {
    display: flex;
    justify-content: space-between;
  }
  .about_sub_image {
    width: 20%;
  }
  
  .about_section {
    display: flex;
    flex-wrap: wrap;
  }
  .about_section_details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    color: #ff4000;
  }
  .about_icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 10px;
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
  }
  .about-p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 20px;
  }
  .about_section_details h2 {
    margin-bottom: 20px;
    display: block;
  }
  
  .select_property_about {
    font: 1.5em Times New Roman;
    width: 25%;
  }
  .select_property_about input {
    margin-right: 15px;
  }
  .select_property_about label {
    color: black;
  }
  input:checked + label {
    color: #ff4000;
  }
  :checked {
    margin-left: 2px;
  }
  
  input[type='checkbox']:checked {
    box-shadow: 0 0 0 2px #ff4000;
  }
  
  /* *********************
  Components
   **************************/
  /* Buttons */
  
  .btn {
    display: block;
    border: none;
  
    font-size: 16px;
    font-weight: bolder;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-align: center;
    color: #fff;
    padding: 0.5em 2em;
    border-radius: 20px;
    transition: 0.3s;
    text-transform: uppercase;
  }
  .btn-primary {
    border: 2px solid #34a832;
    background-color: #34a832;
  }
  .btn-primary:hover {
    color: #001f3f;
    box-shadow: 4px 4px #ff4000;
    transition: 0.5s;
  }
  
  .btn-secondary {
    background-color: #34a832;
  }
  .btn-secondary:hover {
    color: #001f3f;
    box-shadow: 4px 4px #ff4000;
    transition: 0.5s;
  }
  .btn-success {
    background-color: #34a832;
  }
  .btn-success:hover {
    color: #001f3f;
    box-shadow: 4px 4px #ff4000;
    transition: 0.5s;
  }
  .btn-sm {
    width: 28%;
    font-size: 0.8rem;
  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  .btn-group-bw {
    justify-content: space-between;
  }
  

  `

  content = `
  <div class="container container_about">
  <aside>
      <div class="about_main_image">
          <img src="../assets/img/1.png" alt="">
      </div>
      <div class="about_sub_images">
          <div class="about_sub_image">
              <img src="../assets/img/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/img/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/img/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/img/2.jpg" alt="">
          </div>
      </div>
  </aside>
  <main>
      <section class="about_section">
          <div class="about_section_details">
              <h2>TITLE</h2>
              <h2>PRICE</h2>
              
          </div>
          <div class="about_icons">
              <i class="fa fa-heart" style="font-size:18px;color:red"></i>
              <i class="fa fa-star"style="font-size:18px;"></i>
              <i class="fa fa-upload" style="font-size:18px;"></i>
          </div>
          <div class="about-p">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro beatae nam et perferendis, veritatis dolor consequatur. Eligendi vel recusandae, unde quisquam commodi pariatur minima maiores? Omnis voluptas similique repellat, sed sit saepe molestias ipsa, corporis ab optio, ipsum nostrum et harum error sapiente neque impedit eos! Totam, optio omnis?</p>
          </div>
          <form action="">
              <div class="select_properties">
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  
              </div>
              
          </form>
          <div class="about-p">
              <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
          </div>
          <div class="btn-group btn-group-bw">
              <button class="btn btn-primary btn-sm"> RESERVE</button>
              <button class="btn btn-secondary btn-sm">FEEDBACK</button>
              <button class="btn btn-success btn-sm"><i class="fa fa-map-marker" aria-hidden="true"></i> ON MAP</button>
          </div>
          
      </section>
  </main>
</div>
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-details', PropertyDetails)