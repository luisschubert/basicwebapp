# basicwebapp
> A basic deployable web app.

You want to make a web app but you don't know where to start.
- Write your client code in HTML, Javascript, CSS in pageview.html.
- Write your webserver code in index.js (for NodeJS).


View the webapp here: [Software Engineering Web Technology](https://salty-headland-57221.herokuapp.com/)

Experimental: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
#### Dependencies
- Node & NPM: https://nodejs.org/en/download/
- Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
- Heroku Account: https://signup.heroku.com/
- Git: https://git-scm.com/downloads
- Github Account: https://github.com/join

## How to run
#### deploy locally 
`git clone https://github.com/luisschubert/basicwebapp.git && cd basicwebapp && npm install && npm start`

#### deploy on heroku
`heroku create && git push heroku master && heroku open`

## What is what
#### `pageview.html` Webapp
The html file which contains the structure of the elements that comprise the view represented in the browser.

#### `index.js` Webapp
The node.js file that contains the webserver.
```javascript
const express = require('express');
const fs = require('fs');
const app = express();

app.set('port', (process.env.PORT || 7777));


// this creates a route for "/"
// the route responds to a HTTP request with an HTTP response
// the function that gets called for the / route
// (req, res) => {
//
// }
// (req, res) are the arguments to a function
// => denotes that the following block is the body of the function
// {} the block where the code for the function resides
app.get('/', (req, res) => {

    // read pageview.html from the os
    fs.readFile('pageview.html', (err, data) => {

        // check to see if the html file was loaded with an error
        if(err) {
            // if an error occurs return a 500 error
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
            res.statusCode = 500;
        }
        else {
            // set the header to the content html file being served
            res.setHeader('Content-type','text/html');
            // write the content of the html file to HTTP Response
            res.end(data);
        }
    })
});

// set the port number of the webserver for listening to HTTP Requests
app.listen(app.get('port'), () => {
    console.log(`Node.js server is running`);
    console.log(`Listening for clients on port ${app.get('port')}`);
    console.log('http://localhost:7777');
    console.log('http://127.0.0.1:7777');
})
```

#### `package.json` Node Packet Manager 
The npm file which is used for the npm package manager.

#### `Procfile` Heroku
Specifies heroku configuration.

#### `app.json` Heroku
The heroku app file.


## Notes:
For your web server code you could be using many different programming languages.
Amongst the most common are:
- PHP
- Python
- NodeJS
- Java
- Scala
- Ruby
- Clojure
- Go
- .Net
