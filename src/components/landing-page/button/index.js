import React from 'react'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'

function Btn({text, onClick}) {
    return (
        // <button onClick={onClick} className="bg-white text-blue-700 rounded-md px-5 py-1 ml-5 font-bold" data-testid="button">{text}</button>
        <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default Btn
