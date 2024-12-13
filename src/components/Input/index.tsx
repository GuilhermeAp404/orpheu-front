'use client'
import React from 'react';
import styles from "./style.module.scss"
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps{
    type: string
    name: string
    placeholder:string
    register: UseFormRegister<any>
    error?:string
    rules?: RegisterOptions
}

export default function Input({name, type, placeholder, register, error, rules}:InputProps) {
    return (
        <>
            <input 
                className={styles.input}
                id={name} 
                type={type} 
                {...register(name, rules)}
                placeholder={placeholder} 
            />
            <p className={styles.error}>{error}</p>
        </>
    )
}
