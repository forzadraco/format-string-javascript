"use strict";

const str = require("../index");
const assert = require('assert');

describe('Test #1 Format String', function() {  
    describe('#format(str: string, obj :object):string', function() {
        it('Return string: Javascript language', function() {
            assert.equal(str.format("{language} language", {language: "Javascript"}), "Javascript language");
        });
    });
});

describe('Test #2 Format String With multiple object', function() {  
    describe('#format(str: string, obj :object):string', function() {
        it('Return string: Javascript language', function() {
            assert.equal(str.format("{programming.language} language", {programming: {language: "Javascript"} }), "Javascript language");
        });
    });
});

describe('Test #3 Format String With array', function() {  
    describe('#format(str: string, arr :array):string', function() {
        it('Return string: Ronaldo have 7 cars.', function() {
            assert.equal(str.pformat("Ronaldo have {} cars and {} guns.", [7, "many"]), "Ronaldo have 7 cars and many guns.");
        });
    });
});