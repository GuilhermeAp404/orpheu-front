import React from 'react'
import styles from './layout.module.scss'
import NavBar from './components/NavBar'

export default function layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={styles.layout}>
            <NavBar/>
            {children}
        </section>
    )
}
