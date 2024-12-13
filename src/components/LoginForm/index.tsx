'use client'
import React from 'react';
import styles from "./style.module.scss"
import Input from '@/components/Input';
import Button from '@/components/Button';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const schema = z.object({
    email: z.string().email("Digite um e-mail válido.").min(1, 'O campo é obrigatório'),
    password: z.string().min(1, 'Senha em branco')
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
    const router = useRouter()
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    
    async function login(data:FormData){
        const res = await signIn('credentials',{
            redirect:false,
            email:data.email,
            password:data.password
        })

        if(res?.error){
            return null;
        }

        router.replace('/dashboard')
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(login)}>
                <h1>Orpheu</h1>
                <Input type='text' name='email' placeholder='E-mail' register={register} error={errors.email?.message}/>
                <Input type='password' name='password' placeholder='Password' register={register} error={errors.password?.message}/>
                <div className={styles.buttonWrapper}>
                    <Button label='Entrar' type='submit'/>
                </div>
            </form>
        </div>
    )
}
