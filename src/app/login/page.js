import Link from 'next/link'
const login =()=>{
    return(
        <div className="wrapper">
      <section className="login-content">
         <div className="container h-100">
            <div className="row justify-content-center align-items-center height-self-center">
               <div className="col-md-5 col-sm-12 col-12 align-self-center">
                  <div className="sign-user_card">
                        <img src="/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/>
                     <h3 className="mb-3">Sign In</h3>
                     <p>Login to stay connected.</p>
                     <form>
                        <div className="row">
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                                 <input className="floating-input form-control" type="email" placeholder=" "/>
                                 <label>Email</label>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                                 <input className="floating-input form-control" type="password" placeholder=" "/>
                                 <label>Password</label>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="custom-control custom-checkbox mb-3 text-left">
                                 <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                 <label className="custom-control-label">Remember Me</label>
                              </div>
                           </div>
                           <div className="col-lg-6">
                            <Link  className="text-primary float-right" href="/forget-password">Forgot Password?</Link>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <p className="mt-3">
                        Create an Account <Link  className="text-primary" href="/signup">Sign Up</Link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
    );
}
export default login