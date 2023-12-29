import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";
import '../App.css'
// import { userContext } from "../context/userContext";

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [userInfo, setUserInfo] = useState();
    const {logIn}=useUserContext()
    
    const onSubmit =(data) => {
      
    setUserInfo(data);
    logIn(data.username);
    
    
      console.log("Form data",data);
     
    };
    
  
    return (
  <div className="main">
      <div className="login">
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Result Portal</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label><i class="fa-solid fa-id-card-clip"></i> Username</label>
              <input
            type="text"
            name="username"
            placeholder="Username"
            
            {...register('username',{ required: 'Username is required' })}
                />

            </div>
            {/* <p>{errors.username?.message}</p> */}
            {/* <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                // ref={register({
                //   required: 'Email is required',
                //   pattern: {
                //     value: /^\S+@\S+$/i,
                //     message: 'Please write a valid email',
                //   },
                // })}
              />
            </div> */}
            {/* <p>{errors.email?.message}</p> */}
            <div className="field">
              <label><i className="fa-solid fa-key"></i> Password</label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                
                {...register('password',{
                  required: 'Password is required',
                  minLength: { value: 4, message: 'Password must be more than 4 characters' },
                  maxLength: { value: 10, message: 'Password must not exceed 10 characters' },
                })}
              />
            </div>
            {/* {errors.password && <p>{errors.password.message}</p>} */}
            <label for="role-button" className="user-role"><i class="fa-solid fa-chalkboard-user"></i> User-Role</label>
            <div className="role-button">
              <button className="ui button white">Student</button>
              <button className="ui button white">Teacher</button>
            </div>
            <div className="sign-in">
            <button className="ui button blue">Sign In</button></div>
          </div>
        </form>
        
      </div>
    <div className="right-section">
        <h1>Notices & Updates</h1>
        <div className="ui divider"></div>
        <div className="box1">
             <span>25 Aug</span>
            <span><div className="flexbox">
              <h3>Result Update</h3>
              <p>2nd Year Result Uploaded</p>
              </div></span>
      </div>
      <div className="box1">
        <span>4 Aug</span>
        <span><div className="flexbox">
          <h3>Correction Done</h3>
          <p>Error has been solved</p>
          </div></span>
      </div>
      <div className="box1">
        <span>4 July</span>
        <span><div className="flexbox">
          <h3>Even Sem Result</h3>
          <p>2nd,4th,6th & 8th sem result displayed</p>
          </div></span>
      </div>
    </div>
    </div>
    );
};

export default LoginForm;