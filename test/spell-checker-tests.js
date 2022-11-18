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

        it("Reports that David is spelled right", function () {
            assert.ok(isSpelledRight("David"));
        });

        it("Reports that david is misspelled", function () {
            assert.ok(!isSpelledRight("david"));
        });

    });

    describe("Spell Check add words Tests", function () {
        it("Finds the word samsquanch after adding it", function () {
            assert.ok(!isSpelledRight("samsquanch")); //Does not find the word
            addWord("samsquanch");
            assert.ok(isSpelledRight("samsquanch")); //Does find the word
        });
        /*
        //the word david (lowercase) which is a common name is found here in the test but is still
        //highlighted as incorrect on the spellchecker website
        it("Finds the word david after adding it", function () {
            assert.ok(!isSpelledRight("david")); //Does not find the word
            addWord("david");
            assert.ok(isSpelledRight("david")); //Does find the word
        });
        //the word David (uppercase) which is in the actual dictionary
        //is neither found here in the test nor in the spellchecker website
        it("Finds the word David ", function () {
            assert.ok(isSpelledRight("David")); //Does not find the word
            //addWord("David");
            //assert.ok(isSpelledRight("David")); //Does find the word
        });
        //the word argentina is found here in the test but is still highlighted
        //as incorrect in the spellchecker website
        it("Finds the word argentina after adding it", function () {
            assert.ok(!isSpelledRight("argentina")); //Does not find the word
            addWord("argentina");
            assert.ok(isSpelledRight("argentina")); //Does find the word
        });
        */
    });

});

//most proper nouns and common names are highlughted 
//as errors on the spellchecker website