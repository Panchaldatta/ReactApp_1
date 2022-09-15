import React,{useState} from 'react'

export default function TextForm(props) {
 const handleUpClick =()=>{
    let newText =text.toLocaleUpperCase();
    setText(newText)
 }
 const handleSubmit =()=>{
    let newText =('');
    setText(newText)
    alert('clarning...')
 }
 const handleLoClick =()=>{
    let newText =text.toLocaleLowerCase();
    setText(newText)
 }
 const handleOnChange =(event)=>{
    setText(event.target.value)
}
  const [text,setText]= useState(' ');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"> </textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppcase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleSubmit}>Clear</button>


    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} Charactors</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <hr />
        <p>{toString}</p>
    </div>
    </>
  )
}
