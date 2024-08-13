"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
const login =()=>{
   const [usernameError, setUsernameError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [loginbtntext, setBtnText] = useState('Sign in');
   const { push } = useRouter();
   const handleSubmit = async (e) => {
      e.preventDefault();
      const username = e.target.username.value.trim();
      const password = e.target.password.value.trim();
      if (!username ) {
            toast.warn('Please Enter User Name', {
            position: "top-right",
            autoClose: 600,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "colored",
           
            });
         setUsernameError(!username.trim());
         setBtnText('Login')
         return;
       }else if(!password){
         toast.warn('Please Enter Password', {
            position: "top-right",
            autoClose: 600,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            })
            setPasswordError(!password.trim());
            setBtnText('Login')
         return;
       }
     
       try {
         setBtnText('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class=""> Please wait</span>');
         const res = await signIn('credentials', {
           redirect: false,
           username,
           password,
         });
     
         if (res?.error) {
           console.error(res.error);
         } else {
           const session = await getSession();
           console.log(session);
           // Redirect to the desired page
           push('/all-file');
         }
       } catch (error) {
         console.error('An error occurred during sign-in:', error);
       }
    };
    return(
        <div className="wrapper">
      <section className="login-content">
         <div className="container h-100">
            <div className="row justify-content-center align-items-center height-self-center">
               <div className="col-md-5 col-sm-12 col-12 align-self-center">
                  <div className="sign-user_card">
                    <img src="/logo2.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/>
                     <h3 className="mb-3">Sign In</h3>
                     <p>Login to stay connected.</p>
                     <form onSubmit={handleSubmit}>
                     <div className="row">
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                              <input onChange={(e) => {
                              setUsername(e.target.value);
                              if (usernameError && e.target.value.trim()) {
                              setUsernameError(false);
                              }
                              }}
                              className={`floating-input form-control ${usernameError ? 'input-error' : ''}`}  id="username" name='username' type="text" placeholder=" "/>
                              <label>User Name</label>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="floating-label form-group">
                                 <input onChange={(e) => {
                              setPassword(e.target.value);
                              if (passwordError && e.target.value.trim()) {
                                 setPasswordError(false);
                              }
                              }}
                              className={`floating-input form-control ${passwordError ? 'input-error' : ''}`} name='password' type="password" placeholder=" "/>
                                 <label>Password</label>
                              </div>
                           </div>
                           
                           <ToastContainer />
                           <div className="col-lg-12">
                            <Link  className="text-primary float-right" href="/forget-password">Forgot Password?</Link>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-primary"  dangerouslySetInnerHTML={{ __html: loginbtntext }} />
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