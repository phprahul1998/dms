const Forgetpassword =()=>{
    return(
        <div className="wrapper">
        <section className="login-content">
           <div className="container h-100">
              <div className="row justify-content-center align-items-center height-self-center">
                 <div className="col-md-5 col-sm-12 col-12 align-self-center">
                    <div className="sign-user_card">
                          <img src="/logo2.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/>
                       <h2 className="mb-3">Reset Password</h2>
                       <p>Enter your email address and we will send you an email with instructions to reset your password.</p>
                       <form>
                          <div className="row">
                             <div className="col-lg-12">
                                <div className="floating-label form-group">
                                   <input className="floating-input form-control" type="email" placeholder=" "/>
                                   <label>Email</label>
                                </div>
                             </div>
                          </div>
                          <button type="submit" className="btn btn-primary">Reset</button>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        </div>
    );
}
export default Forgetpassword