import MainNavigation from '../layout/MainNavigation'
import classes from './RenewForm.module.css'
import {useRef} from 'react'

function RenewForm()
{   
    const aliasInputRef=useRef();
    const renewYearInputRef=useRef();


    function submitHandler(event)
    {
        event.preventDefault();
        const baseURL='http://localhost:2000/renew';
        const enteredAlias=aliasInputRef.current.value;
        const enteredRenewYear=renewYearInputRef.current.value;

        const certiData={
            alias:enteredAlias,
            renewYear:enteredRenewYear
        };

        fetch(baseURL,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(certiData)
            }).then((response) =>response.text()).then(str=>{
                alert(str);
              }).catch((error) =>
            {
                alert("Error!")
            })
            aliasInputRef.current.value=""
            renewYearInputRef.current.value=""
      }
      

        
    return(
        <div>
            
            <MainNavigation/>
            <h2><center>Renew your Certificate</center></h2>
        
        <div className={classes.item}>            
            <form className={classes.form} onSubmit={submitHandler}>
                <h4>Enter your Alias Name and Number of Years to Renew Certificate</h4>
                <div className={classes.control}>
                    <label htmlFor="title">Alias Name</label>
                    <input type="text" required id="alias" ref={aliasInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Renew Years</label>
                    <input type="text" required id="renewYear" ref={renewYearInputRef}/>
                </div>
                <div className={classes.actions}>
                <button>Renew Certificate</button>
                
            </div>
            </form>
        </div>
        </div>
        
        
    )
}
export default RenewForm;