import React, {useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import styles from './Header.module.css'
import { ContextProvider } from '../../context/NewsContext'


SwiperCore.use([Navigation, Pagination, Autoplay]);


function Header() {

    const {state} = useContext(ContextProvider)
    const {data} = state

    

    return (
        <div className={styles.header}>
            <Swiper autoplay className={styles.imgContainer}>

                {data.map(arti => {
                    return <SwiperSlide className={styles.imgBox}>
                                <img className={styles.img} src={arti.urlToImage} />
                                <a href={arti.url}  className={styles.overlay}>
                                    <p>{arti.title}</p>
                                </a>
                            </SwiperSlide>
                })}
            </Swiper>
            
            
        </div>
    )
}

export default Header
