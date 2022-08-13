import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const LoginToApp = (e) => {
    e.preventDefualt();
  };

  const register = () => {
    if(!name){
      return alert("Please enter full name");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.id,
            displayName:name,
            photoURL: profilePic,
          }))
        })
    }).catch((error) => alert(error));  
  };

  return <div className='login'>
      <img src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png' />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name(required)' type="text" />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile Pic' type="text" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />
        <input value={password} onChange={e => setPasssword(e.target.value) } placeholder='password' type="password" />

        <button type='submit' onClick={LoginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
  </div>;
}

export default Login;
