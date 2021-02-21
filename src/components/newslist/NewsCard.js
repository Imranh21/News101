import React from 'react'
import styles from './NewsList.module.css'

function NewsCard({article}) {

    const {author, content, description, title, url, urlToImage, source} = article;

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img src={urlToImage} />
            </div>
            <div className={styles.cardBottom}>
                <a href={url} target="_blank">
                    <p>{title}</p>
                </a>
                
            </div>
            
        </div>
    )
}

export default NewsCard
