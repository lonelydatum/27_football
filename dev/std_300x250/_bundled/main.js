(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var tl = new TimelineMax();
var list1 = ["a1", "a2"];
var list2 = ["a3", "a4"];
var listB = ["b1", "b2"];
// const listB2 = ["b4", "b5", "b6" ]

TweenMax.to('.player_qb_ball', .9, { rotation: 20, ease: Power1.easeInOut, repeat: 11, yoyo: true });
TweenMax.to('.player_qb_arm', 1, { rotation: -5, ease: Power2.easeInOut, repeat: 11, yoyo: true });

function sentence(list) {
	var tl_list = new TimelineMax();
	list.map(function (item) {
		tl_list.set("." + item, { opacity: 1 }, "+=.2");
	});
	return tl_list;
}

function start() {

	tl.add(sentence(list1));
	tl.add(sentence(list2), "+=.5");

	tl.from(".logo", .3, { opacity: 0 }, "+=.2");

	tl.to([".a1", ".a2", ".a3", ".a4", ".logo"], .2, { opacity: 0 }, "+=1.5");

	tl.to(".player_tackle", .4, { x: 0, y: 0, ease: Power2.easeOut }, "+=.5");

	tl.add('f2', '+=.4');
	tl.set(".frame2", { opacity: 1 }, "f2");
	tl.to(".frame1", .4, { opacity: 0, ease: Power2.easeOut }, "f2");
	// tl.from(".frame2", .9, {x:"+=250", ease:Power2.easeOut}, "f2")

	tl.add('f2_all', "-=.1");
	tl.from(".phone", .3, { y: "+=100", ease: Power2.easeOut }, "f2_all");
	tl.from(".phone_scribble", .5, { scale: 0, ease: Power2.easeInOut }, 'f2_all+=.3');

	tl.add(sentence(listB));

	// tl.to('.b', .2, {opacity:1})
	tl.from('.cta_wager', .3, { opacity: 0 }, "+=.8");
	tl.to('.cta_wager', .1, { opacity: 0 }, "+=1.5");
	tl.from('.cta_odds', .3, { opacity: 0 }, "+=.3");

	tl.from([".footer"], .2, { opacity: 0 }, "+=.6");

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
