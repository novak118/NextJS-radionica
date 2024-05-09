import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
      <h1>Dobro dolsi u nasu radionicu</h1>
      <p>Klkini ispod da se prijavis u radionicu</p>
      <Link href="/form">Prijava</Link>
    </div>
    </div>
  )
}
