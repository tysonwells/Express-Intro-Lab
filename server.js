// import modules

import express from 'express'

import * as workoutDB from './data/workout-db.js'

// create express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount middleware (app.use)

// mount routes

app.get('/', function(req, res) {
  res.send('<h1>Well, hello there!</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/workout', function(req, res) {
  workoutDB.find({}, function(error, workout) {
    res.render('workout/index', {
      workout: workout,
      error: error
    })
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

