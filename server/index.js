const express = require('express'),
      app = express();
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      config = require('./config/main'),
      router = require('./router'),
      socketEvents = require('./socketEvents');

// Connect to the database
mongoose.connect(config.database);

// Start the server
const server = app.listen(config.port);
console.log('The server is running on port ' + config.port + '.');

const io = require('socket.io').listen(server);
socketEvents(io);

// Middleware for Express requests
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enables CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// 공지 기능
var path = require("path");

var index = require("./routes/index");
var tasks = require("./routes/tasks");

const cors = require("cors");

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", index);
app.use("/api", tasks);


// video call

let stream = require( './video/ws/stream' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/stream', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

router(app);