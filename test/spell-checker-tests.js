import { splitIntoWords, isSpelledRight, addWord } from "../src/modules/spell-checker.js"; //The module under test
import assert from "assert"; //Utilities to help the test


//These tests us a framework named Mocha https://mochajs.org/#getting-started
// "describe" and "it" are part of the mocha framework.

describe("SpellCheck tests", function () {

    //Describe tests for the splitter function
    describe("Word Split Tests", function () {

        //One example test
        it("Correctly splits the example string.", function () {
            let string = "Hello, friend!";
            let expectedResult = ['Hello', ', ', 'friend', '!'];

            //assert.deepEqual tests that two arrays have the same CONTENTS
            assert.deepEqual(splitIntoWords(string), expectedResult);
        });

    });

    describe("Spell Check Tests", function () {

        it("Reports that banana is spelled right", function () {
            assert.ok(isSpelledRight("banana"));
        });

        it("Reports that Pikachu is misspelled", function () {
            assert.ok(!isSpelledRight("Pikachu"));
        });

    });

    describe("Spell Check add words Tests", function () {
        it("Finds the word samsquanch after adding it", function () {
            assert.ok(!isSpelledRight("samsquanch")); //Does not find the word
            addWord("samsquanch");
            assert.ok(isSpelledRight("samsquanch")); //Does find the word
        });
        
        //Nevermind is not in the dictionary but it is supposed to be.  
        
        it("Finds the word nevermind after adding it", function () {
            assert.ok(!isSpelledRight("nevermind")); //Does not find the word
            addWord("nevermind");
            assert.ok(isSpelledRight("nevermind")); //Does find the word
        });
        
        // The word ass is not in the dictonary but it does not get highlighted when you type it in the dictonary. 
        it("Finds the word Ash after adding it", function () {
            assert.ok(!isSpelledRight("Ash")); //Does not find the word
            addWord("Ash");
            assert.ok(isSpelledRight("Ash")); //Does find the word
         });
    });

});
