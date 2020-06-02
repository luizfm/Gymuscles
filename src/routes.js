const express = require('express')
const routes = express.Router()
const instructors = require('./app/controllers/instructors')
const Members = require('./app/controllers/members')
const Home = require('./app/controllers/Home')

routes.get('/', Home.index)

/* ===== instructors ===== */

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)


routes.post("/instructors", instructors.post)
/* ===== members ====== */

routes.get('/members', Members.index)


module.exports = routes