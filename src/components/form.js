// import React from 'react'
import React, {useState} from 'react'

export default function Form (){
  function handleOnChange(event){
    setText(event.target.value)
  }

  function handleOnClickU(){
    let newtxt = text.toUpperCase();
    setText(newtxt)
  }

  function handleOnClickL(){
    let newtxt = text.toLowerCase();
    setText(newtxt)
  }
  function deleteL(){
    setText("")
  }

  function titlecase(){
    let titleCase = "";
    text.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
    setText(titleCase)
  }
  
  const [text, setText] = useState("Enter the text");
    return(
        <>
        <div className="my-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="11" value={text}></textarea>
        </div>
        <button className="btn btn-warning me-3" onClick={deleteL}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>
        <button className="btn btn-warning me-3" onClick={handleOnClickU}>To Uppercase</button>
        <button className="btn btn-warning me-3" onClick={handleOnClickL}>To Lowercase</button>
        <button className="btn btn-warning me-3" onClick={titlecase}>To Titlecase</button>

        <h2 className="mt-3 mb-4">Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>        
        </>

    );
}