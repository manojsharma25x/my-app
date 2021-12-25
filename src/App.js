import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";





function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#461111";
      document.body.style.color = "#fff";
      showAlert("dark mode has been enabled", "success");

      setInterval(() => {
        document.title = "Text Utils | Dark Mode";
      }, 1200);
      setInterval(() => {
        document.title = "Install Text Utils Now";
      }, 500);

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("light mode has been enabled", "success");
      document.title = "Text Utils | Dark Mode";
      // setTimeout(() => {
      //   document.title = "Text Utils | Dark Mode";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install Text Utils Now";
      // }, 1500);

    }


  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-5">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text" showalert={showAlert} />}>
              
            </Route>
          </Routes> */}
          <TextForm heading="Enter the text" showalert={showAlert} />
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
