import React from 'react'
import propTypes from 'prop-types'

// if we passed props in react component than we use "props" or any other value as a parameter to our function 
function navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* we can access values of props by {functionParameterValue.propKey} ,like here we passed function parameter as "props" and 
                we passed prop key in components as "title" so we are using {props.title}*/}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.menu1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.switchClick} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'? 'dark' : 'light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// for declaring default prop types

// we are using "propTypes" method for adding type validation to props 

navbar.propTypes = {
    // we are using "isRequired" method to put requirment validation to props so if prop value is blank ,it will throw error. 
    title: propTypes.string.isRequired,
    menu1: propTypes.string
}

// we are using "defaultProps" method for adding default property values incase we didn't add props values. 

navbar.defaultProps = {
    title: "Put Title"
}

export default navbar