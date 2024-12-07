import { MapPin, Pencil, Trash } from 'lucide-react'
import styles from './style.module.scss'
import React from 'react'

export default function SupplierDisplay() {
    return (
        <article className={styles.display}>
            <div>
                <h2>Nome do fornecedor</h2>
                <ul>
                    <li><strong>Tel: </strong>(11) 99999-9999</li>
                    <li><strong>CNPJ: </strong>48.614.315/0001-55</li>
                    <li><MapPin  size={18}/> R. Pedrinhas de Brilhante 80</li>
                </ul>
            </div>
            <div className={styles.actions}>
                <Pencil size={32} color='#344ceb' />
                <Trash size={32} color='#eb4034'/>
            </div>
        </article>
    )
}
