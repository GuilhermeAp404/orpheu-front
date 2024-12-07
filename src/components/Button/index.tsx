import React from 'react'
import styles from "./style.module.scss"


interface ButtonProps{
    label:string,
    type?: "submit"
    onClick?: ()=>void
}

export default function Button({label, type, onClick}:ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    )
}
