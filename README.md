# NexLab_Strapi_API

## Development

### New Branch

1. create and checkout a new branch
2. run `npm run neon-create` to create a branch specific database from `development`

### Existing Branches

1. checkout branch
2. run `npm run neon-connect` to link your environment variable to the correct database

## Developer Setup

1. set Node version to version set in "engines" in `package.json`
2. install dependencies with `npm install`
3. install Neon database CLI using `npm i -g neonctl`
4. connect to Neon using `neon auth`
