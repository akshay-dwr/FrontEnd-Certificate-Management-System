import {useRef} from 'react'
import { useNavigate } from "react-router-dom";

function RegisterForm(props){
    const nameRef = useRef()
    const pwdRef = useRef()
    const navigate = useNavigate();
    
    function submitHandler(event){
        event.preventDefault();
        const baseURL ="http://localhost:2000/register";
        const enteredname =nameRef.current.value
        const enteredpwd =pwdRef.current.value

        const registrationData={
            name:enteredname,
            pwd:enteredpwd,
        };
    
        //post request here
        fetch(baseURL ,
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(registrationData)
        }).then((response)=>{
            alert("registered user")
            navigate("/login")
        }).catch((error)=>
        {
            alert("Error...")
        })
        
        nameRef.current.value=""
        pwdRef.current.value=""
        
        
    }
    return(
        <div className='register'>
            <h2>Registration Page</h2>
            <form  onSubmit={submitHandler}>
                <div >
                    <label htmlFor="name">Username</label>
                    <input type ="text" required id ="name" ref ={nameRef}/>
                </div>
                <div >
                    <label htmlFor="pwd">Password</label>
                    <input type ="password" required id ="pwd"  ref ={pwdRef}/>
                </div>
                <div >
                    <button>Register</button>
                </div>            
            </form>
        </div>
    )
}

export default RegisterForm