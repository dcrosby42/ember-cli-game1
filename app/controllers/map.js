import Ember from 'ember';

var GameMap = Ember.Object.extend({
  rows: []
});

var MapRow = Ember.Object.extend({
  cells: []
});

var MapCell = Ember.Object.extend({
  text: ""
});

var Entity = Ember.Object.extend({
  id: null,
  x: null,
  y: null,
  text: null
});

export default Ember.Controller.extend({
  init: function() {
    var entities = [
      Entity.create({x: 2, y: 1, text: 'HERO'}),
      Entity.create({x: 0, y: 0, text: 'SNAKE'})
    ];
    this.set('mapWidth', 10);
    this.set('mapHeight', 8);
    this.set('entities', entities);
  },

  // map: a GameMap that is reconstructed based on dimensions and entities whenever they change.
  map: function() {
    var width = this.get('mapWidth');
    if (width < 1) { width = 1; }
    var height = this.get('mapHeight');
    if (height < 1) { height = 1; }

    var map = newEmptyMap(width,height)
    var i, len, e, mapRow, mapCell;
    for (i = 0, len = this.get('entities').get('length'); i < len; i++) {
      e = this.get('entities').get(i);
      mapRow = map.get('rows').get(e.get('y'));
      if (typeof mapRow !== "undefined" && mapRow !== null) {
        mapCell = mapRow.get('cells').get(e.get('x'));
        if (typeof mapCell !== "undefined" && mapCell !== null) {
          mapCell.set('text', e.get('text'));
        }
      }
    }
    return map;
  }.property('mapWidth','mapHeight','entities.@each.x','entities.@each.y','entities.@each.text'),

  entities: [],

  actions: {
    heroUp: function() {
      var hero = this.get('entities.0');
      hero.set('y', hero.get('y') - 1);
    },
    heroLeft: function() {
      var hero = this.get('entities.0');
      hero.set('x', hero.get('x') - 1);
    },
    heroRight: function() {
      var hero = this.get('entities.0');
      hero.set('x', hero.get('x') + 1);
    },
    heroDown: function() {
      var hero = this.get('entities.0');
      hero.set('y', hero.get('y') + 1);
    }
  }
});


var newEmptyMap = function(width, height) {
  var rows = [];
  for (var r = 0; r < height; r++) {
    var cells = []
    for (var c = 0; c < width; c++) {
      var cell = MapCell.create();
      cells.push(cell);
    }
    var row = MapRow.create({cells: cells});
    rows.push(row);
  }
  var map = GameMap.create({rows: rows});
  return map;
}

