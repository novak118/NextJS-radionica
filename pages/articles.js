import Link from 'next/Link'
import styles from '../styles/Home.module.css'


function Articles ({articles}){
    return (
          <div className={styles.container}>
            <div className={styles.homepage}>
                <h1>
                    Lista Clanaka
                </h1>
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link href={`/articles/${article.id}`} >
                            {article.title}
                            </Link>
                        </li>
                    ))}
                </ul>
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
// a kako da na homepage prenessem 

export default Articles