import React from 'react'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'

function Btn({text, onClick}) {
    return (
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
