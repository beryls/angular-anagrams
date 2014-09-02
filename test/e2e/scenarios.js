'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /anagrams when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/anagrams");
  });


  describe('anagrams', function() {

    beforeEach(function() {
      browser.get('index.html#/anagrams');
    });


    it('should render anagrams when user navigates to /anagrams', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Anagram time!/);
    });

    it('should change the anagram list as user types into the text field', function() {

      var anagramList = element.all(by.repeater('anagram in findAnagrams'));
      var word = element(by.model('word'));

      expect(anagramList.count()).toBe(0);

      word.sendKeys('leppa');
      expect(anagramList.count()).toBe(1);

      word.clear();
      word.sendKeys('tra');
      expect(anagramList.count()).toBe(3);
    });

  });


  describe('puzzles', function() {

    beforeEach(function() {
      browser.get('index.html#/puzzles');
    });


    it('should render puzzles when user navigates to /puzzles', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Puzzle time!/);
    });

    it('should change the puzzle list as user types into the text field', function() {

      var puzzleList = element.all(by.repeater('puzzle in findPuzzles'));
      var word = element(by.model('word'));

      expect(puzzleList.count()).toBe(0);

      word.sendKeys('zap');
      expect(puzzleList.count()).toBe(1);

      word.clear();
      word.sendKeys('zarb');
      expect(puzzleList.count()).toBe(2);
    });

  });
});
