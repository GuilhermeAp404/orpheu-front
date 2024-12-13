'use client'
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { Handshake, HeartHandshake, House, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function HamburguerMenu() {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const toggleMenu = ()=>{
        setOpen(!open)
    }

    function logout(){
        signOut({
            redirect:false
        })

        router.replace('/')
    }

    useEffect(()=>{
        window.addEventListener('resize', ()=> open && setOpen(false))

        return ()=> {
            window.addEventListener('resize', ()=> open && setOpen(false))
        }
    })

    return (
        <div className={styles.wrapper_menu}>
            <div className={styles.icon} onClick={()=>toggleMenu()}>
                {open ? <X size={34}/> : <Menu size={34}/>  }
            </div>
            <nav className={`${styles.nav} ${open? styles.open: ""}` }>
                <ul>
                    <li>
                        <Link href="/dashboard">
                            <House />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/customers">
                            <HeartHandshake />
                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/suppliers">
                            <Handshake />
                            Fornecedores
                        </Link>
                    </li>
                    <li>
                        <button className={styles.logout} onClick={logout}>
                            <LogOut /> Sair
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
