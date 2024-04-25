import { useState } from 'react';
import './Registration.scss';
import { useNavigate } from "react-router-dom";
import { checkEmail } from '../utils/common';
import apiConfig from '../utils/apiConfig';

function Registration() {
    const navigate = useNavigate();
    const[name,setName]=useState("");
    const[userName,setUserName]= useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[userRole,setUserRole] = useState("");
    const[dob,setDob]= useState("");
    const[createdAt,setcreatedAt]= useState(new Date())

    const[nameError,setNameError] = useState("");
    const[userNameError,setUserNameError]= useState("");
    const[emailError,setEmailError] = useState("");
    const[passwordError,setPasswordError] = useState("");
    const[userRoleError,setUserRoleError] = useState("");
    const[dobError,setDobError]= useState("");
    const[signUpError,setSignUpError]= useState("");

   //let currentDate = newDate();


    const validateForm = async () => {
        setNameError('');
        setUserNameError('');
        setEmailError('');
        setPasswordError('');
        setUserRoleError('');
        setDobError('');

        if(name===""){
            setNameError("Please enter your name.");
        }
        else if(userName===""){
            setUserNameError("User name is required")
        }
        else if(!checkEmail(email)){
            setEmailError("Please enter valid email")
        }

        else if(password===""){
            setPasswordError("Enter your Password")
        }

        else if(userRole===""){
            setUserRoleError("Please enter your role");
        }

        else if(dob == ""){
            setDobError("Please enter your date");
        }

        else{
            await apiConfig.get('/signUp',
            {
                params: {
                    userName: userName,
                    email: email,
                    password: password,
                    userRole: userRole,
                    createdAt: createdAt
                }
            })
            .then((response) => {
                console.log(response);
                 setSignUpError("Successfully registrated");
            })
        }
    }
   
    return (
        <div className="registration">
                <div className="row">

                    <div className="col text">
                        
                    <div className="title">Registration Form</div>
                    <hr />
                    <div className="content">

                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" id="fname" required 
                                onChange={(e) => {setName(e.target.value)}}
                                />
                            </div><br />
                            <div className="input-box">
                                <span className="details">User Name</span>
                                <input type="text" placeholder="Enter your userid" id="uname" required 
                                onChange={(e) => {setUserName(e.target.value)}}
                                />
                            </div><br />
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" id="email" required 
                                onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div><br />
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" id="pass" required 
                                onChange={(e) => {setPassword (e.target.value)}}
                                />
                            </div><br />
                            <div className="input-box">
                                <span className="details">User Role</span>
                                <input type="text" placeholder="Role" id="address" required 
                                onChange={(e) => {setUserRole(e.target.value)}}
                                />
                            </div><br />
                            <div className="input-box">
                                <span className="details">Date of birth</span>
                                <input type="date" id="dob" required 
                                onChange={(e) => {setDob(e.target.value)}}
                                />
                            </div>
                        </div>

                    <div className='error'>{nameError} {userNameError} {emailError} {passwordError} {userRoleError} {dobError} {signUpError}</div>

                        <div className="button-container">
                            <span onClick={() => {
                                navigate("/login");
                            }} >Already have an account click here for login</span>


                            <div className="button">

                                <input type="button" value="Register" onClick={() => {
                                    validateForm();
                                    navigate("/login")
                                }}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    
       

    );

}

export default Registration;