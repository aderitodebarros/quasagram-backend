/*
  dependencies
*/
const express = require('express')


/*
  config - express
*/
const app = express()


/*
  endpoint - posts
*/

app.get('/posts', (request, response) => {
  let posts = [
    {
      caption: 'Galden Gate Bridge',
      location: "San Francisco",
    },
    {
      caption: "London Eye",
      location: "london"
    }
  ]
  response.send(posts)

})

/*
  listen
*/

app.listen(3000)
