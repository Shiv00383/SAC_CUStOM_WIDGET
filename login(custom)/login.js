(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    <!DOCTYPE html>
<html lang="en" >
<head>
	<style>
  body {
    background-image: linear-gradient(135deg, #FAB2FF 10%, #1904E5 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Open Sans", sans-serif;
    color: #333333;
  }

  .hidden {
    /* border-style: hidden; */
    display: none;
  }

  .box-form {
    margin: 0 auto;
    /* width: 80%; */
    background: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex: 1 1 100%;
    align-items: stretch;
    justify-content: space-between;
    margin: auto;
    /* align-items: center;
display: flex;
min-height: 100vh; */
    width: 100%;
    height: 100%;
    bottom: 0%;
    margin-top: 0%;
    margin-left: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    box-shadow: 0 0 20px 6px #090b6f85;
  }

  @media (max-width: 980px) {
    .box-form {
      flex-flow: wrap;
      text-align: center;
      align-content: center;
      align-items: center;
    }
  }

  .box-form div {
    height: auto;
  }

  .box-form .left {
    color: #FFFFFF;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg");
    overflow: hidden;
  }

  .box-form .left .overlay {
    padding: 30px;
    width: 100%;
    height: 100%;
    background: #5961f9ad;
    overflow: hidden;
    box-sizing: border-box;
  }

  .box-form .left .overlay h1 {
    font-size: 10vmax;
    line-height: 1;
    font-weight: 900;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-bottom: 100px;
    margin-top: 100px;
  }

  .box-form .left .overlay span p {
    margin-top: 30px;
    font-weight: 900;
  }

  .box-form .left .overlay span a {
    background: #3b5998;
    color: #FFFFFF;
    margin-top: 10px;
    padding: 14px 50px;
    border-radius: 100px;
    display: inline-block;
    box-shadow: 0 3px 6px 1px #042d4657;
  }

  .box-form .left .overlay span a:last-child {
    background: #1dcaff;
    margin-left: 30px;
  }

  .box-form .right {
    padding: 40px;
    overflow: hidden;
    left: 0px;
    margin-right: 120px;

    
  }

  @media (max-width: 980px) {
    .box-form .right {
      width: 100%;
    }
  }

  .box-form .right h5 {
    font-size: 6vmax;
    line-height: 0; 
    margin-top: 210px;
  }

  .box-form .right p {
    font-size: 14px;
    color: #3261be;
  }

  .box-form .right .inputs {
    overflow: hidden;
  }

  .box-form .right input {
    width: 100%;
    padding: 10px;
    margin-top: 25px;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 2px solid #B0B3B9;
    align-self: center;
  }

  .box-form .right .remember-me--forget-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-form .right .remember-me--forget-password input {
    margin: 0;
    margin-right: 7px;
    width: auto;
  }

  .box-form .right button {
    float: right;
    color: #fff;
    font-size: 16px;
    padding: 12px 35px;
    border-radius: 50px;
    display: inline-block;
    border: 0;
    outline: 0;
    box-shadow: 0px 4px 20px 0px #49c628a6;
    background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
    cursor: pointer;
    margin-right: 110px;

  }

  label {
    display: block;
    position: relative;
    margin-left: 30px;
  }

  label::before {
    content: ' \f00c';
    position: absolute;
    font-family: FontAwesome;
    background: transparent;
    border: 3px solid #70F570;
    border-radius: 4px;
    color: transparent;
    left: -30px;
    transition: all 0.2s linear;
  }

  label:hover::before {
    font-family: FontAwesome;
    content: ' \f00c';
    color: #fff;
    cursor: pointer;
    background: #70F570;
  }

  label:hover::before .text-checkbox {
    background: #70F570;
  }

  label span.text-checkbox {
    display: inline-block;
    height: auto;
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  label input[type="checkbox"] {
    display: none;
  }
	</style>
  <meta charset="UTF-8">
  <title>Login Page in HTML with CSS Code</title>
  <link href="https://	fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><link rel="stylesheet" href="./style.css">

</head>
<body id="body" style="margin: auto; align-items: center; display: flex; min-height: 100vh;">
<!-- partial:index.partial.html -->
<div class="box-form">
	<div class="left">
		<div class="overlay">
		<h1>Digital-Sweep</h1>
		<p>
			<h2 style="margin-left: 25  0px; font-size: 50px;">Sharp Data for Sharp Decisions</h2>
		</p>
		<!-- <span>
			<p>login with social media</p>
			<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
		</span> -->
		</div>
	</div>
	
	
		<div class="right">
		<h5>Login</h5>
		<!-- <p>Don't have an account? <a href="">Creat Your Account</a> it takes less than a minute</p> -->
		<div class="inputs">
			<input type="text" placeholder="Username" id="username">
			<br>
			<input type="password" placeholder="Password" id="password">
		</div>
			
			<br><br>
			
		<!-- <div class="remember-me--forget-password"> -->
				<!-- Angular -->
	<!-- <label> -->
		<!-- <input type="checkbox" name="item" checked/> -->
		<!-- <span class="text-checkbox">Remember me</span> -->
	<!-- </label> -->
			<!-- <p>forget password?</p> -->
		<!-- </div> -->
			
			<br>
			<button class=".right button" onClick="getUsername()" id="btn">Login</button>
	</div>
	
</div>
<!-- partial -->
<script>
	function log1() {
    var body = document.getElementById("body");
    console.log(body);

		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if(username === "Shiv" && password === "1234567890"){
			alert("Login Successfull")
      body.style.display="none";



		}else{
			alert("Login Failed")
		}
		
	}
</script>
  
</body>
</html>


    </style>`;
    class log extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowRoot.querySelector('.right button').addEventListener('click', () => {
            var event = new Event("onClick");
            this.dispatchEvent(event);
            });
            this.getdataBindings  
        }
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            if ("color" in changedProperties) {
                this.style["background-color"] = changedProperties["color"];
            }
            if ("opacity" in changedProperties){
                this.style["opacity"] = changedProperties["opacity"];
            }
          }

        getUsername() {
            let usernameInput = this.shadowRoot.getElementById('username');
            let passwordInput = this.shadowRoot.getElementById('password');
            let username = usernameInput.value;
            let password = passwordInput.value;
            if (username === 'Shiv' && password === '123'){
               return true;
            } else {
              alert("login failed");
              return false;
              
            }
          }
          
    }
    customElements.define("login-page-sp", log);
})();
