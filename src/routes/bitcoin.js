const { default: axios } = require('axios')
const express = require('express')
const bitcoinRouter= express.Router()

bitcoinRouter.get('/', async (req, res) => {
    
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-11&sortBy=publishedAt&apiKey=0c7710f1dbc84c3d95b5d5ad85434c73`)
        res.render('bitcoin', { articles : newsAPI.data.articles })
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



module.exports = bitcoinRouter