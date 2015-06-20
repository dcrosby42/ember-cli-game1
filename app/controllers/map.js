import Ember from 'ember';

var Person = Ember.Object.extend({
  name: null
});

var GameMap = Ember.Object.extend({
  rows: []
});

var MapRow = Ember.Object.extend({
  cells: []
});

var MapCell = Ember.Object.extend({
  text: ""
});

export default Ember.Controller.extend({
  init: function() {
    var cells1 = [
      MapCell.create({text: 'SNAKE'}),
      MapCell.create(),
      MapCell.create()
    ];
    var row1 = MapRow.create({cells: cells1});

    var cells2 = [
      MapCell.create({text: 'mountain'}),
      MapCell.create({text: 'tree'}),
      MapCell.create({text: 'HERO'})
    ];
    var row2 = MapRow.create({cells: cells2});

    var cells3 = [
      MapCell.create({text: 'mountain'}),
      MapCell.create({text: 'tree'}),
      MapCell.create({text: '[CHEST]'})
    ];
    var row3 = MapRow.create({cells: cells3});

    var gameMap = GameMap.create({ 
      rows: [row1, row2, row3] 
    });

    this.set('map', gameMap);
  },
});
