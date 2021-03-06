# Game1

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Dev Log

Milestone 0: Hello World

- (install node, npm, ember-cli)
  http://www.ember-cli.com/#getting-started
  npm install -g ember-cli
  npm install -g bower
  brew install watchman
  npm install -g phantomjs

- Create a new app called "game1"
  ember new game1
  cd game1/

- Hello world:
  ember generate route application
  ember generate route map
  Edit application.hbs: title and link to map
  Edit map: hello world
  ember serve

Milestone 1: Render simple table+text map based on static data structures:

- Edit map.hbs: HTML table with made-up content (3x3 tr/td layout), minor CSS to get lines and squares
- ember generate controller map
- Edit controllers/map.js: define GameMap structures, build map in init()
- Edit templates/map.hbs: generate table rows and cells by looping over map structures

Milestone 2: Build map via computed properties, move hero

- Define Entity structure
- Build-up 'entities' property
- Define 'map' computed property, newEmptyMap() helper
- Update view to have up/down/left/right buttons
- actions: heroUp, heroDown, etc.
- Update view to bind mapWidth and mapHeight properties

Milestone 3: Style and layout via Twitter Bootstrap

- Update index.html: Include Bootstrap CSS and JS
- Update application.hbs: Add navbar
- Rewrite HTML of map.hbs to create 2-col layout: Controls, Attributes, map view
- (minor routing and css tweaks to round things out, change default map dimensions to 10x8)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

