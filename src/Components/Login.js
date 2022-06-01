import React from 'react'
import "../Style/LoginStyle.css"

const Login = () => {
  return (
    <div className='bg-color-pirple' style={{height: "81vh"}}>
    <div className='container-fluid' style={{width: "50vw", paddingTop: "20vh"}}>    
      <div className='text-center '>
      <main className="form-signin">
  <form>
    <h1 className="h3 mb-3 fw-normal mb-4 fw-bold " style={{fontSize: "40px",color: "black"}}>Login</h1>

    <div className="form-floating mb-4">
      <input type="email" className="form-control rounded border-white" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-4">
      <input type="password" className="form-control rounded border-white" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <a href='google.com'>Forgot Password</a>
      </label>
    </div>
    <button  className="w-100 btn btn-lg btn-primary color-chnge" type="submit">Sign in</button>
  </form>
</main>
      </div>
    </div>
    </div>

  )
}

export default Login
