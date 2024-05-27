import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function Article({article}){
    const router = useRouter()
    if (router.isFallback){
        return <div>"loading..."</div>
    }
    return (
        <div className={styles.container}>
         <div className={styles.homepage}>
            <article>
                <h1 className={styles.title}>{article.title}</h1>
                <p>{article.content}</p>
            </article>
            <div className={styles.code}>
                <button className={styles.backButton}  onClick={() => router.back()}>Nazad</button> 
                </div>
         </div>

        
        </div>
    )


}

export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/articles")
    const articles = await res.json()
    const paths = articles.map(article => ({
        params:{id:article.id.toString()}
 
    }))
    return {
        paths,fallback:true
    }
}
export async function getStaticProps({params}){
    const res = await fetch("http://localhost:3000/api/articles")
    const articles = await res.json()
    const article = articles.find(article => article.id === params.id)
    return {props:{article}}
}
export default Article