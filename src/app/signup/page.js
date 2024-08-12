import Link from 'next/link'
const signup =()=>{
    return(
        <div className="wrapper">
        <section className="login-content">
           <div className="container h-100">
              <div className="row justify-content-center align-items-center height-self-center">
                 <div className="col-md-5 col-sm-12 col-12 align-self-center">
                    <div className="sign-user_card">
                          <img src="/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/>
                       <h3 className="mb-3">Sign Up</h3>
                       <p>Create your  account.</p>
                       <form>
                          <div className="row">
                             <div className="col-lg-6">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="text" placeholder=" "/>
                                   <label>First Name</label>
                                </div>
                             </div>
                             <div className="col-lg-6">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="text" placeholder=" "/>
                                   <label>Last Name</label>
                                </div>
                             </div>
                             <div className="col-lg-12">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="email" placeholder=" "/>
                                   <label>Email</label>
                                </div>
                             </div>
                             <div className="col-lg-6">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="password" placeholder=" "/>
                                   <label>Password</label>
                                </div>
                             </div>
                             <div className="col-lg-6">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="password" placeholder=" "/>
                                   <label>Confirm Password</label>
                                </div>
                             </div>
                            
                          </div>
                          <button type="submit" className="btn btn-primary">Sign Up</button>
                          <p className="mt-3">
                             Already have an Account <Link  className="text-primary" href="/login">Login</Link>
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
export default signup