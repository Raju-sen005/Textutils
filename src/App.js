// import logo from './logo.svg';
import "./App.css";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Navbar from "./components/Navbar.js";
import TextForms from "./components/TextForms.js";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //[This state for  Mode change]
  const [alert, setAlert] = useState(null); //[This state for  Alert message]
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    //[This function is used because the alert message was automatically deleted in 2 seconds.]
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
// [This function is used because change background colors]
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  // };
  
  const tMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add("bg-" + cls );
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils:Dark Mode";
      //[This function is used for blink]
      // setInterval(()=>{
      //   document.title="TextUtils Install now!"
      // },1000)
      // setInterval(()=>{
      // document.title="TextUtils is Amazing"
      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils:Light Mode";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} tMode={tMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForms
          showAlert={showAlert}
          heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
          mode={mode}
        />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
