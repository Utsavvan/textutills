import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('UTSAV')

    const handleClickUp = () => {
        setText(text.toUpperCase())
    }
    const handleClickLw = () => {
        setText(text.toLowerCase())
    }
    const handleClickCl = () => {
        setText("")
    }
    const onChanged = (event) => {
        setText(event.target.value);
    }

	const handleClickCopyText = () => {
		var text = document.getElementById("textbox")
		text.select()
		// text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
    }

    return (
        <React.Fragment>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={onChanged} id="textbox" rows="8"></textarea>
                </div>
                <button onClick={handleClickUp} className="btn btn-primary mt-3 mx-3">Uppercase</button>
                <button onClick={handleClickLw} className="btn btn-primary mt-3 mx-3">Lowercase</button>
                <button onClick={handleClickCl} className="btn btn-primary mt-3 mx-3">Clear</button>
                <button onClick={handleClickCopyText} className="btn btn-primary mt-3 mx-3">Copy Text</button>
            </div>
            <div className="container">
                <h1>This Text has {text.split(' ').length} Words And {text.length} Characters</h1>
                <p>Estimated Reading time For this is {0.005 * text.split(' ').length} Minutes </p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </React.Fragment>
    )
}

export default TextForm