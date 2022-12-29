import {useRef} from 'react'
import MainNavigation from '../layout/MainNavigation'
import { useNavigate } from "react-router-dom";
import './RequestForm.css'


function RequestForm(props){
    const aliasRef =useRef()
    const cnRef =useRef()
    const oRef =useRef()
    const cRef =useRef()
    const lRef =useRef()
    const sRef =useRef()
    const mailRef =useRef()
    const nameRef =useRef()
    const typeRef =useRef()
    const navigate = useNavigate();
    
    function submitHandler(event){
        event.preventDefault();
        const enteredalias =aliasRef.current.value
        const enteredcn =cnRef.current.value
        const enteredo =oRef.current.value
        const enteredc =cRef.current.value
        const enteredl =lRef.current.value
        const entereds =sRef.current.value
        const enteredmail =mailRef.current.value
        const enteredname =nameRef.current.value
        const enteredtype =typeRef.current.value
        
    

        const certData={
            alias:enteredalias,
            cn:enteredcn,
            organization:enteredo,
            country:enteredc,
            locality:enteredl,
            state:entereds,
            email:enteredmail,
            name:enteredname
        };

        if(enteredtype==="Self Signed Certificate"){
            const baseURL="http://localhost:2000/ss"
            fetch(baseURL,
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(certData)
            }).then(response => {
                    navigate("/download/"+enteredalias)
                    alert("certificate mailed securely")

            }).catch((error)=>
            {
                alert("Error...")
            })
        }
    
        else if(enteredtype==="Ca Authority Certificate"){
            const baseURL="http://localhost:2000/ca"
            fetch(baseURL,
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(certData)
                }).then(response => {
                    navigate("/download/"+enteredalias)
                    alert("certificate mailed securely")
            }).catch((error)=>
                {
                    alert("Error...")
                })

        }
        else{
            const baseURL="http://localhost:2000/signed"
            fetch(baseURL,
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(certData)
                }).then(response => {
                    navigate("/download/"+enteredalias)
                    alert("certificate mailed securely")
            }).catch((error)=>
                {
                    alert("Error...")
                })
        }
        
        
        
        aliasRef.current.value=""
        cnRef.current.value=""
        oRef.current.value=""
        sRef.current.value=""
        mailRef.current.value=""
        nameRef.current.value=""
        typeRef.current.value=""
        lRef.current.value=""
        cRef.current.value=""
        
    }
    return(
        <div>
            
            <MainNavigation/>
            <h2><center>Certificate Request Page</center></h2>
            
            <div className='item'>
            <form  onSubmit={submitHandler} className='form'>
                <div className='control'>
                    <label htmlFor="alias">AliasName</label>
                    <input type ="text" required id ="alias" ref ={aliasRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="cn">Common Name</label>
                    <input type ="text" required id ="cn" ref ={cnRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="organization">Organization</label>
                    <input type ="text" required id ="organization" ref ={oRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="country">Country</label>
                    <input type ="text" required id ="country" ref ={cRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="locality">Locality</label>
                    <input type ="text" required id ="locality" ref ={lRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="state">State</label>
                    <input type ="text" required id ="State" ref ={sRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="mail">Email</label>
                    <input type ="text" required id ="mail" ref ={mailRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="name">Username</label>
                    <input type ="text" required id ="name" ref ={nameRef}/>
                </div>
                <div className='control'>
                    <label htmlFor="certificateType">Certificate Type</label>
                    <select required id = "certificateType" ref={typeRef} >    
                    <option> Self Signed Certificate</option>  
                    <option> Ca Authority Certificate </option>  
                    <option> Signed Certificate </option>   
                    </select>  
                </div>

                <div className='actions'>
                    <button>Generate</button>
                </div> 
                     
            </form>
            </div>
        </div>
    )
}

export default RequestForm