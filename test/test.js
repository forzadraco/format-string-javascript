"use strict";

const str = require("../index");
const assert = require('assert');

describe('Test Format String', function() {  
    describe('#format(str: string, obj :object):string', function() {
        it('Return string: Javascript', function() {
            assert.equal(str.format("{language}", {language: "Javascript"}), "Javascript");
        });
    });
});