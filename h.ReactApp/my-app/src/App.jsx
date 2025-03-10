import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State for description text
  const [text, setText] = useState("Welcome to my webpage!");

  // Function to change the text when button is clicked
  const handleClick = () => {
    setText("Thanks for visiting!");
  };

  return (
    <div className='container'>
      <h1>My React Webpage</h1>
      <p>{text}</p>
      <button className='btn' onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
