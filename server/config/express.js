const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
const appRoot = require('app-root-path');
const logger = require(`${appRoot}/server/config/logger`);
const util = require('util');
const expressJWT = require('express-jwt');

module.exports = (app) => {
  const env = process.env.NODE_ENV || 'development';
  app.locals.env = env;
  app.locals.pretty = env === 'development';

  //app.set('views', `${appRoot}/client/public/build`);
  //app.set('view engine', 'ejs');
  app.set('trust proxy', 'loopback');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(morgan('combined', {'stream': logger.stream}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(compress());
  app.use(express.static(`${appRoot}/client/public/build`));

  app.use(helmet());
  app.use(methodOverride());

  app.use(require(`${appRoot}/server/controllers`));

  app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


  app.use(function (err, req, res, next) {
    logger.error(err.status || 500 + ' ' + util.inspect(err));

    res.status(err.status || 500).json({ name: err.name, message: err.message });
  });
};
