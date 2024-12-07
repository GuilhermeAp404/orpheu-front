import React from 'react'
import styles from './style.module.scss'
import Button from '@/components/Button'
import SupplierDisplay from './components/SupplierDisplay'


export default function Customers() {
    return (
        <section className={styles.page}>
            <header className={styles.page_header}>
                <h1>Fornecedores</h1>
                <Button label='+ Adicionar Fornecedor'/>
            </header>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
            <SupplierDisplay/>
        </section>
    )
}
