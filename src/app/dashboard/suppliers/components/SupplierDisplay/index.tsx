import { MapPin, Pencil, Trash } from 'lucide-react'
import styles from './style.module.scss'
import React from 'react'

export default function SupplierDisplay(supplier:SupplierProps) {
    return (
        <article className={styles.display}>
            <div>
                <h2>{supplier.name}</h2>
                <ul>
                    <li><strong>Tel: </strong>{supplier.phone}</li>
                    <li><strong>CNPJ: </strong>{supplier.register}</li>
                    <li><MapPin  size={18}/>{supplier.address}</li>
                </ul>
            </div>
            <div className={styles.actions}>
                <Pencil size={32} color='#344ceb' />
                <Trash size={32} color='#eb4034'/>
            </div>
        </article>
    )
}
