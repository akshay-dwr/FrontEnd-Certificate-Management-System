import {  useParams } from "react-router-dom";
import './Download.css'

function Downloadcert(alias){
    const baseURL="http://localhost:2000/certificates/"
    const params = useParams();
    function DownloadFile(event){
        //alert(params.alias)
        fetch(baseURL+params.alias,
            {
                method:"GET",
                headers:{"Content-Type":"application/json"},
            }).then(response => {
                    response.blob().then(blob => {
                        var url = window.URL.createObjectURL(blob); 
                        let a = document.createElement('a');    
                        a.href = url;
                        a.download = params.alias+".cer";                    
                        a.click();
                    
                    })
                    

            }).catch((error)=>
            {
                alert("Error...")
            })
        }

    
    return(
            <div className="item">
                <div className="form">
                <h2><center>Your Certificate is ready to download</center></h2>
                <div className="actions">
                <button onClick={DownloadFile}>Download</button>
                </div>
                </div>
                
                
            </div>
        )

}
export default Downloadcert



