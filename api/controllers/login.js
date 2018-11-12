'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
const jwt = require('jsonwebtoken');
const errors = require('restify-errors');
const fs = require('fs');
const dao = require('./../../database');

const privateKey = fs.readFileSync('./jwtRS256.key', 'utf8');
const publicKey = fs.readFileSync('./jwtRS256.key.pub', 'utf8');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
    login: login,
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function login(req, res, next) {
    if (!req.body.username || !req.body.password) {
        throw new errors.BadRequestError('Error. Please provide username and password');
    }

    dao.getUser(req.body.username, req.body.password)
        .then(user => {
            if (user.length == 1) {
                const token = jwt.sign(
                    {
                        suburs: user.id,
                        username: user.username,
                    },
                    privateKey,
                    { expiresIn: 3600, algorithm: 'RS256' },
                );

                res.send(200, { access_token: token, user: user });
            } else {
                throw new errors.UnauthorizedError('');
            }
        })
        .catch(e => next(e));
}
