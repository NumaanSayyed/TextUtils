import React,{useState} from 'react'
export default function Text(props) {
    const [text,setText] = useState(' ');
    
    function toUpper() {
      let newText = text.toUpperCase()
      setText(newText)
    }
    function toLower() {
      let newText = text.toLowerCase()
      setText(newText)
    }
    function clearText() {
      let newText = ' '
      setText(newText)
      
    }
    function copyText() {
      let copyText = document.getElementById("myBox");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
    }
   
    function onChange(event) {
        setText(event.target.value)
        } 
  return (
   <>
    <div className="container my-3">
        <h1>{props.text}  </h1> 
       <textarea className="form-control" value={text} onChange={onChange} id="myBox" cols="30" rows="10"></textarea>
       <button className="btn btn-primary mx-3 my-3" onClick={toUpper} >Convert to Uppercase</button>
       <button className="btn btn-primary mx-3 my-3" onClick={toLower} >Convert to Lowercase</button>
       <button className="btn btn-primary mx-3 my-3" onClick={clearText}>Clear Text</button>
       <button className="btn btn-primary mx-3 my-3" onClick={copyText}>Copy Text</button>
   </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} char</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>

      <h2>Text Preview</h2>
      <p>{text}</p>
    </div>
   </>
   
  )
}
