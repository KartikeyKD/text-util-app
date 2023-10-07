import React, { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBG=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    if(cls==='light'||cls==='dark'){
      removeBG();
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#181818 ";
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
    else{
      removeBG();
      document.body.classList.add('bg-'+cls)
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Utility App"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-2">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter Sample Text"
                mode={mode}
              />}>
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
