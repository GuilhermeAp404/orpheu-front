import React from 'react'
import styles from './layout.module.scss'
import NavBar from './components/NavBar'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default function layout({children}: Readonly<{children: React.ReactNode;}>) {
    const session = getServerSession(authOptions)
    
    if(!session) redirect('/')

    return (
        <section className={styles.layout}>
            <NavBar/>
            {children}
        </section>
    )
}
