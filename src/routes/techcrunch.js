const { default: axios } = require('axios')
const express = require('express')
const techcrunchRouter= express.Router()

techcrunchRouter.get('/', async (req, res) => {
    
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c7710f1dbc84c3d95b5d5ad85434c73`)
        res.render('techcrunch', { articles : newsAPI.data.articles })
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



module.exports = techcrunchRouter