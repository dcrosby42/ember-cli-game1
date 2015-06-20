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

Milestone 1: Render simple tile map using table and text

- Edit map.hbs: HTML table with made-up content (3x3 tr/td layout), minor CSS to get lines and squares
- ember generate controller map
- Edit controllers/map.js: define GameMap structures, build map in init()
- Edit templates/map.hbs: generate table rows and cells by looping over map structures


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

