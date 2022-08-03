import "./App.css";
import Navbar from "./components/NavigationBar/Navbar";
import InputTextArea from "./components/TextArea/InputTextArea";
import { useState } from "react";

function App() {
  const [toggleNavColor, setToggleNavColor] = useState('light');
  const [toggleTitleStyle, setToggleTitleStyle] = useState('dark');
  const [toggleSwitchText, setToggleSwitchText] = useState("Dark Mode");

  function handleToggleStyle() {
    if(toggleNavColor === 'light') {
      setToggleNavColor('dark');
      setToggleTitleStyle('light');
      setToggleSwitchText("Light Mode");
      document.body.style.backgroundColor="#163158";
    }
    else {
      setToggleNavColor('light');
      setToggleTitleStyle('dark');
      setToggleSwitchText("Dark Mode");
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <> 
      <Navbar title="Text Utils" navStyle={toggleNavColor} handleToggleStyle={handleToggleStyle} titleStyle={toggleTitleStyle} switchText={toggleSwitchText}/>
      <div className="container">
        <InputTextArea textStyle={toggleTitleStyle}/>
      </div>
    </>
  );
}

export default App;
