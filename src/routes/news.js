const { default: axios } = require('axios')
const express = require('express')
const newsRouter= express.Router()

newsRouter.get('', async (req, res) => {
    
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=0c7710f1dbc84c3d95b5d5ad85434c73`)
        res.render('news', { articles : newsAPI.data.articles })
    } catch (error) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if (err.request) {
            console.log(err.request)
        }
        else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.post('', async (req, res) => {
    let search = req.body.search;
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=0c7710f1dbc84c3d95b5d5ad85434c73`)
        res.render('newsSearch', { articles : newsAPI.data.articles })
    } catch (error) {
        if (err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if (err.request) {
            res.render('newsSearch', { articles : null })
            console.log(err.request)
        }
        else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter