# TS-PM2-Template

This is a basic [TypeScript](https://www.typescriptlang.org/) and [PM2](https://pm2.keymetrics.io/) template to deploy a [TypeScript](https://www.typescriptlang.org/) application into a production [PM2](https://pm2.keymetrics.io/) Environment.

## NPM Packages (``packages.json``)
- [@types/node](https://www.npmjs.com/package/@types/node) (required by typescript for the types of javascript)
- [nodemon](https://www.npmjs.com/package/nodemon) (required in dev to automatically restart the project on changes)
- [rimraf](https://www.npmjs.com/package/rimraf) (removes old build/ folder)
- [ts-node](https://www.npmjs.com/package/ts-node) (required by nodemon)
- [typescript](https://www.npmjs.com/package/typescript) (required for typescript)
- [dotenv](https://www.npmjs.com/package/dotenv) (for loading .env variables)

## NPM Scripts (``npm run``)
- ``test``: No tests added by default.
- ``start:dev``: Runs nodemon for local development.
- ``start``: Builds the project and runs the "compiled"-verison using node directly.
- ``build``: Builds the project.

## Running using [PM2](https://pm2.keymetrics.io/) (optional, but recommended for production use)
Just simply start the project using: ``pm2 start ecosystem.config.js``.  
This will build the project and run the "compiled"-version using PM2-Instance Monitoring.
