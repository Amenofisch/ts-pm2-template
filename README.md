# TS-PM2-Template

This is a basic typescript and PM2 template to deploy a TypeScript application into a production PM2 Environment.

## Packages
- @types/node
- nodemon
- rimraf
- ts-node
- typescript
- dotenv

## NPM Scripts
- ``test``: No tests atm
- ``start:dev``: Runs nodemon for local development
- ``start``: Builds the project and runs the "compiled"-verison using node directly
- ``build``: Builds the project

## Running using PM2
Just simply start the project using: ``pm2 start ecosystem.config.js``