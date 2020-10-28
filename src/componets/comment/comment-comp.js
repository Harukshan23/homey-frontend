import Base from '../Base.js'

export default class Comment extends Base {
css = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
      
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
      }
      
      body{
        background-color: #dee1e3;
        font-family: "Roboto", "Tahoma", "Arial", sans-serif;,
      }
      
      .text-right{ text-align: right; }
      
      .comments-app{
        margin: 60px auto;
        margin-left:50%;
        max-width: 680px;
        padding: 0 50px;
        width: 100%;
      }
      
      .comments-app h1{
        color: #191919;
        margin-bottom: 1.5em;
        text-align: center;
        text-shadow: 0 0 2px rgba(152, 152, 152, 1);
      }
      
      .comment-form{  }
      .comment-form .comment-avatar{  }
      
      .comment-form .form{ margin-left: 100px; }
      
      .comment-form .form .form-row{ margin-bottom: 10px; }
      .comment-form .form .form-row:last-child{ margin-bottom: 0; }
      
      .comment-form .form .input{
        background-color: #fcfcfc;
        border: none;
        border-radius: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
        color: #555f77;
        font-family: inherit;
        font-size: 14px;
        padding: 5px 10px;
        outline: none;
        width: 100%;
      
        -webkit-transition: 350ms box-shadow;
        -moz-transition: 350ms box-shadow;
        -ms-transition: 350ms box-shadow;
        -o-transition: 350ms box-shadow;
        transition: 350ms box-shadow;
      }
      
      .comment-form .form textarea.input{
        height: 100px;
        padding: 15px;
      }
      
      .comment-form .form label{
        color: #555f77;
        font-family: inherit;
        font-size: 14px;
      }
      
      .comment-form .form input[type=submit]{
        background-color: #555f77;
        border: none;
        border-radius: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
        color: #fff;
        cursor: pointer;
        display: block;
        margin-left: auto;
        outline: none;
        padding: 6px 15px;
      
        -webkit-transition: 350ms box-shadow;
        -moz-transition: 350ms box-shadow;
        -ms-transition: 350ms box-shadow;
        -o-transition: 350ms box-shadow;
        transition: 350ms box-shadow;
      }
      
      .comment-form .form .input:focus,
      .comment-form .form input[type=submit]:focus,
      .comment-form .form input[type=submit]:hover{
        box-shadow: 0 2px 6px rgba(121, 137, 148, .55);
      }
      
      .comment-form .form.ng-submitted .input.ng-invalid,
      .comment-form .form .input.ng-dirty.ng-invalid{
        box-shadow: 0 2px 6px rgba(212, 47, 47, .55) !important;
      }
      
      .comment-form .form .input.disabled {
          background-color: #E8E8E8;
      }
      
      
      .comments{  }
      
      .comment-form,
      .comment{
        margin-bottom: 20px;
        position: relative;
        z-index: 0;
      }
      
      .comment-form .comment-avatar,
      .comment .comment-avatar{
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        height: 80px;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 80px;
      }
      
      .comment-form .comment-avatar img,
      .comment .comment-avatar img{
        display: block;
        height: auto;
        width: 100%;
      }
      
      .comment .comment-box{
        background-color: #fcfcfc;
        border-radius: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
        margin-left: 100px;
        min-height: 60px;
        position: relative;
        padding: 15px;
      }
      
      .comment .comment-box:before,
      .comment .comment-box:after{
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent #FCFCFC;
        content: "";
        left: -10px;
        position: absolute;
        top: 20px;
      }
      
      .comment .comment-box:before{
        border-color: transparent rgba(0, 0, 0, .05);
         top: 22px;
      }
      
      .comment .comment-text{
        color: #555f77;
        font-size: 15px;
        margin-bottom: 25px;
      }
      
      .comment .comment-footer{
        color: #acb4c2;
        font-size: 13px;
      }
      
      .comment .comment-footer:after{
        content: "";
        display: table;
        clear: both;
      }
      
      .comment .comment-footer a{
        color: #acb4c2;
        text-decoration: none;
      
        -webkit-transition: 350ms color;
        -moz-transition: 350ms color;
        -ms-transition: 350ms color;
        -o-transition: 350ms color;
        transition: 350ms color;
      }
      
      .comment .comment-footer a:hover{
        color: #555f77;
        text-decoration: underline;
      }
      
      .comment .comment-info{
        float: left;
        width: 85%;
      }
      
      .comment .comment-author{ }
      .comment .comment-date{ }
      
      .comment .comment-date:before{
        content: "|";
        margin: 0 10px;
      }
      
      .comment-actions{
        float: left;
        text-align: right;
        width: 15%;
      }
      
    `

    content = `
    
    <div class="comments-app">
        <h1>Comments</h1>
        
        <!-- From -->
        <div class="comment-form">
          <!-- Comment Avatar -->
          <div class="comment-avatar">
            <img src="http://lorempixel.com/200/200/people">
          </div>
      
          <form class="form" name="form">
            <div class="form-row">
              <textarea class="input" placeholder="Add comment..." required></textarea>
            </div>
            <div class="form-row">
              <input class="input" placeholder="Email" type="email">
            </div>
            <div class="form-row text-right">
              <input id="comment-anonymous" type="checkbox">
              <label for="comment-anonymous">Anonymous</label>
            </div>
            <div class="form-row">
              <input type="submit" value="Add Comment">
            </div>
          </form>
        </div>
      
        <!-- Comments List -->
        <div class="comments">
          <!-- Comment -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img >
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text"></div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <em >Anonymous</em>
                    <span class="comment-author"></span>
                  </span>
                  <span class="comment-date"></span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Comment - Dummy -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img src="http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80">
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.</div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <span class="comment-author">Prameeth Maduwantha</span>
                  </span>
                  <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Comment - Dummy -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img src="http://lorempixel.com/200/200/people">
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text">Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <span class="comment-author">Osanda Rathnayake</span>
                  </span>
                  <span class="comment-date">Jan 31, 1986 11:32:04 PM</span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `


    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('comment-comp', Comment)
