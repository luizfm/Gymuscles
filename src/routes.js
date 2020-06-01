const express = require('express')
const routes = express.Router()
const Instructors = require('./app/controllers/Instructors')
const Members = require('./app/controllers/Members')
const Home = require('./app/controllers/Home')

routes.get('/', Home.index)

/* ===== instructors ===== */

routes.get('/instructors', Instructors.index)
routes.get('/instructors/create', Instructors.create)
/* ===== members ====== */

routes.get('/members', Members.index)


module.exports = routes