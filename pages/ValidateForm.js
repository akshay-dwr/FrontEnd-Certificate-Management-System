import MainNavigation from '../layout/MainNavigation'
import './ValidateForm.css'
import React,{useRef} from 'react';

function ValidationForm()
{
    const aliasnameInputRef=useRef();
    //const [getResult,setGetResult]=useState(null);
     
    function submitHandler(event)
    {
          event.preventDefault();
          const baseURL='http://localhost:2000';
          const enteredAliasname=aliasnameInputRef.current.value;
          fetch(baseURL+"/validate/"+enteredAliasname).then((response) =>response.text()).then(str=>{
            console.log(str);
            alert(str);
          }).catch(e=>{
            console.log(e);
            alert(e);
          })
              aliasnameInputRef.current.value=""
        }

     function refreshPage(){
      window.location.reload(true);
     }
    

    return(
        <div>
            
            <MainNavigation/>
            <h2><center>Validate your Certificate</center></h2>
        
        <div className='item'>
        <form className='form'onSubmit={submitHandler}>
            <div className='control'>
            <label>AliasName:</label>
            <input type="text" required placeholder="enter your alias name" id="aliasname" ref={aliasnameInputRef}/>
            </div>
            <div className='actions'>
            <button>Validate</button>
            </div>
            <div className='actions'>
            <button onClick={refreshPage}>Refresh</button>
            </div>
        </form>
        </div>
        
        </div>
    )
}
export default ValidationForm;








