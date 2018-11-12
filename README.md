
# Restify/JWT/Swagger (nodejs) skeleton project

JWT security system is used as API Key due to swagger 2.0 spec limitations (*in OpenAPI 3.0 the "Bearer" security scheme will be used*). The JWT must be inserted as the "APIKey" header:

    APIKey: iOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ1cnMiOjEsInVzZXJu...

The JWT signing is made with the help of a pair of RSA256 keys. To *regenerate* them, please run the `keygen.sh` command.

It also includes a simple example of mysql database pooled connection to serve as example.

*Note: Check out the swagger command options for running, verifyng, etc. and swagger docs.*

## Scripts:
        Run service:                    npm start
        Run for development:            npm dev
        Run tests:                      npm test


> Written with [StackEdit](https://stackedit.io/).
