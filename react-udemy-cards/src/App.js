/* import logo from './logo.svg'; */
import './App.css';
import CardsDeck from './CardsDeck';
import { useState, useEffect, useRef } from "react";



function App() {
  const [color, setColor] = useState("red");
  const [inputValue, setInputValue] = useState("red");
  const previousInputValue = useRef("red");
  useEffect(() => {
    setTimeout(() => {
      
      previousInputValue.current = color;
      setColor((color) => inputValue);
    }, 2000);
  },[color,inputValue]);

  return (
   
    <div className="container mt-3">
      
       {/* <button
        type="button" 
        class="btn btn-primary"
        onClick={() => setColor({inputValue})}
      >Change Color</button> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <h3 className='text-center' style={{color: color}}>Udemy Cards in <span  style={{textTransform: 'uppercase'}}>{color}</span> Title</h3>
      <div className="card-deck mt-4">
      
        <CardsDeck pic={`https://img-b.udemycdn.com/course/480x270/405878_e5a0_3.jpg`} 
        title="Learn Python: The Complete Python Programming Language"
        author="Avinash Jain, The Codex"
        price="Rs. 499"
        />

      <CardsDeck pic={`https://img-b.udemycdn.com/course/480x270/396876_cc92_7.jpg`} 
        title="Learn Python: The Complete Python Programming Language"
        author="Ravi Jain, The Codex"
        price="Rs. 999"
        />

      <CardsDeck pic={`https://img-b.udemycdn.com/course/480x270/394676_ce3d_5.jpg`} 
        title="Learn Python: The Complete Python Programming Language"
        author="Pooja Jain, The Codex"
        price="Rs. 899"
        />

      <CardsDeck pic={`https://img-b.udemycdn.com/course/480x270/449532_2aa9_7.jpg`} 
        title="Learn Python: The Complete Python Programming Language"
        author="Preeti Jain, The Codex"
        price="Rs. 799"
        />

    <CardsDeck pic={`https://img-b.udemycdn.com/course/480x270/426570_1b91_3.jpg`} 
        title="Learn Python: The Complete Python Programming Language"
        author="Sudha Jain, The Codex"
        price="Rs. 599"
        />
    </div>
    </div>
  );
}

export default App;
