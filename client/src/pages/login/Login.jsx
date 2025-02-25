import React from 'react'
import { useState } from 'react';
import "./Login.css";
const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
    };
  
    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitHandler}>
            {/* Header section */}
            <div className="header-container">
                <p className="header-text">{currentState}</p>
                <hr className="divider" />
            </div>

            {/* Input fields */}
            {currentState === 'Login' ? null : (
                <input type="text" className="input" placeholder="Name" required />
            )}
            <input type="email" className="input" placeholder="Email" required />
            <input type="password" className="input" placeholder="Password" required />

            {/* Links */}
            <div className="links-container">
                <p className="link">Forgot your password?</p>
                {currentState === 'Login' ? (
                <p onClick={() => setCurrentState('Sign Up')} className="link">
                    Create Account
                </p>
                ) : (
                <p onClick={() => setCurrentState('Login')} className="link">
                    Login Here
                </p>
                )}
            </div>

            {/* Button */}
            <button>
                {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
            </form>
        </div>
    );
  };
  
  export default Login;

// const Login = () => {
    
//     const [currentState, setCurrentState] = useState('Sign Up');

//     const onSubmitHandler = async(event) => {
//         event.preventDefault();
//     }



//     return (
//     <form onSubmit={onSubmitHandler}>
//         <div >
//             <p >{currentState}</p>
//             <hr />
//         </div>
//         {currentState === 'Login' ? '' : <input type="text" placeholder='Name' required />}
//         <input type="email"  placeholder='Email' required />
//         <input type="password" placeholder='Password' required />
//         <div>
//             <p >Forgot you password?</p>
//             {
//                 currentState === 'Login' 
//                 ? <p onClick={()=>setCurrentState('Sign Up')}>Create Account</p>
//                 : <p onClick={()=>setCurrentState('Login')}>Login Here</p>
//             }
//         </div>
//         <button>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//     )
// }

// export default Login
