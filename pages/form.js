import React from 'react'
import styles from '../styles/Home.module.css'

const form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Dobro dosli na prijavu za radionicu</h1>
        <form  >
         <label  for="username">Korsnicko ime</label>
         <input className={styles.forma} type="text" id="username" name="username"></input><br></br>
         <label for="fname">Lozinka</label>
         <input className={styles.forma} type="password" id="password" name="password"></input><br></br>
         <input className={styles.button} type="submit" value="Submit"></input>
        </form>

        
        </div>
      </div>
  )
}

export default form