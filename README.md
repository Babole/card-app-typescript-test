# Integrum ESG interview

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to `card-app-typescript-test` folder.

### Usage

**To run the Back End:**
- `cd ./backend`
- Run `npm install` to install dependencies.
- Run `npm run prisma-setup` to set up the database.
- Run `npm start` to launch server.

**To run the Front End:**
- `cd ./frontend`
- Run `npm install` to install dependencies.
- Run `npm run dev` to launch client.

To deploy a final build with static files:

- `npm run build`
- `cd ./dist`
- `npx serve -p 3000 -s`

**To run the tests:**
- `cd ./backend`
- Run `npm test` to launch test suite.

**To run the coverage:**
- Run `npm run coverage`.

## Changelog - Back End

### -- /prisma/schema.prisma

[x] added scheduled_for to Entry model

### -- /src/server.ts

[x] added check for scheduled_for in req.body on `/create/` route

[x] convert to Date when passing dates on `/update/:id` route

[x] wrap all routes in a function buildServer and export function

### -- /src/app.ts

[x] import and call buildServer to initialise fastify instance

### -- /test/server.test.ts

[x] create fastify instance and wait for it to be ready before all tests

[x] shutdown fastify instance after all tests

[x] add a test for each route


## Changelog - Front End

### -- tailwind.config.js

[x] darkMode determined by 'class'

### -- /src/App.tsx

[x] darkMode state stored using useState hook

[x] darkMode passed to NavBar component

[x] div element class set to 'dark' on truthy darkMode state

[x] section element background change on truthy darkMode state

### -- /src/components/NavBar.tsx

[x] define type for props

[x] showOverlay state stored using useState hook

[x] darkMode and setShowOverlay passed to SettingsDialog component

[x] SettingsDialog displayed on truthy showOverlay state

### -- /src/components/SettingsDialog.tsx

[x] define type for props

[x] add button to setDarkMode to !prev

[x] add button to toggle overlay

[x] dynamically change dark mode button label

### -- /src/@types/context.d.ts

[x] update Entry type

### -- /src/routes/NewEntry.tsx

[x] add date input for scheduled_for date

[x] add labels for date inputs

### -- /src/routes/AllEntries.tsx

[x] display scheduled_for date with each card

[x] add labels for dates

### -- /src/routes/EditEntry.tsx

[x] update for scheduled_for date