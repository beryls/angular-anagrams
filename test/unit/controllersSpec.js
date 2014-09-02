'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp'));

  var scope = {};

  describe('anagramCtrl', function(){
    var anagramCtrl;

    beforeEach(inject(function($controller) {
      anagramCtrl = $controller('anagramCtrl', { $scope: scope });
    }));

    it('should be defined', function() {
      expect(anagramCtrl).toBeDefined();
    });

    it('returns the anagrams of a series of letters in array form', function() {
      expect(scope.findAnagrams('leppa')).toEqual(['apple']);
    });

    it('should find multiple anagrams if more than one exist', function() {
      expect(scope.findAnagrams("art").length).toBe(3);
    });
  });

  describe('puzzleCtrl', function(){
    var puzzleCtrl;

    beforeEach(inject(function($controller) {
      puzzleCtrl = $controller('puzzleCtrl', { $scope: scope });
    }));

    it('should be defined', function() {
      expect(puzzleCtrl).toBeDefined();
    });

    it('should return the letter addition puzzle for "zic', function() {
      expect(scope.findPuzzles('zic')).toEqual(["zinc without the 'n'"]);
    })

    it('should return multiple letter addition puzzles if more than one exist', function() {
      expect(scope.findPuzzles("zarb").length).toBe(2);
    });
  });
});
