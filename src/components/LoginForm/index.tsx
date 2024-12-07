import React from 'react';
import styles from "./style.module.scss"
import Input from '@/components/Input';
import Button from '@/components/Button';


export default function LoginForm() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <h1>Orpheu</h1>
                <Input type='text' name='email' placeholder='E-mail'/>
                <Input type='password' name='password' placeholder='Password'/>
                <div className={styles.buttonWrapper}>
                    <Button label='Entrar' type='submit'/>
                </div>
            </form>
        </div>
    )
}
