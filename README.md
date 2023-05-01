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

## Changelog - Front End

### tailwind.config.js

[x] darkMode determined by 'class'

### /src/App.tsx

[x] darkMode state stored using useState hook

[x] darkMode passed to NavBar component

[x] div element class set to 'dark' on truthy darkMode state

[x] section element background change on truthy darkMode state

### /src/components/NavBar.tsx

[x] define type for props

[x] showOverlay state stored using useState hook

[x] darkMode and setShowOverlay passed to SettingsDialog component

[x] SettingsDialog displayed on truthy showOverlay state

### /src/components/SettingsDialog.tsx

[x] define type for props

[x] add button to setDarkMode to !prev

[x] add button to toggle overlay