import React from 'react'
import styles from './Input.module.css'

function Input({value, placeholder, onChange}) {
    return (
        <div className="relative">
            <input className={`${styles.input} focus:outline-none p-2 w-full bg-transparent`} placeholder={placeholder} value={value} onChange={onChange} data-testid="input" />
            <div className={`${styles.input__after}  w-full`}></div>
        </div>
    )
}

export default Input
