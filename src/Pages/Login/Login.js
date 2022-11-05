import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {

  const {signIn,loginWithGoogle}=useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider();

    const googleLogin=()=>{
      loginWithGoogle(googleProvider)
      .then(result=>{
        const user=result.user;
        console.log(user);
      })
      .catch(error=>console.error(error))
    }

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        form.reset();
        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })

    }

    
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img className='w-3/4' src={img} alt='img'/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center text-stone-600	">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  placeholder="email" className="input input-bordered" name='email' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' className='btn btn-outline btn-warning' value='login' />
                
              </div>
              <div className="form-control mt-6">
                <input onClick={googleLogin} type='submit' className='btn btn-outline btn-warning' value='Login With Google' />
                
              </div>
            </form>
            <p className='text-center'>New to Genius Car <Link to='/signup' className='text-orange-600 font-bold underline hover:underline-offset-4'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;