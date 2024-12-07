
import React from 'react'
import styles from './style.module.scss'
import { User } from 'lucide-react'
import Link from 'next/link'
import HamburguerMenu from '../HamburguerMenu'

export default function NavBar() {
    return (
        <div className={styles.menuWrapper}>
            <div className={styles.profile}>
                <User size={36}/>
                <span>Herb Hut Headshop</span>
            </div>
            <HamburguerMenu/>
        </div>
    )
}
