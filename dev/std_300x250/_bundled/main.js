(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var tl = new TimelineMax();
var list1 = ["a1", "a2", "a3", "a4"];
var list2 = ["a5", "a6", "a7", "a8"];
var listB = ["b1", "b2", "b3", "b4", "b5", "b6"];

function sentence(list) {
	var tl_list = new TimelineMax();
	list.map(function (item) {
		tl_list.set("." + item, { opacity: 1 }, "+=.15");
	});
	return tl_list;
}

function start() {

	tl.add(sentence(list1));
	tl.add(sentence(list2), "+=.5");

	tl.from(".logo", .3, { opacity: 0 }, "+=.2");

	tl.to(".player_tackle", .3, { x: 0, y: 0 }, "+=.5");

	tl.add('f2', "+=1");
	tl.set(".frame2", { opacity: 1 });
	tl.to(".frame1", .5, { y: "-=250", ease: Power2.easeOut }, "f2");
	tl.from(".frame2", .5, { y: "+=250", ease: Power2.easeOut }, "f2");

	tl.add('f2_all', "+=.1");
	tl.add(sentence(listB), 'f2_all');
	tl.from(".phone", .3, { y: "+=100", ease: Power2.easeOut }, "f2_all");
	tl.from(".phone_scribble", .3, { y: "+=100", ease: Power2.easeOut }, "f2_all+=.1");

	tl.from([".cta", ".footer"], .3, { opacity: 0 }, "+=.3");

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
