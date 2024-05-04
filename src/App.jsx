import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutSection from './components/Aboutsection/AboutSection';
import { useState } from 'react';

function App() {

  const [isToggle, setIsToggle] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [permission, setPermission] = useState(false);
  const [error, setError] = useState(false);

  let username = "ipsitabaral@chunn";
  let pass = "1234@34";

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = {};
    const copy = { name: name, password: password };
    if (username === copy.name && pass === copy.password) {
      console.log("login");
      setPermission(true);
    }
    else if (copy.name === "" && copy.password === "") {
      console.log("Username is required")
      validateError.name = "Username is required";
      validateError.password = "Password is required";
    }
    else if (copy.name !== "ipsitabaral@chunn") {
      console.log("Username is required")
      validateError.name = "Please enter valid Username";

    }
    else if (copy.password !== "1234@34") {
      console.log("pass is required")
      validateError.password = "Please enter valid Password";
    }




    setError(validateError);
  }

  return (
    <>
      {!permission ?
        <div className='containerer'>
          <form action="" onSubmit={handleSubmit}>
            <h3 className='text-center p'>Login</h3>
            <p>Please Enter Username and Password to Login</p>
            <div className='mb-3'>
              <div className='input'>
                <i className="fa-solid fa-user"></i><input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              {error.name && <div className='fo text-danger'>{error.name}  <span><i className="fa-solid fa-circle-exclamation"></i></span></div>}
          </div>
            <div className='mb-3'>
              <div className='input'>
                <i className="fa-solid fa-lock"></i><input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error.password && <div className='fo text-danger'>{error.password} <span><i className="fa-solid fa-circle-exclamation"></i></span> </div>}

            </div>

            <div className='sub'>
              <button type="submit" className='submit'>Login <i className="fa-solid fa-circle-right text-white"></i></button>
            </div>
          </form>
        </div>

        :
        <Router>

          <Navbar />

          <Routes>
            {isToggle && <Route path='/' element={<Home setIsToggle={setIsToggle} />} />}

            <Route path='/about' element={<AboutSection />} />



          </Routes>
          <Footer />

        </Router>
      }
    </>
  )
}

export default App
