import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import RequestForm from './pages/RequestForm';
import Welcome from './pages/Welcome';
import ValidateForm from './pages/ValidateForm';
import RenewForm from './pages/RenewForm';
import LoginForm from './loginImpl/LoginForm';
import RegisterForm from './loginImpl/RegisterForm'
import Downloadcert from './pages/Download';
import DownloadCertificateForm from './pages/DownloadCertificateForm';

function App() {
  return (
    <div>    
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/generate" element={<RequestForm/>} />
      <Route path="/validate" element={<ValidateForm/>} />
      <Route path="/renew" element={<RenewForm/>} />
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path ="/download/:alias" element={<Downloadcert/>}/>
      <Route path ="/download" element={<DownloadCertificateForm/>}/>
    </Routes>
  </div>
  );
}

export default App;
