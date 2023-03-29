import React,{useState} from 'react'
import './App.css';

function App(props) {

  const clear = ()=>{
    let newText = '';
    setText(newText)
  }

  const Change = (event)=>{
    setText(event.target.value)
  }


  const [texte, setText]= useState('');

  return (
    <div className="center">
      <div>
        <input className='input'  onChange={Change} value={texte} type="text">
          
        </input>
        <button className='clear' onClick={clear}> clear</button>
    </div>
      <h2 className='copy'>{texte}</h2>
    </div>
  );
}

export default App;
