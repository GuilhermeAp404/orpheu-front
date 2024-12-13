import React from 'react'
import styles from './style.module.scss'
import Button from '@/components/Button'
import { getSession } from 'next-auth/react'


export default function Customers() {
    const session = getSession()
    return (
        <section className={styles.page}>
            <header className={styles.page_header}>
                <h1>Fornecedores</h1>
                <Button label='+ Adicionar Fornecedor'/>
            </header>
        </section>
    )
}
