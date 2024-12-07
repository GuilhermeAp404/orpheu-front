import React from 'react';
import styles from "./style.module.scss"

interface InputProps{
    name:string,
    type:string,
    placeholder:string,
}

export default function Input({name, type, placeholder}:InputProps) {
    return (
        <input name={name} type={type} placeholder={placeholder} className={styles.input}/>
    )
}
