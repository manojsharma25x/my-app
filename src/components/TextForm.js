import React, { useState } from 'react';

// import Alert from './components/Alert';


export default function TextForm(props) {

    const handleOnchange = (event) => {
        // console.log("onchanged");
        setText(event.target.value)

    }

    const upperCase = () => {
        // console.log("uppercase clicked");
        // let newText = ;
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase" , "success");
    }
    const lowerCase = () => {
        // console.log("lowercase clicked");

        // let newText = ;
        setText(text.toLowerCase());
        props.showalert("Converted to lowercase" , "success");
    }
    const handleCopy = () => {
        /* Get the text field */
        var copyText = document.getElementById("mybox");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        props.showalert("Coppied" , "success");
    }
    const clearText = () => {
        // let newText = ;
        setText("");
        props.showalert("Cleared" , "success");
    }



    const [text, setText] = useState('');



    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" id="mybox" rows="2" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={upperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

            <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
           { text.length > 0 && <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} letters</p>
                <p>you need {text.split(" ").length * 0.008} min</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>}
        </div>
    )
}
