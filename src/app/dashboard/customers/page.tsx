import React from 'react'
import styles from './style.module.scss'
import Button from '@/components/Button'
import CustomerDisplay from './components/CustomerDisplay'


export default function Customers() {
    return (
        <section className={styles.page}>
            <header className={styles.page_header}>
                <h1>Seus Clientes</h1>
                <Button label='+ Adicionar Cliente'/>
            </header>
            <div className={styles.customers}>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
                <CustomerDisplay/>
            </div>
        </section>
    )
}
