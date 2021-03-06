/*
 * @Description:
 * @version:
 * @Author: wind.wang
 * @Date: 2022-07-08 14:02:02
 * @LastEditors: wind.wang
 * @LastEditTime: 2022-07-08 15:31:05
 */
"use strict";

var assert = require("assert");
var MyGreeter = require("../src/MyGreeter.js");

describe("MyGreeter.Client", function () {
  describe("Constructor", function () {
    it("should be instantiated", function () {
      var greeter = new MyGreeter.Client();

      assert.ok(greeter instanceof MyGreeter.Client);
    });
  });

  describe("getGreeting", function () {
    it("should return something with length", function () {
      var greeter = new MyGreeter.Client();

      assert.equal(greeter.getGreeting().length > 0, true);
    });
  });
});
