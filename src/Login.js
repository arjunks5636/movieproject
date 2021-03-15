import React from "react"

 const Login=()=> {
    return (
        <form className="login-form">
          <div className="form-group">
          <h1>SIGN UP</h1>
          <div class="row">
    <div className="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
            <label for="exampleInputEmail1"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            
          </div>
          <div className="form-group">
      <input type="text" class="form-control" placeholder="date of birth"/>
    </div>
    <div className="form-group">
      <input type="text" class="form-control" placeholder="phone number"/>
    </div>
          <div className="form-group">
            <label for="exampleInputPassword1"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">accept terms of service,privacy policy</label>
          </div>
          <button type="submit" className="btn btn-primary">signup</button>
        </form>
    )
}
export default Login;