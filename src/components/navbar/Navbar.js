import React, {useContext, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styles from './Navbar.module.css'
import { ContextProvider } from '../../context/NewsContext'

function Navbar() {
    const [show, setShow] = useState(false)
    const {input, setInput, searchData,  scienceData, coronaData, techData, sportsData, healthData, businessData} = useContext(ContextProvider)
    
    const onClickHandler = () => {
        setShow(!show)
    } 

    const refresh = () => {
        window.location = "/"
    }

    return (
        <div className={styles.navContainer}>
            <nav>
                <div onClick={refresh} className={styles.logo}>
                    News101
                </div>
                <div className={styles.searchBox}>
                    <form onSubmit={searchData}>
                        <SearchIcon className={styles.searchIcon}/>
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What are you searching for?" />
                        
                    </form>
                </div>

                <div className={styles.hamBurger} onClick={onClickHandler}>
                    {show ?  <CloseIcon className={styles.closeIcon}/> : <MenuIcon className={styles.menuIcon}/>}
                </div>
                

                <ul style={{ left: show ? "0px" : "-500px" }} className={styles.listGroup} >
                    <li onClick={() => {
                        setShow(!show)
                        scienceData()}}>Science</li>
                    <li onClick={() => {
                        setShow(!show)
                        healthData()}}>Health</li>
                    <li onClick={() => {
                        setShow(!show)
                        businessData()
                    }}>Business</li>
                    <li onClick={() => {
                        setShow(!show)
                        sportsData()}}>Sports</li>
                    <li onClick={() => {
                        setShow(!show)
                        coronaData()}}>Coronavirus</li>
                    <li onClick={() => {
                        setShow(!show)
                        techData()}}>Tech</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
