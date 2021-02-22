import React, {useContext} from 'react'
import { ContextProvider } from '../../context/NewsContext'
import NewsCard from './NewsCard';
import styles from './NewsList.module.css'

function NewsList() {

    const {state} = useContext(ContextProvider)
    
    const {loading, data} = state;

    if (loading){
        return "We are sorry. Newsapi.org has changed its free service to only allow API calls locally."
    }
    

    return (
        <div className={styles.newsContainer}>
            <div className={styles.cardContainer}>
                {data.map(article => {
                    return <NewsCard article={article} key={article.url}/>
                })}
            </div>
            
        </div>
    )
}

export default NewsList
