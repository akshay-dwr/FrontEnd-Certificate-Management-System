import "./DownloadCertificateForm.css";
import React, { useRef, useState } from "react";
import MainNavigation from "../layout/MainNavigation";

function DownloadCertificateForm() {
  const aliasnameInputRef = useRef();
  const [getResult, setGetResult] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const baseURL = "http://localhost:2000";
    const enteredAliasname = aliasnameInputRef.current.value;

    fetch(baseURL + "/certificates/" + enteredAliasname).then((response) => {
      if (response.status === 200) {
        response.blob().then((blob) => {
          console.log(blob);
          let url = window.URL.createObjectURL(blob);
          console.log(url);
          let a = document.createElement("a");
          a.href = url;
          a.download = enteredAliasname + ".cer";
          a.click();
        });
      } else {
        alert("error");
      }
    });
  }
  function refreshPage() {
    window.location.reload(true);
  }
  return (
    <div>
       
            <MainNavigation/>
            <h2><center>Download your Certificate</center></h2>
        
      <div className='item'>
        <form className='form' onSubmit={submitHandler}>
          <div className='control'>
            <label>AliasName:</label>
            <input
              type='text'
              required
              placeholder='enter your alias name'
              id='aliasname'
              ref={aliasnameInputRef}
            />
          </div>
          <div className='actions'>
            <button>Download</button>
          </div>
          <div className='actions'>
            <button onClick={refreshPage}>Refresh</button>
          </div>
        </form>
      </div>
      <br />
      <div align='center' className='textsize'>
        {getResult}
      </div>
    </div>
  );
}

export default DownloadCertificateForm;
