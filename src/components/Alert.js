import React from 'react'

function Alert(props) {
    function capFirstLatter(word){
        const lowerFirst = word.toLowerCase() ;
        // const firstLatter = lowerFirst[0];
        return lowerFirst[0].toUpperCase() + lowerFirst.slice(1)

    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capFirstLatter(props.alert.type)}</strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert