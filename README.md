# basicwebapp
A basic deployable web app.

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

#### `package.json` Node Packet Manager 
The npm file which is used for the npm package manager.

#### `Procfile` Heroku
Specifies heroku configuration.

#### `app.json` Heroku
The heroku app file.
