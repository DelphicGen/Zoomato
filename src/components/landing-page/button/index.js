import React from 'react'

function Btn({text, onClick}) {
    return (
        <button onClick={onClick} className="bg-white text-blue-700 rounded-md px-5 py-1 ml-5 font-bold" data-testid="button">{text}</button>
    )
}

export default Btn
