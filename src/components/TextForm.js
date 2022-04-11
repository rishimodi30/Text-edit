import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("ENTER THE TEXT");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleRmvWp = () => {
        let newStr = "";
        for (let i = 0; i < text.length; i++) {
            if (text.charAt[i] != " ")
                newStr = newStr + text.charAt[i];
        }
        setText(newStr)
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" class="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>TO UPPERCASE</button>
                <button className="btn btn-success mx-2" onClick={handleLowClick}>TO LOWERCASE</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>CLEAR</button>

            </div>
            <div className="container my-2">
                <h1>your text summary</h1>
                <p>{text.split(" ").length-1} and {text.length} characters</p>
                <p>can be read in around {text.split(" ").length*0.008} minutes</p>
            </div>
        </>
    )
}
