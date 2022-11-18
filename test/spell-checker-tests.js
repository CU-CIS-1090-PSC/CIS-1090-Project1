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

        it("Reports that Texas is spelled right", function () {
            assert.ok(isSpelledRight("Texas"));
        });

        it("Reports that texas is misspelled", function () {
            assert.ok(!isSpelledRight("texas"));
        });

    });

    describe("Spell Check add words Tests", function () {
        it("Finds the word samsquanch after adding it", function () {
            assert.ok(!isSpelledRight("samsquanch")); //Does not find the word
            addWord("samsquanch");
            assert.ok(isSpelledRight("samsquanch")); //Does find the word
        });
    });

    describe("Spell Check add words Tests", function () {
        it("Finds the word Juan after adding it", function () {
            assert.ok(!isSpelledRight("Juan")); //Does not find the word
            addWord("Juan");
            assert.ok(isSpelledRight("Juan")); //Does find the word
        });
    });

    describe("Test addWord function", function () {
        it("Finds the word juan after adding it", function () {
            assert.ok(!isSpelledRight("juan")); //Does not find the word
            addWord("juan");
            assert.ok(isSpelledRight("juan")); //Does find the word
        });
    });

    describe("Test addWord function", function () {
        it("Finds the word creet after adding it", function () {
            assert.ok(!isSpelledRight("creet")); //Does not find the word
            addWord("creet");
            assert.ok(isSpelledRight("creet")); //Does find the word
        });
    });

    describe("Test addWord function", function () {
        it("Finds the word Dame after adding it", function () {
            assert.ok(!isSpelledRight("Dame")); //Does not find the word
            addWord("Dame");
            assert.ok(isSpelledRight("Dame")); //Does find the word
        });
    });

});
