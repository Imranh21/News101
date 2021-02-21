import React, {useEffect, createContext, useReducer, useState} from 'react'
import Axios from 'axios'
import {NewsReducer} from './reducer/NewsReducer'

export const ContextProvider = createContext();


const initialState = {
    loading: true,
    data: [],
}

function NewsContext({children}) {
    const [state, dispatch] = useReducer(NewsReducer, initialState)
    const [input, setInput] = useState("")

    useEffect(() => {
        Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const searchData = (e) => {
        e.preventDefault();
        
        Axios.get(`https://newsapi.org/v2/everything?q=${input}&apiKey=52179aaf05644997badf5a31e63dfb43`)
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const scienceData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=science&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const sportsData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const coronaData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=coronavirus&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const techData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=tech&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const healthData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=health&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const businessData = () => {
        Axios.get("https://newsapi.org/v2/everything?q=business&apiKey=52179aaf05644997badf5a31e63dfb43")
        .then(res => {
            const allArticles = res.data.articles
            dispatch({type: "ALL_DATA", payload: allArticles})
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ContextProvider.Provider value={{ state, input, setInput, searchData, scienceData, sportsData, coronaData, techData, healthData, businessData }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default NewsContext
