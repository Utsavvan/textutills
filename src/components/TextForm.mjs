import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('UTSAV')

    const handleClickUp = () => {
        setText(text.toUpperCase())
        props.showalert('success','All text is Uppercase')
    }
    const handleClickLw = () => {
        setText(text.toLowerCase())
        props.showalert('success','All text is Lowercase')
    }
    const handleClickCl = () => {
        setText("")
        props.showalert('warning','All text is cleared')
    }
    const onChanged = (event) => {
        setText(event.target.value);
    }

	const handleClickCopyText = () => {
		var text = document.getElementById("textbox")
		text.select()
		// text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showalert('success','All text is copied to clipboard')
    }

    return (
        <React.Fragment>
            <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea style={{backgroundColor: props.mode==='dark' ? '#091828' : 'white' , color: props.mode==='dark' ? 'white' : 'black'}} className="form-control" value={text} onChange={onChanged} id="textbox" rows="8"></textarea>
                </div>
                <button onClick={handleClickUp} className="btn btn-primary mt-3 mx-3">Uppercase</button>
                <button onClick={handleClickLw} className="btn btn-primary mt-3 mx-3">Lowercase</button>
                <button onClick={handleClickCl} className="btn btn-primary mt-3 mx-3">Clear</button>
                <button onClick={handleClickCopyText} className="btn btn-primary mt-3 mx-3">Copy Text</button>
            </div>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h1>This Text has {text.split(' ').length} Words And {text.length} Characters</h1>
                <p>Estimated Reading time For this is {0.005 * text.split(' ').length} Minutes </p>
            </div>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h3>Preview</h3>
                <p>{text.length===0?"Enter something above textarea":text}</p>
            </div>
        </React.Fragment>
    )
}

export default TextForm