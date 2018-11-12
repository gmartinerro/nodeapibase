
# Restify/JWT/Swagger (nodejs) skeleton project

JWT security system is used as API Key due to swagger 2.0 spec limitations (*in OpenAPI 3.0 the "Bearer" security scheme will be used*). The JWT must be inserted as the `API-Key` header:

    API-Key: iOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ1cnMiOjEsInVzZXJu...

The JWT signing is made with the help of a pair of RSA256 keys. To *regenerate* them, please run the `keygen.sh` command.

### Credentials
Login endpoint relies on the `getUser` method defined in `database.js`. Initially it checks the existence of the user executing this SQL sentence:

    SELECT * from rest WHERE username='${name}' AND password='${password}'

Hence a "rest" table must exists in the database configured in `database.js`:

    CREATE TABLE `rest` (
      `id` int(11) unsigned NOT NULL DEFAULT '0',
      `username` varchar(11) DEFAULT NULL,
      `password` varchar(11) NOT NULL DEFAULT ''
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

*Note: Check out the swagger command options for running, verifyng, etc. and swagger docs.*

## Scripts:
        Run service:                    npm start
        Run for development:            npm dev
        Run tests:                      npm test


> Written with [StackEdit](https://stackedit.io/).
