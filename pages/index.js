import styles from '../styles/Home.module.css'
import Link from 'next/Link'

function Home({articles}) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
      <h1>Dobro dolsi u nasu radionicu</h1>
      <p>Klkini ispod da se prijavis u radionicu</p>
      <Link href="/form">Prijava</Link>
     
    </div>
    <div className={styles.box}>
    {articles.map((article) =>(
      <li key={article.id}>
<Link href={`/articles/${article.id}`}>
  {article.title}
</Link>

      </li>
    )) 
}
    </div>
    </div>
  )
}
export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/articles")
  const articles = await res.json()
  return {
    props: {
        articles
    }
  }
}
export default Home