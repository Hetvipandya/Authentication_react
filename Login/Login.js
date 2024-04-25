import './Login.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
 
  const navigate = useNavigate();
  return (
    <>


      <div className="container">

        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>

        <input type="text" placeholder="Enter Email" name="email" id="email" required />
        <br />


        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
        <br />

        <button type="button" className="registerbtn">Sign in</button>
      </div>

      <div className="container signin">
        <span onClick={() => {
          navigate("/register");
        }} >If you don't have an account click here for register</span>
      </div>
    </>
  );
}

export default Login;