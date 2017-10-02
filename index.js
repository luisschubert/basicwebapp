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

// set the port number of the webserver for listening it HTTP Requests
app.listen(app.get('port'), () => {
    console.log(`Node.js server is running`);
    console.log(`Listening for clients on port ${app.get('port')}`);
    console.log('http://localhost:7777');
    console.log('http://127.0.0.1:7777');
})
