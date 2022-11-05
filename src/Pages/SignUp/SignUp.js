
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
   
   const {createUser,updateUserProfile}=useContext(AuthContext);

   const handleSignup=event=>{

    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      form.reset();
      handleProfile(name,photoURL);
      console.log(user);
    })

    .catch(err=>console.error(err));

   }


   const handleProfile=(name,photoURL)=>{
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(error=>console.error(error))
   }




    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img className='w-3/4' src={img} alt='img'/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center text-stone-600	">Sign Up!</h1>
            <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Your Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Your Password" className="input input-bordered" name='password' required/>
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' className='btn btn-outline btn-warning' value='Sign Up' />
                
              </div>
            </form>
            <p className='text-center'>Already have an Account? <Link to='/login' className='text-orange-600 font-bold underline hover:underline-offset-4'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;