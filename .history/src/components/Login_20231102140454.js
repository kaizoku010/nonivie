import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
       HEllo
       <main class="main">
	<div class="container">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign In</h1>
				<p class="text text-normal">New user? <span><a href="#" class="text text-links">Create an account</a></span>
				</p>
			</div>
			<form name="signin" class="form">
				<div class="input-control">
					<label for="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" class="input-field" placeholder="Email Address"/>
				</div>
				<div class="input-control">
					<label for="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Password"/>
				</div>
				<div class="input-control">
					<a href="#" class="text text-links">Forgot Password</a>
					<input type="submit" name="submit" class="input-submit" value="Sign In" disabled/>
				</div>
			</form>
			<div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
			<div class="method">
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-google"></i>
						<span>Sign in with Google</span>
					</a>
				</div>
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-facebook"></i>
						<span>Sign in with Facebook</span>
					</a>
				</div>
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-apple"></i>
						<span>Sign in with Apple</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</main>


    </div>
  )
}

export default Login