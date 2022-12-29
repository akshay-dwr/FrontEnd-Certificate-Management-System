import {useRef} from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm(props){
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();


    function submitHandler(event){
        event.preventDefault();
        const baseURL ="http://localhost:2000/login";
        const enteredusername =usernameRef.current.value
        const enteredpassword =passwordRef.current.value
        

        const loginData={
            name:enteredusername,
            pwd:enteredpassword,
        };
        

        fetch(baseURL,
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(loginData)

            }).then((response) =>response.text()).then(str=>{
                if(str ==="welcome"){
                    navigate("/")
                   
                }
                else{
                    alert(str);
                }            
        }).catch(e=>{
            console.log(e);
          })
        usernameRef.current.value=""
        passwordRef.current.value=""
       
        
    }
    return(
        <div className='login'>
            <h2>Login Page</h2>
            <form  onSubmit={submitHandler}>
                <div >
                    <label htmlFor="username">Username</label>
                    <input type ="text" required id ="username" ref ={usernameRef}/>
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type ="password" required id ="password"  ref ={passwordRef}/>
                </div>
                <div >
                    <a id="link to register" href="/register" >New User? Register here</a>
                    <button>Login</button>
                </div>          
                
                
                
                
            </form>
        </div>
    )
}
export default LoginForm