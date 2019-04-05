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